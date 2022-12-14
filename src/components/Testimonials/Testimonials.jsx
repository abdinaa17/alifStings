// Global Imports
import { Card, Col, Row } from "react-bootstrap";

// Local Imports
import "../Testimonials/Testimonials.css";
import { testimonials } from "../../data/testimonials";
import { Rating } from "../index";

const Testimonials = () => {
  return (
    <div className="container py-5 testimonial">
      <h2 className="text-uppercase text-center my-5 mx-auto">
        Customer Testimonials
      </h2>
      <p className="my-2 mx-auto text-center">
        Checkout what people are saying about our community businesses
      </p>
      <Row className="testimonial__row mx-auto my-3 gy-5">
        {testimonials.map((testimonial) => {
          const { id, name, image, rating, desc, details } = testimonial;
          return (
            <Col xs={12} sm={6} md={6} lg={4} key={id}>
              <Card className="p-2 testimonial__card">
                <Row>
                  <Col className="align-items-center">
                    <img
                      src={image}
                      alt={name}
                      className="card-img rounded"
                      loading="lazy"
                    />
                    <p className="mx-auto my-0 ">{name}</p>
                    <Rating rating={rating} />
                  </Col>
                </Row>
                <h4 className="my-2 xs-fs-2">{desc}</h4>
                <p>{details}</p>
                <hr />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Testimonials;
