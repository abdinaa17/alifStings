// Global Imports
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Local Imports
import comingSoon from "../assets/images/coming-soon.svg";

const ComingSoon = () => {
  return (
    <section className="page p-5">
      <div className="container vh-100">
        <div className="intro">
          <h1>Coming Soon!</h1>
          <p className="lead">This page is under construction...</p>
        </div>
        <Link to="/">
          <Button className="mb-5 px-4" variant="custom">
            Go home
          </Button>
        </Link>
        <Row className="mt-5">
          <Col md={6}>
            <div className="mission">
              <img src={comingSoon} alt="Coming Soon" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ComingSoon;
