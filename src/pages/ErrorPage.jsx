import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

// Local Imports
import notFound from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <section className="container p-5 vh-100">
      <Row>
        <Col md={4}>
          <h1>Oops!</h1>
          <h2>404 - Page not found</h2>
          <Link to="/">
            <Button className="mb-5 px-4" variant="custom">
              Go home
            </Button>
          </Link>
        </Col>
        <Col md={8}>
          <img src={notFound} alt="Not Found" className="w-100" />
        </Col>
      </Row>
    </section>
  );
};

export default Error;
