// Global Imports
import { Form, Button, FloatingLabel, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  serverTimestamp,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

// Local imports
import { auth, db } from "../config/firebase";
import { LoadingSpinner } from "../components";

const storage = getStorage();

const newListing = () => {
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [currentListing, setCurrentListing] = useState(null);
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

  // Get the current listing id
  const { id } = useParams();

  const fetchCurrentListing = async () => {
    const listingRef = doc(db, "listings", id);
    const docSnap = await getDoc(listingRef);
    if (docSnap.exists()) {
      setCurrentListing(docSnap.data());
      setListing({ ...docSnap.data() });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCurrentListing();
  }, [id]);

  console.log(currentListing);

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
      setError("You cant edit this page");
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
    const docRef = doc(db, "listings", id);

    await updateDoc(docRef, newListing);

    navigate("/listings");
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
          Edit listing
        </h1>
      </div>
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
          <Form.Group className="mb-3">
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
          <Form.Group className="mb-3">
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
              type="file"
              name="images"
              multiple
              onChange={handleChange}
              accept=".jpg, .jpeg, .png"
              placeholder="Enter Owner's name..."
            />
          </Form.Group>
          <Button type="submit">Update Listing</Button>
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
    </div>
  );
};

export default newListing;
