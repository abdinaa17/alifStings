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
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="container">
      {/* <Row className="g-3">
        <Col>
          <Form onSubmit={handleSearch} className="">
            <Form.Group className=" mx-auto">
              <Form.Control
                type="text"
                className=""
                placeholder="Search for listings"
                name="category"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
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
      </Row> */}
      <h1 className="my-5 text-center text-capitalize">
        Our top rated listings.
      </h1>
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
