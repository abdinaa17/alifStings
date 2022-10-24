// Global Imports
import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { mockDB as listings } from "../../data/mockDB";

// Local Imports
import { SingleListing } from "../index";

const Listings = () => {
  const tempListings = [...listings];

  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelect(value);
    // console.log(value);
    if (value === "restaurant") {
      listings.filter((l) => l.category === "restaurant");
      console.log("restaurant");
    }
    if (value === "mosque") {
      // listings.filter((l) => l.category === "restaurant");
      console.log("Mosques");
    }
    if (value === "daycare") {
      // listings.filter((l) => l.category === "restaurant");
      console.log("Daycare");
    }
    return listings;
  };
  return (
    <div className="container">
      <Form className="container">
        <Row className="g-3">
          <Col>
            <Form.Group className=" mx-auto">
              <Form.Control
                type="search"
                className=""
                placeholder="Search for listings"
                name="category"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mx-auto">
              <Form.Select className="" onChange={handleChange} value={select}>
                <option value="All">All Categories</option>
                <option value="restaurant">Restaurants</option>
                <option value="mosque">Mosques</option>
                <option value="daycare">Daycares</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <h1 className="my-5 text-center text-capitalize">
        Our top rated listings.
      </h1>
      <Row className="g-4">
        {listings.map((listing) => {
          return (
            <Col key={listing.id} md={6} lg={4}>
              <SingleListing {...listing} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Listings;
