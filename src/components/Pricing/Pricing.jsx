// Global Imports
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

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
    <div className="container">
      <Row>
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
          <div className="d-flex">
            <Button
              variant="link"
              className="my-2 w-50 mx-auto border border-2"
            >
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
