// Global Imports
import { useState } from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
  FaRegClock,
  FaInfo,
} from "react-icons/fa";
import { BiTime } from "react-icons/bi";

//Local Imports
import { mockDB } from "../data/mockDB";
import { Rating } from "../components";
import cBusMap from "../assets/images/cbus.png";
import webIcon from "../assets/images/www.png";
const SingleListing = () => {
  const { id } = useParams();
  const listing = mockDB.find((listing) => listing.id === id);

  const {
    title,
    tagline,
    rating,
    numReviews,
    address,
    city,
    gallary,
    description,
  } = listing;

  const [currentImg, setCurrentImg] = useState(gallary[0]);

  return (
    <section className="page py-5">
      <div className="container">
        <Row>
          <Col md={8}>
            <img src={currentImg} alt={title} className="rounded mb-3 w-100" />
            <Row className="my-3">
              {gallary.map((image, idx) => {
                return (
                  <Col key={idx}>
                    <img
                      role="button"
                      src={image}
                      alt={title}
                      onClick={() => setCurrentImg(gallary[idx])}
                    />
                  </Col>
                );
              })}
            </Row>
            <h1>{title}</h1>
            <p className="opacity-75">{tagline}</p>
            <Row>
              <Col>
                <Rating rating={rating} />
              </Col>
              <Col>
                <p>{numReviews} reviews</p>
              </Col>
            </Row>
            <p className="mb-4">{description}</p>
            <p></p>
          </Col>
          <Col className=" px-2" md={4}>
            <Card className="cursor-pointer">
              <Card.Img
                style={{ height: 300, objectFit: "cover" }}
                variant="top"
                src={cBusMap}
                alt={title}
              />

              <Card.Body>
                <Card.Subtitle className="my-3">
                  Address: <MdPlace /> {address} {city}
                </Card.Subtitle>
                <div>
                  <p className="text-uppercase mt-4">
                    <FaInfo className="me-4" />
                    Contact info
                  </p>
                  <hr />
                </div>
                <Card.Subtitle className="my-3">
                  <FaPhoneAlt className="me-4" />{" "}
                  <a className="my-4" href="tel:+13115552368">
                    (123) 555-2368
                  </a>
                </Card.Subtitle>
                <Card.Subtitle className="my-2">
                  <img
                    style={{ width: "20px", display: "inline-block" }}
                    src={webIcon}
                    className="me-4"
                  />{" "}
                  <a href="https://www.google.com" target="_blank">
                    www.mybusiness.com
                  </a>
                </Card.Subtitle>
                <Card.Subtitle className="my-3">
                  <FaRegClock className="me-4" />{" "}
                  <span className="text-success">Open Now</span>
                </Card.Subtitle>
                <Row className="py-2 w-50">
                  <Col>
                    <FaTwitter style={{ cursor: "pointer" }} size={24} />
                  </Col>
                  <Col>
                    <FaFacebook style={{ cursor: "pointer" }} size={24} />
                  </Col>
                  <Col>
                    <FaInstagram style={{ cursor: "pointer" }} size={24} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Link to="/listings">
          <Button className="m-2" variant="dark">
            Go back
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default SingleListing;
