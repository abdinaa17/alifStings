// Global Imports
import { Col, Row, Form, Modal, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Message from "../Message/Message";

const Review = ({
  listing,
  handleReview,
  user,
  isModal,
  setIsModal,
  handleChange,
  review,
  error,
}) => {
  return (
    <Row className="my-4">
      <Col md={6}>
        {user ? (
          <>
            <Button onClick={() => setIsModal(true)}>
              <FaStar /> Write a review
            </Button>
            <Modal show={isModal} onHide={() => setIsModal(false)} centered>
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
                      value={review.rating}
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
                      value={review.comment}
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
  );
};

export default Review;
