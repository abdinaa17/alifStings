// Global Imports
import { Card, Col, Row } from "react-bootstrap";

// Local Imports

const ServicesPage = () => {
  return (
    <section className="page p-5">
      <div className="container">
        <div className="intro">
          <h1>Services tailored to your business</h1>
          <p className="lead">
            We are more than just a direcory! List your business with us and get
            more out of your business, without losing focus on what is most
            important.
          </p>
        </div>
        <Row className="mt-5">
          <Col md={6}>
            <Card className="my-2 p-4">
              <Card.Title className="my-2 text-uppercase fw-bolder">
                Service 1
              </Card.Title>
              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>
            </Card>
            <Card className="my-2 p-4">
              <Card.Title className="my-2 text-uppercase fw-bolder">
                Service 2
              </Card.Title>
              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>
            </Card>
            <Card className="my-2 p-4">
              <Card.Title className="my-2 text-uppercase fw-bolder">
                Service 3
              </Card.Title>
              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="my-2 p-4">
              <Card.Title className="my-2 text-uppercase fw-bolder">
                Service 4
              </Card.Title>
              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>
            </Card>
            <Card className="my-2 p-4">
              <Card.Title className="my-2 text-uppercase fw-bolder">
                Service 5
              </Card.Title>
              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>
            </Card>
            <Card className="my-2 p-4">
              <Card.Title className="my-2 text-uppercase fw-bolder">
                Service 6
              </Card.Title>
              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ServicesPage;
