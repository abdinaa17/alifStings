// Global Imports
import {
  Form,
  Button,
  FloatingLabel,
  Row,
  Col,
  Alert,
  ListGroup,
  Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

// Local imports
import { LoadingSpinner } from "../index";
import { auth, db } from "../../config/firebase";

const storage = getStorage();

const NewListing = () => {
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [listing, setListing] = useState({
    title: "",
    tagline: "",
    desc: "",
    address: "",
    category: "",
    phone: "",
    website: "",
    owner: "",
    featured: false,
    images: {},
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.files) {
      setListing((prev) => ({
        ...prev,
        images: e.target.files,
      }));
    }
    // Get the value from the checkbox
    if (e.target.checked) {
      setListing((prev) => ({
        ...prev,
        featured: e.target.checked,
      }));
    }
    if (!e.target.files && !e.target.checked) {
      setListing((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!user) {
      setIsLoading(false);
      navigate("/login", { state: { from: "/new-listing" } });
      return;
    }
    if (
      !listing.title ||
      !listing.tagline ||
      !listing.desc ||
      !listing.address ||
      !listing.owner ||
      !listing.phone ||
      !listing.category ||
      !listing.images
    ) {
      setIsLoading(false);
      setError("Fill the required fields to continue");
      return;
    }
    // We'll upload the images to firebase storage and then extract the urls and push it to our db.
    const storeImg = async (img) => {
      return new Promise((resolve, reject) => {
        const fileName = `images/${img.name}-${uuidv4()}`;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, img);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            return snapshot;
          },
          (err) => {
            setError("Error uploading image");
            reject(err);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };
    const imgUrls = await Promise.all(
      listing.images && [...listing.images].map((img) => storeImg(img))
    ).catch((err) => {
      setIsLoading(false);
      setError(err);
      return;
    });
    const newListing = {
      ...listing,
      imgUrls,
      timestamp: serverTimestamp(),
      userRef: user.uid,
    };
    delete newListing.images;
    const listingRef = await addDoc(collection(db, "listings"), newListing);
    navigate("/listings", { replace: true });
    setIsLoading(false);
    setListing({
      title: "",
      tagline: "",
      desc: "",
      address: "",
      category: "",
      phone: "",
      website: "",
      owner: "",
      featured: false,
      images: {},
    });
  };

  // Our loading spinner
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="banner px-3 py-5">
        <h1 className="mb-5 text-center text-capitalize text-white">
          Fill the Form to add new listing
        </h1>
      </div>
      <Row>
        <Col md={2}>
          <aside className="form px-3 py-5">
            <h4 className="mb-4 text-center">Form navigation</h4>
            <Nav className="flex-column">
              <Nav.Link href="#category">Category</Nav.Link>
              <Nav.Link href="#gallery">Images</Nav.Link>
              <Nav.Link href="#contact">Contact Info</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav>
          </aside>
        </Col>
        <Col md={10}>
          <div className="form px-3 py-5">
            <h4 className="mb-4 text-center">Primary Listing Details</h4>
            <Form
              onSubmit={handleSubmit}
              className="border py-3 px-2 mt-2 border-1 border-secondary mx-auto"
              style={{ maxWidth: "800px" }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Listing Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={listing.title}
                  onChange={handleChange}
                  placeholder="Enter listing name..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tag Line</Form.Label>
                <Form.Control
                  type="text"
                  name="tagline"
                  value={listing.tagline}
                  onChange={handleChange}
                  placeholder="E.g Best Place In The City..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <FloatingLabel label="Description of the listing">
                  <Form.Control
                    as="textarea"
                    name="desc"
                    value={listing.desc}
                    onChange={handleChange}
                    placeholder="Leave a comment here"
                    style={{ height: "200px" }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" id="category">
                <Form.Select
                  name="category"
                  onChange={handleChange}
                  value={listing.category}
                >
                  <option>Choose a category</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="mosque">Mosque</option>
                  <option value="daycare">Daycare</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={listing.address}
                  onChange={handleChange}
                  placeholder="Enter Address..."
                />
              </Form.Group>
              <Form.Group className="mb-3" id="contact">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={listing.phone}
                  onChange={handleChange}
                  placeholder="123 456-7890"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  type="text"
                  name="website"
                  value={listing.website}
                  onChange={handleChange}
                  placeholder="www.example.com..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Owner</Form.Label>
                <Form.Control
                  type="text"
                  name="owner"
                  value={listing.owner}
                  onChange={handleChange}
                  placeholder="Enter Owner's name..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="featured"
                  onChange={handleChange}
                  checked={listing.featured === true}
                  label="Check box if you want your listing to be featured"
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3">
                <Form.Label>Select 1 to 4 images maximum</Form.Label>
                <Form.Control
                  id="gallery"
                  type="file"
                  name="images"
                  multiple
                  onChange={handleChange}
                  accept=".jpg, .jpeg, .png"
                  placeholder="Enter Owner's name..."
                />
              </Form.Group>
              {user ? (
                <Button type="submit">Save and preview</Button>
              ) : (
                // <Link to="/login" className="btn btn-primary px-4" role="button">
                //   Login to Submit
                // </Link>
                <Button type="submit">Log In to Submit</Button>
              )}
            </Form>
            {error && (
              <Alert
                style={{ maxWidth: "800px" }}
                className="capitalize-first mt-3 mx-auto"
              >
                {error}
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewListing;
