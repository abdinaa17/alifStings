// Global Imports
import { Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";

const ListingCard = ({
  imgUrls,
  id,
  title,
  address,
  tagline,
  editListing,
  deleteListing,
}) => {
  return (
    <div className="container">
      <Card className="cursor-pointer">
        <Link to={`/listings/${id}`}>
          <Card.Img
            style={{ height: 300, objectFit: "cover" }}
            variant="top"
            src={imgUrls}
            alt={title}
            loading="lazy"
          />
        </Link>

        <Card.Body>
          <Card.Title className="my-2">
            {/* {title.length > 23 ? `${title}.slice(0, 23)...` : title) */}
            {`${title.length > 23 ? title.slice(0, 23) + "..." : title}`}
          </Card.Title>
          <Card.Subtitle className="my-2 opacity-75">
            {`${tagline.length > 23 ? tagline.slice(0, 28) + "..." : tagline}`}
          </Card.Subtitle>
          <Card.Text className="my-3 d-flex align-items-center">
            <MdPlace className="text-success" />
            <span className="px-1">
              {`${
                address.length > 23 ? address.slice(0, 28) + "..." : address
              }`}
            </span>
          </Card.Text>
          {/* <Row>
            <Col>
              <p>{numReviews} reviews</p>
            </Col>

            <Col>
              <p>{rating} ratings</p>
            </Col>
          </Row> */}
          {deleteListing && <FaTrash />}
          {editListing && "Edit"}
        </Card.Body>
      </Card>
    </div>
  );
};
export default ListingCard;
