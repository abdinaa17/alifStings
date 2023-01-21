// Global Imports
import { Card } from "react-bootstrap";
import { FaStar, FaStarHalf, FaTrash } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { excerpt } from "../../utils/helperFunctions";

const ListingCard = ({ imgUrls, id, title, address, tagline }) => {
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
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStarHalf color="gold" />
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
                {/* {`${
                  address.length > 23 ? address.slice(0, 28) + "..." : address
                }`} */}
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
