// Global Imports
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

// Local Imports
import { useListings } from "../../context/ListingsContext";
import { ListingCard } from "../index";
import { LoadingSpinner } from "../index";

const Listings = () => {
  const { listings, isLoading } = useListings();
  const [category, setCategory] = useState("");

  const handleSelectByCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  // Filter based on categories
  const filteredListings = listings.filter((listing) => {
    if (category === "restaurant") {
      return listing.category === "restaurant";
    } else if (category === "daycare") {
      return listing.category === "daycare";
    } else if (category === "mosque") {
      return listing.category === "mosque";
    }

    return listing;
  });

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
                onChange={handleSelectByCategory}
                value={category}
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
      <Row className="g-4">
        {filteredListings && filteredListings.length > 0
          ? filteredListings.map((listing) => {
              return (
                <Col key={listing.id} md={6} lg={4}>
                  <ListingCard {...listing} />
                </Col>
              );
            })
          : "No Listings Found"}
      </Row>
    </div>
  );
};

export default Listings;
