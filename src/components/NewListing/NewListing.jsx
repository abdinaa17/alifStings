// Global Imports
import { Form, Button, FloatingLabel, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Local imports
import { useAuth } from "../../context/context";
import { LoadingSpinner } from "../index";
const NewListing = () => {
  const { listings, currentUser } = useAuth();
  const user = false;
  listings && console.log(listings);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [listing, setListing] = useState({
    title: "",
    tagline: "",
    desc: "",
    address: "",
    city: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !listing.title ||
      !listing.tagline ||
      !listing.desc ||
      !listing.address ||
      !listing.city ||
      !listing.owner ||
      !listing.phone ||
      !listing.website ||
      !listing.images
    ) {
      setFormError(true);
      return;
    }
    const listingId = Math.floor(Math.random() * 1000);
    const newListing = { ...listing, listingId };
    console.log(newListing);
    setFormError(false);
    setListing({
      title: "",
      tagline: "",
      desc: "",
      address: "",
      city: "",
      phone: "",
      website: "",
      owner: "",
      featured: false,
      images: {},
    });
    // navigate('/listings', {replace:true})
  };

  // Our loading spinner
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="banner px-3 py-5">
        <h1 className="mb-5 text-center text-capitalize text-white">
          Fill the Form to add new listing
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
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={listing.city}
              onChange={handleChange}
              placeholder="Enter City..."
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
          {/* <Form.Group className="mb-3">
            <Form.Select>
              <option>Choose a category</option>
              <option value="restaurant">Restaurant</option>
              <option value="mosque">Mosque</option>
              <option value="daycare">Daycare</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group> */}
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
              // value={listing.owner}
              onChange={handleChange}
              placeholder="Enter Owner's name..."
            />
          </Form.Group>
          {user ? (
            <Button type="submit">Save and preview</Button>
          ) : (
            <Button type="submit">Login to submit</Button>
          )}
        </Form>
        {formError && (
          <Alert style={{ maxWidth: "800px" }} className="mt-3 mx-auto">
            Please Fill in all fields
          </Alert>
        )}
      </div>
    </div>
  );
};

export default NewListing;
