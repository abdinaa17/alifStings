import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Local Imports
import regsiterHero from "../assets/images/register.svg";

const Register = () => {
  const handleSubmit = (e) => {
    //
  };
  return (
    <section className="container py-5">
      <Row>
        <Col lg={6} md={6}>
          <Form onSubmit={handleSubmit} className="w-75 my-2 mx-auto">
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoComplete="off"
                placeholder="E.g user@email.com..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password here..."
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Register
            </Button>
          </Form>
        </Col>
        <Col lg={6} md={6}>
          <img src={regsiterHero} alt="" />
        </Col>
      </Row>
    </section>
  );
};

export default Register;
