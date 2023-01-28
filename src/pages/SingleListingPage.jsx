// Global Imports
import { useState, useEffect } from "react";
import {
  arrayUnion,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { Col, Row, Button, Card, Carousel, Form, Modal } from "react-bootstrap";
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
import { useAuthState } from "react-firebase-hooks/auth";

//Local Imports
import { LoadingSpinner, Message, Rating } from "../components";
import cBusMap from "../assets/images/cbus.png";
import webIcon from "../assets/images/www.png";
import { auth, db } from "../config/firebase";
import { secondsToDate, cleanUpError, excerpt } from "../utils/helperFunctions";

const SingleListing = () => {
  const [user] = useAuthState(auth);
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState({
    rating: 0,
    comment: "",
  });
  const [error, setError] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [reviewExcerpt, setReviewExcerpt] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
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

  //
  // Get the review for current listing
  const { rating, comment } = review;

  const handleChange = (e) => {
    setReview((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReview = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!rating || !comment) {
      setIsLoading(false);
      setError("No review provided. Please complete all fields to continue.");
      return;
    }

    /**
     * We wanna limit a user to submit a review once per listing.
     * If the user has alrady submitted a review, then their information
     *  will be found in the listing.reviews array.
     **/
    // const authorExists = listing.reviews.map((list) => list.author);
    // if (authorExists) {
    //   setIsLoading(false);
    //   setError("You already submitted a review for this listing.");
    //   return;
    // }
    try {
      const newReview = {
        ...review,
        userId: user?.uid,
        createdAt: Timestamp.fromDate(new Date()),
        author: user?.email,
      };

      const listingRef = doc(db, "listings", id);

      await updateDoc(listingRef, {
        ...listing,
        reviews: arrayUnion(newReview),
      });

      setIsLoading(false);

      setReview({
        rating: 0,
        comment: "",
      });
    } catch (err) {
      const errorMessage = cleanUpError(err.code);
      setError(errorMessage);
    }
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log(user);
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
              interval={null}
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
                          height: "300px",
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
            <hr />
            <section className="w-100">
              <h3>
                {listing.reviews?.length === 1
                  ? `${listing.reviews?.length} review`
                  : `${listing.reviews?.length} reviews`}
                &nbsp;for {listing.title}
              </h3>
              {listing.reviews ? (
                <>
                  {listing.reviews.map((list, id) => {
                    return (
                      <article key={id} className="w-100 pt-2 pe-5 ">
                        <h5
                          className={`badge ${
                            list.userId === user?.uid
                              ? "bg-primary"
                              : "bg-success"
                          } text-capitalize`}
                        >
                          {list.author.split("@")[0]}
                        </h5>
                        <div className="d-flex">
                          <Rating rating={list.rating} />
                          <p className="ms-4">
                            {secondsToDate(list.createdAt.seconds)}
                          </p>
                        </div>
                        <p>
                          {reviewExcerpt
                            ? excerpt(list.comment, 120)
                            : list.comment}
                        </p>
                      </article>
                    );
                  })}
                </>
              ) : (
                <Message variant="danger">No Reviews yet</Message>
              )}
            </section>
            <Row className="my-5">
              <Col md={6}>
                <Button onClick={() => setShowReviewModal(true)}>
                  Write a review
                </Button>
                {user ? (
                  <>
                    <Modal
                      show={showReviewModal}
                      onHide={() => setShowReviewModal(false)}
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>{listing.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {" "}
                        <Form onSubmit={handleReview} className="form__section">
                          <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                              as="select"
                              name="rating"
                              value={rating}
                              onChange={handleChange}
                            >
                              <option>Select...</option>
                              <option value="1">1-Poor</option>
                              <option value="2">2-Fair</option>
                              <option value="3">3-Good</option>
                              <option value="4">4-Very good</option>
                              <option value="5">5-Excellent</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                              as="textarea"
                              name="comment"
                              value={comment}
                              onChange={handleChange}
                              style={{ height: "150px" }}
                            />
                          </Form.Group>
                          <Button type="submit" className="w-100 mt-3">
                            Post review
                          </Button>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        {error && (
                          <Message
                            variant="danger"
                            className="capitalize-first mx-auto"
                          >
                            {error}
                          </Message>
                        )}
                      </Modal.Footer>
                    </Modal>
                  </>
                ) : (
                  <Message>
                    <p>
                      Please{" "}
                      <Link
                        to="/login"
                        style={{
                          color: "inherit",
                          borderBottom: "2px solid #000",
                        }}
                      >
                        Log In
                      </Link>{" "}
                      to leave a review
                    </p>
                  </Message>
                )}
              </Col>
            </Row>
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
