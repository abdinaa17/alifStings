// Global Imports
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// Local Imports
import { useListings } from "../../context/ListingsContext";
import { ListingCard } from "../index";
import { LoadingSpinner } from "../index";

const Listings = () => {
  const { listings, isLoading } = useListings();
  const [category, setCategory] = useState("");

  // Search input

  const { state } = useLocation();
  let filteredListings = [...listings];

  if (state) {
    filteredListings = filteredListings.filter((listing) =>
      listing.title.toLowerCase().includes(state.toLowerCase())
    );
  }
  const selectHandleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  // Filter based on categories
  // const filteredListings = listings.filter((listing) => {
  //   if (category === "restaurant") {
  //     return listing.category === "restaurant";
  //   } else if (category === "daycare") {
  //     return listing.category === "daycare";
  //   } else if (category === "mosque") {
  //     return listing.category === "mosque";
  //   }

  //   return listing;
  // });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="container">
      <Row>
        <Col md={2}>
          <Row className="g-3 mb-5 mt-2">
            <Col>
              <Form>
                <Form.Group className="mx-auto">
                  <h4>Categories</h4>
                  <Form.Select
                    style={{ maxWidth: "300px" }}
                    onChange={selectHandleChange}
                    value={category}
                  >
                    <option value="all">All</option>
                    <option value="restaurant">Restaurants</option>
                    <option value="mosque">Mosques</option>
                    <option value="daycare">Daycares</option>
                  </Form.Select>
                </Form.Group>
              </Form>
              <div>
                <h4 className="mt-5">Suggested</h4>
                <Button className="bg-light border-0 rounded-pill m-1 text-primary">
                  Open Now
                </Button>
                <Button className="bg-light border-0 rounded-pill m-1 text-primary">
                  Offers Delivery
                </Button>
                <Button className="bg-light border-0 rounded-pill m-1 text-primary">
                  Offers Takeout
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={10}>
          <Row className="g-4 mt-2 ps-2">
            {filteredListings && filteredListings.length > 0 ? (
              <>
                {state && state.length > 0 && (
                  <h2 className="mx-auto">Results for: '{state}'</h2>
                )}
                {/* {!state && (
                  <h2 className="mx-auto">No Listing matched: '{state}'</h2> // Come back to this.
                )} */}
                {filteredListings.map((listing) => {
                  return (
                    <Col key={listing.id} md={6} lg={4}>
                      <ListingCard {...listing} />
                    </Col>
                  );
                })}
              </>
            ) : (
              <div className="vh-50 text-center">
                <h1>No Lisitngs found</h1>
              </div>
            )}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Listings;
