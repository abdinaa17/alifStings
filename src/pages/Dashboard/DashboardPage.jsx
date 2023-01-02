// Global Imports
import { useEffect, useState } from "react";
import { Row, Col, Button, Alert, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

// Local Imports
import { auth, db } from "../../config/firebase";
import LoadingSpinner from "../../components/LoadingSpinner";
import Sidebar from "./Sidebar";
import { cleanUpError } from "../../utils/cleanUpError";
import { secondsToDate } from "../../utils/secondsToDate";

const DashboardPage = () => {
  const [user, loading] = useAuthState(auth);
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Get current user's listings
  const fetchUserListings = async () => {
    try {
      const listingsRef = collection(db, "listings");
      const q = query(
        listingsRef,
        where("userRef", "==", user.uid),
        orderBy("timestamp", "desc")
      );

      const unsbuscribe = onSnapshot(q, (snapshot) => {
        setListings(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setIsLoading(false);
      });
      return unsbuscribe;
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchUserListings();
  }, [user.uid]);
  // Log out user function
  const logOutUser = async () => {
    setError("");
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      const errorMessage = cleanUpError(err.code);
      setError(errorMessage);
    }
  };

  // Delete Listing
  const deleteListing = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, "listings", id));
      const newListings = listings.filter((listing) => listing.id !== id);
      setListings(newListings);
    }
  };

  if (isLoading && loading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="d-flex">
      <div className="positon-relative">
        <Sidebar logOutUser={logOutUser} />
      </div>
      <div className="content page">
        {error && <Alert className="capitalize-first">{error}</Alert>}
        <h2 className="">My Listings</h2>
        <Row className="g-4 w-100">
          <Col>
            {listings.length > 0 ? (
              <Table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Created</th>
                    <th>Featured</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.length > 0 &&
                    listings.map((listing) => {
                      return (
                        <tr key={listing.id}>
                          <td>
                            <Link to={`/listings/${listing.id}`}>
                              {listing.title}
                            </Link>
                          </td>
                          <td>{listing.category}</td>
                          <td>
                            {listing.timestamp &&
                              secondsToDate(listing.timestamp.seconds)}
                          </td>
                          <td>{listing.featured ? "Yes" : "No"}</td>
                          <td>
                            <Link
                              to={`/edit-listing/${listing.id}`}
                              className="text-info"
                            >
                              Edit
                            </Link>{" "}
                            <span className="ms-4" style={{ color: "red" }}>
                              <FaTrash
                                onClick={() => deleteListing(listing.id)}
                              />
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            ) : (
              <div>
                <p>You have no listings yet!</p>{" "}
                <Link to="/new-listing">
                  <Button className="mb-5 px-4">Add Listing</Button>{" "}
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DashboardPage;
