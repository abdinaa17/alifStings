// Global Imports
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";

// Local Imports
import { mockDB } from "../../data/mockDB";

const FeaturedListings = () => {
  return (
    <div className="container py-3">
      <h2 className="my-5 text-center text-uppercase mx-auto">
        Our Featured listings.
      </h2>
      <Row className="g-4">
        {mockDB
          .filter((listing) => listing.featured === true)
          .map((listing) => {
            const { id, title, image, address, city, tagline } = listing;

            return (
              <Col key={id} md={6} lg={4}>
                <Card className="cursor-pointer">
                  <Link to={`/listings/${id}`}>
                    <Card.Img
                      style={{ height: 300, objectFit: "cover" }}
                      variant="top"
                      src={image}
                      alt={title}
                    />
                  </Link>

                  <Card.Body>
                    <Card.Title className="my-2">{title}</Card.Title>

                    <Card.Subtitle className="my-2 text-primary">
                      {" "}
                      {tagline}
                    </Card.Subtitle>
                    <Card.Text className="my-2">
                      <MdPlace />
                      {address} {city}
                    </Card.Text>
                    <Row>
                      <Col>
                        <p>{listing.numReviews} reviews</p>
                      </Col>

                      <Col>
                        <p>{listing.rating} ratings</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default FeaturedListings;
