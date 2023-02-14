// Global Imports
import { Card } from "react-bootstrap";
import { FaStar, FaStarHalf, FaTrash } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { excerpt } from "../../utils/helperFunctions";

// Local Imports
import { Rating } from "../../components";
const ListingCard = ({ imgUrls, id, title, address, tagline, reviews }) => {
  let averageRating = 0;
  if (reviews) {
    averageRating = reviews.reduce((acc, review) => {
      return (acc += review.rating / reviews.length);
    }, 0);
  }
  return (
    <div className="container">
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
            <Card.Text className="w-50">
              {/* <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStarHalf color="gold" /> */}
              {reviews && <Rating rating={averageRating} />}
            </Card.Text>
            <Card.Title className="my-2">
              {title.length > 23 ? excerpt(title, 23) + "..." : title}
            </Card.Title>
            <Card.Subtitle className="my-2 opacity-75">
              {tagline.length > 23 ? excerpt(tagline, 28) + "..." : tagline}
            </Card.Subtitle>
            <Card.Text className="my-3 d-flex align-items-center">
              <MdPlace className="text-success" />
              <span className="px-1">
                {address.length > 23 ? excerpt(address, 28) + "..." : address}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};
export default ListingCard;
