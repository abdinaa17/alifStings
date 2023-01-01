// Global Imports
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Col, Row, Button, Card, Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
  FaRegClock,
  FaInfo,
  FaExternalLinkAlt,
} from "react-icons/fa";

//Local Imports
import { LoadingSpinner, Rating } from "../components";
import cBusMap from "../assets/images/cbus.png";
import webIcon from "../assets/images/www.png";
import { db } from "../config/firebase";

const SingleListing = () => {
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const { id } = useParams();

  const fetchListing = async () => {
    const listingRef = doc(db, "listings", id);
    const docSnap = await getDoc(listingRef);
    if (docSnap.exists()) {
      setListing(docSnap.data());
      setIsLoading(false);
    }
  };
  const handleSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
  };
  useEffect(() => {
    fetchListing();
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="page py-5">
      <div className="container">
        <Link to="/listings">
          <Button className="mb-5 px-4" variant="custom">
            Go back
          </Button>
        </Link>
        <Row>
          <Col md={8}>
            <Carousel
              activeIndex={carouselIndex}
              onSelect={handleSelect}
              className="mb-3"
            >
              {listing &&
                listing.imgUrls.map((image, idx) => {
                  return (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100 rounded"
                        src={image ? image : listingImagePlaceholder} // Come back to this.
                        alt={listing.title}
                        style={{
                          height: "500px",
                          objectFit: "cover",
                        }}
                      />
                    </Carousel.Item>
                  );
                })}
            </Carousel>
            <h1>{listing.title}</h1>
            <p className="opacity-75">{listing.tagline}</p>
            {/* <Row>
              <Col>
                <Rating rating={rating} />
              </Col>
              <Col>
                <p>{numReviews} reviews</p>
              </Col>
            </Row>  */}
            <p className="mb-4">{listing.desc}</p>
            <p></p>
          </Col>
          <Col className=" px-2" md={4}>
            <Card className="cursor-pointer">
              <Card.Img
                style={{ height: 300, objectFit: "cover" }}
                variant="top"
                src={cBusMap}
                alt={listing.title}
              />

              <Card.Body>
                <Card.Subtitle className="my-3 d-flex align-items-center">
                  <MdPlace className="text-success me-4" />
                  <span className=""> {listing.address}</span>
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
                  <a
                    className="my-4"
                    href={`tel:${listing.phone}`}
                    style={{ color: "inherit" }}
                  >
                    {listing.phone}
                  </a>
                </Card.Subtitle>
                <Card.Subtitle className="my-2">
                  <img
                    style={{ width: "20px", display: "inline-block" }}
                    src={webIcon}
                    className="me-4"
                  />{" "}
                  <a
                    href={listing.website}
                    target="_blank"
                    className="me-4 text-info underline"
                  >
                    Website
                  </a>{" "}
                  <FaExternalLinkAlt />
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
      </div>
    </section>
  );
};

export default SingleListing;
