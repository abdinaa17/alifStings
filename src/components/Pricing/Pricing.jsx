// Global Imports
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const pricingPlan = [
  {
    id: 1,
    type: "free",
    price: "free",
    // services: [{

    // }]
  },
];
const Pricing = () => {
  return (
    <div>
      <div className="banner px-3 py-5">
        <h1 className="mb-5 text-center text-capitalize text-white">
          select your plan
        </h1>
      </div>
      <div className=" px-3 py-5">
        <Row className="g-5">
          <Col md={4}>
            <Card className="text-center mx-auto" style={{ maxWidth: "350px" }}>
              <Card.Body
                style={{
                  background: "#111",
                  color: "#fff",
                }}
              >
                <Card.Subtitle className="my-2 border rounded w-25 mx-auto">
                  Free
                </Card.Subtitle>
                <Card.Text className="my-3 fw-bolder fs-2">Free</Card.Text>
                <Card.Text className="my-3">Per Listing</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Duration : 10 days</ListGroup.Item>
                <ListGroup.Item>Contact Display</ListGroup.Item>
                <ListGroup.Item> Image Gallery</ListGroup.Item>
                <ListGroup.Item> Video</ListGroup.Item>
                <ListGroup.Item> Business Tagline</ListGroup.Item>
                <ListGroup.Item> Location</ListGroup.Item>
                <ListGroup.Item> Website</ListGroup.Item>
                <ListGroup.Item> FAQ</ListGroup.Item>
              </ListGroup>
            </Card>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/new-listing" className="w-50">
                <Button
                  variant="custom"
                  className="my-4 border ms-3 py-2 border-2 w-75"
                >
                  Continue
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <Card className="text-center mx-auto" style={{ maxWidth: "350px" }}>
              <Card.Body
                style={{
                  background: "#111",
                  color: "#fff",
                }}
              >
                <Card.Subtitle className="my-2 border rounded w-25 mx-auto">
                  Basic
                </Card.Subtitle>
                <Card.Text className="my-3 fw-bolder fs-2">$12.00</Card.Text>
                <Card.Text className="my-3">Per Listing</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Duration : 10 days</ListGroup.Item>
                <ListGroup.Item>Contact Display</ListGroup.Item>
                <ListGroup.Item> Image Gallery</ListGroup.Item>
                <ListGroup.Item> Video</ListGroup.Item>
                <ListGroup.Item> Business Tagline</ListGroup.Item>
                <ListGroup.Item> Location</ListGroup.Item>
                <ListGroup.Item> Website</ListGroup.Item>
                <ListGroup.Item> FAQ</ListGroup.Item>
                <ListGroup.Item> Menu</ListGroup.Item>
                <ListGroup.Item> Price Range</ListGroup.Item>
                <ListGroup.Item> Announcement</ListGroup.Item>
                <ListGroup.Item> Business Hours</ListGroup.Item>
              </ListGroup>
            </Card>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/new-listing" className="w-50">
                <Button
                  variant="custom"
                  className="my-4 border ms-3 py-2 border-2 w-75"
                >
                  Continue
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <Card className="text-center mx-auto" style={{ maxWidth: "350px" }}>
              <Card.Body
                style={{
                  background: "#111",
                  color: "#fff",
                }}
              >
                <Card.Subtitle className="my-2 border rounded w-25 mx-auto">
                  Premium
                </Card.Subtitle>
                <Card.Text className="my-3 fw-bolder fs-2">$32.00</Card.Text>
                <Card.Text className="my-3">Per Listing</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Duration : 10 days</ListGroup.Item>
                <ListGroup.Item>Contact Display</ListGroup.Item>
                <ListGroup.Item> Image Gallery</ListGroup.Item>
                <ListGroup.Item> Video</ListGroup.Item>
                <ListGroup.Item> Business Tagline</ListGroup.Item>
                <ListGroup.Item> Location</ListGroup.Item>
                <ListGroup.Item> Website</ListGroup.Item>
                <ListGroup.Item> FAQ</ListGroup.Item>
                <ListGroup.Item> Menu</ListGroup.Item>
                <ListGroup.Item> Price Range</ListGroup.Item>
                <ListGroup.Item> Announcement</ListGroup.Item>
                <ListGroup.Item> Business Hours</ListGroup.Item>
                <ListGroup.Item>Events</ListGroup.Item>
                <ListGroup.Item> Bookings</ListGroup.Item>
                <ListGroup.Item> Google Ads</ListGroup.Item>
                <ListGroup.Item> 24 Hour Support</ListGroup.Item>
              </ListGroup>
            </Card>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/new-listing" className="w-50">
                <Button
                  variant="custom"
                  className="my-4 border ms-3 py-2 border-2 w-75"
                >
                  Continue
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Pricing;
