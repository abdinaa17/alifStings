import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail, MdPlace } from "react-icons/md";

const ContactPage = () => {
  return (
    <section className="page py-5">
      <div className="container mt-2" style={{ maxWidth: "800px" }}>
        <div className="intro">
          <h1 className="text-capitalize">get in touch</h1>
          <p className="lead">
            Fill up the form and our Team will get back to you in within 24
            hours.
          </p>
        </div>
        <Row className="mt-5">
          <Col className="d-flex flex-column">
            <FaPhoneAlt className="" />
            <p className="my-4"> (123) 555-2368</p>
          </Col>
          <Col className="d-flex flex-column">
            <MdPlace />
            <p className="my-4"> 123 Long Ave, Columbus, OH 43212</p>
          </Col>
          <Col className="d-flex flex-column">
            <MdMail />
            <p className="my-4">hello@alifstings.netlify.app</p>
          </Col>
        </Row>
        <Form
          className="border p-5 mt-2 border-1 border-secondary"
          action="https://formspree.io/f/xgeqbvrk"
          method="POST"
        >
          <Form.Group className="mb-3">
            <Form.Label>Your Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Your message">
              <Form.Control
                as="textarea"
                name="message"
                required
                placeholder="Your message"
                style={{ height: "200px" }}
              />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit">Send Message</Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactPage;
