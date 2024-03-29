// Global Imports
import { useState, useRef } from "react";
import { Form, Button, FloatingLabel, Row, Col, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
import { LoadingSpinner, Message } from "../index";
import { auth, db } from "../../config/firebase";
import { MdClose } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useEffect } from "react";

// Initialize firebase storage
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
    images: [],
  });
  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();

  /** FORM CONTAINER HEIGHT BEGIN
   We want to dynamically set the height of the form container so that when we add more fields to the form, the height adjusts accordingly. 
   We take this approach because we set the form navigation to position:sticky and its parent container 100% height of the form container. This enables the form navigation to always stay in same view as the form and not cross over to the footer.
   *  */
  const formRef = useRef(null);
  let formContainerRef = useRef(null);
  useEffect(() => {
    const formRefHeight = formRef.current.getBoundingClientRect().height;
    formContainerRef = formContainerRef.current.style.height = `${
      formRefHeight + 100
    }px`;
  }, [formRef]);
  /** FORM CONTAINER HEIGHT END */

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

  // remove preview img
  const removeImg = (img) => {
    setListing((prev) => ({
      ...prev,
      images: Array.from(listing.images).filter((image) => image !== img),
    }));

    // Releasing object created throught createObjectURL for memory management
    URL.revokeObjectURL(img);
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
      !listing.desc ||
      !listing.address ||
      !listing.phone ||
      !listing.category ||
      !listing.images
    ) {
      setIsLoading(false);
      setError("Fill the required fields to continue");
      return;
    }
    // Check if user has uploaded the max allowed images
    if (listing.images.length > 4) {
      setIsLoading(false);
      setError("Maximum 4 images are allowed");
      return;
    }

    // We'll upload the images to firebase storage and then extract the urls and push it to our firestore db.
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
      <Row className="mb-3" ref={formContainerRef}>
        <Col md={4} className="form__nav h-100">
          <aside
            className="form px-3 py-5 text-center"
            style={{ position: "sticky", top: "0" }}
          >
            <h4 className="mb-4 text-center">Form navigation</h4>
            <Nav
              className="flex-column form__section"
              style={{ marginTop: "2.5rem" }}
              sticky="top"
            >
              <Nav.Link href="#name" className="border-bottom">
                Title and Tagline
              </Nav.Link>
              <Nav.Link href="#desc" className="border-bottom">
                Description
              </Nav.Link>
              <Nav.Link href="#category" className="border-bottom">
                Category
              </Nav.Link>
              <Nav.Link href="#gallery" className="border-bottom">
                Images
              </Nav.Link>
              <Nav.Link href="#contact" className="border-bottom">
                Contact Info
              </Nav.Link>
              {/* <Nav.Link href="#hours" className="border-bottom">
                Business Hours
              </Nav.Link> */}
            </Nav>
          </aside>
        </Col>

        <Col md={8} ref={formRef}>
          <div className="form py-5">
            <h4 className="mb-4 text-center">Primary Listing Details</h4>
            <Form
              onSubmit={handleSubmit}
              className="py-3 px-2 mt-2 mx-auto"
              style={{ maxWidth: "800px" }}
            >
              <div className="form__section" id="name">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">
                    Listing Title <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={listing.title}
                    onChange={handleChange}
                    placeholder="Enter listing name..."
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">Tag Line</Form.Label>
                  <Form.Control
                    type="text"
                    name="tagline"
                    value={listing.tagline}
                    onChange={handleChange}
                    placeholder="E.g Best Place In The City..."
                  />
                </Form.Group>
              </div>

              <div className="form__section" id="desc">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">
                    Description <span style={{ color: "red" }}>*</span>
                  </Form.Label>
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
              </div>

              <div className="form__section" id="category">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">
                    Categories <span style={{ color: "red" }}>*</span>
                  </Form.Label>
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
              </div>

              <div className="form__section" id="gallery">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">
                    Images <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <small className="d-block mt-2 mb-3 fst-italic">
                    * Maximum 4 images allowed
                  </small>
                  <Form.Control
                    type="file"
                    name="images"
                    multiple
                    onChange={handleChange}
                    accept=".jpg, .jpeg, .png"
                  />
                </Form.Group>

                {/* Preview the images before submit */}

                <div className="d-flex justify-content-center align-items-center flex-wrap">
                  {Array.from(listing.images).map((imageUrl, idx) => {
                    return (
                      <div key={idx} style={{ position: "relative" }}>
                        <div className="preview__img position-relative">
                          <img
                            src={URL.createObjectURL(imageUrl)}
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                          <span className="img-overlay"></span>
                        </div>

                        <span
                          style={{
                            position: "absolute",
                            top: "30px",
                            right: "20px",
                            fontSize: "1.5rem",
                            color: "white",
                            padding: "0",
                          }}
                          onClick={() => removeImg(imageUrl)}
                        >
                          <MdClose />
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* Preview the images before submit end */}
              </div>

              <div className="form__section" id="contact">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">
                    Address <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={listing.address}
                    onChange={handleChange}
                    placeholder="Enter Address..."
                  />
                </Form.Group>
                <Form.Group className="mb-3" id="contact">
                  <Form.Label className="fw-bold mb-3">
                    Phone <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={listing.phone}
                    onChange={handleChange}
                    placeholder="123 456-7890"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">Website</Form.Label>
                  <Form.Control
                    type="text"
                    name="website"
                    value={listing.website}
                    onChange={handleChange}
                    placeholder="www.example.com..."
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">Owner</Form.Label>
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
              </div>

              {/* <div className="form__section" id="hours">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold mb-3">
                    Business Hours
                  </Form.Label>
                  <Form.Select name="hours">Days</Form.Select>
                </Form.Group>
              </div> */}
              <br />
              {user ? (
                <Button type="submit" className="w-100 btn-lg">
                  Save and preview
                </Button>
              ) : (
                <Button type="submit" className="w-100 btn-lg">
                  Log In to Submit
                </Button>
              )}
            </Form>
            <br />
            <div className="mb-5">
              {error && (
                <Message
                  style={{ maxWidth: "800px" }}
                  className="capitalize-first mx-auto"
                  variant="danger"
                >
                  {error}
                </Message>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Nav className="mobile__view position-relative">
        <Nav.Link
          href="#name"
          style={{ position: "absolute", bottom: "10px", right: "0" }}
        >
          <FaArrowAltCircleUp size={24} />
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NewListing;
