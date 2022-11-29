// Global Imports
import { useEffect, useState } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

// Local Imports
import { auth, db } from "../../config/firebase";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ListingCard } from "../../components";
import Sidebar from "./Sidebar";
import { cleanUpError } from "../../utils/cleanUpError";
// import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [user] = useAuthState(auth);
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSidebar, setIsSidebar] = useState(true);
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
        console.log(listings);
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
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="d-flex">
      <div className="positon-relative">
        <Sidebar logOutUser={logOutUser} />
      </div>
      <div className="content p-2">
        {error && <Alert className="capitalize-first">{error}</Alert>}
        <h2>
          Welcome,{" "}
          <span className="text-capitalize">
            {user && user.email.split("@")[0]}
          </span>
        </h2>
        <Row className="g-4 w-100">
          {listings && listings.length > 0
            ? listings.map((listing) => {
                return (
                  <Col key={listing.id} md={6} lg={4}>
                    <ListingCard {...listing} />
                  </Col>
                );
              })
            : "You have no listings yet!"}
        </Row>
      </div>
    </section>
  );
};

export default DashboardPage;
