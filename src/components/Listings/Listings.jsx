// Global Imports
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

// Local Imports
import { useListings } from "../../context/ListingsContext";
import { ListingCard } from "../index";
import { LoadingSpinner } from "../index";

const Listings = () => {
  const { listings, isLoading } = useListings();
  const filter = listings.filter((listing) => listing.category === "daycare");

  console.log(filter);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      <h1 className="text-center text-capitalize">Our top rated listings.</h1>
      <Row className="g-3 mb-5 mt-2">
        <Col>
          <Form>
            <Form.Group className="mx-auto">
              <Form.Select
                style={{ maxWidth: "300px" }}
                // onChange={handleSelectByCategory}
                // value={select}
              >
                <option value="">All Categories</option>
                <option value="restaurant">Restaurants</option>
                <option value="mosque">Mosques</option>
                <option value="daycare">Daycares</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="g-4">
        {listings &&
          listings.map((listing) => {
            return (
              <Col key={listing.id} md={6} lg={4}>
                <ListingCard {...listing} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Listings;
