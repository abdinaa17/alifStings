// Global Imports
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { mockDB as listings } from "../../data/mockDB";

// Local Imports
import { SingleListing } from "../index";

const Listings = () => {
  // Set state for filter by select
  const [select, setSelect] = useState("");
  // Set state for filter by search
  const [query, setQuery] = useState("");

  // Filter select begins
  const handleSelectByCategory = (e) => {
    setSelect(e.target.value);
  };
  let filteredListings = listings.filter((listing) => {
    if (select === "restaurant") {
      return listing.category === "restaurant";
    } else if (select === "mosque") {
      return listing.category === "mosque";
    } else if (select === "daycare") {
      return listing.category === "daycare";
    }

    return listing;
  });
  // Filter select ends

  // Filter search starts
  const handleSearch = (e) => {
    e.preventDefault();
  };

  filteredListings = listings.filter((listing) => {
    return listing.title.toLowerCase().includes(query.toLowerCase());
  });
  // Filter search ends

  useEffect(() => {}, [select, query]);
  return (
    <div className="container">
      <Row className="g-3">
        <Col>
          <Form onSubmit={handleSearch} className="">
            <Form.Group className=" mx-auto">
              <Form.Control
                type="text"
                className=""
                placeholder="Search for listings"
                name="category"
                // value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            {/* <Button type="submit">Search</Button> */}
          </Form>
        </Col>
        <Col>
          <Form>
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
          </Form>
        </Col>
      </Row>
      <h1 className="my-5 text-center text-capitalize">
        Our top rated listings.
      </h1>
      <Row className="g-4">
        {filteredListings.map((listing) => {
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
