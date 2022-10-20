// Global Imports
import { Row, Col } from "react-bootstrap";
import { mockDB } from "../../data/mockDB";

// Local Imports
import { SingleListing } from "../index";

const Listings = () => {
  return (
    <div className="container">
      <h1 className="my-5 text-center text-capitalize">
        Our top rated listings.
      </h1>
      <Row className="g-4">
        {mockDB.map((listing) => {
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
