// Global Imports
import { Card, Row, Col } from "react-bootstrap";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";

const ListingCard = ({ imgUrls, id, title, address, tagline }) => {
  return (
    <div className="container">
      <Card className="cursor-pointer">
        <Link to={`/listings/${id}`}>
          <Card.Img
            style={{ height: 300, objectFit: "cover" }}
            variant="top"
            src={imgUrls}
            alt={title}
          />
        </Link>

        <Card.Body>
          <Card.Title className="my-2">{title}</Card.Title>
          <Card.Subtitle className="my-2 opacity-75">{tagline}</Card.Subtitle>
          <Card.Text className="my-3 d-flex align-items-center">
            <MdPlace className="text-success" />
            <span className="px-1"> {address}</span>
          </Card.Text>
          {/* <Row>
            <Col>
              <p>{numReviews} reviews</p>
            </Col>

            <Col>
              <p>{rating} ratings</p>
            </Col>
          </Row> */}
        </Card.Body>
      </Card>
    </div>
  );
};
export default ListingCard;
