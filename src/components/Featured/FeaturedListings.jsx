// Global Imports
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Local Imports
import { useListings } from "../../context/ListingsContext";
import ListingCard from "../ListingCard/ListingCard";

const FeaturedListings = () => {
  const { listings } = useListings();
  return (
    <div className="container py-3">
      <h2 className="my-5 text-center text-uppercase mx-auto">
        Our Featured listings.
      </h2>
      <Row className="g-4">
        {listings &&
          listings
            .filter((listing) => listing.featured === true)
            .slice(0, 3)
            .map((listing) => {
              return (
                <Col key={listing.id} md={6} lg={4}>
                  <ListingCard {...listing} />
                </Col>
              );
            })}
      </Row>
      <div
        className="my-4 mb-5 mx-auto text-center"
        style={{ maxWidth: "300px" }}
      >
        <Link to="/listings" className="btn btn-custom px-4" role="button">
          All Listings
        </Link>
      </div>
    </div>
  );
};

export default FeaturedListings;
