import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

// Local Imports
import notFound from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <section className="container p-5">
      <Row>
        <Col>
          <h1>Oops!</h1>
          <h2>404 - Page not found</h2>
          <Link to="/">
            <Button variant="dark">Back To Home....</Button>
          </Link>
          <img src={notFound} alt="Not Found" />
        </Col>
      </Row>
    </section>
  );
};

export default Error;
