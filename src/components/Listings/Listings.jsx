// Global Imports
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { mockDB as listings } from "../../data/mockDB";

// Local Imports
import { SingleListing } from "../index";

const Listings = () => {
  // const [listings, setListings] = useState(mockDB);

  const [select, setSelect] = useState("");

  const handleSelectByCategory = (e) => {
    const value = e.target.value;
    setSelect(value);
  };
  let filtered = listings.filter((listing) => {
    if (select === "restaurant") {
      return listing.category === "restaurant";
    } else if (select === "mosque") {
      return listing.category === "mosque";
    } else if (select === "daycare") {
      return listing.category === "daycare";
    } else {
      return listing;
    }
  });
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
              <Form.Select
                className=""
                onChange={handleSelectByCategory}
                value={select}
              >
                <option value="all">All Categories</option>
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
        {filtered.map((listing) => {
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
