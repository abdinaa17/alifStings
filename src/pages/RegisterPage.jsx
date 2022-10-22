import React from "react";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Local Imports
import regsiterImg from "../assets/images/register.svg";

const Register = () => {
  const handleSubmit = (e) => {
    //
  };
  return (
    <section className="page py-5">
      <div className="container">
        <Row>
          <Col lg={8} md={6}>
            <h2 className="text-capitalize text-center my-4">
              register to create an account
            </h2>
            <div style={{ maxWidth: "400px" }} className="mx-auto">
              <Card className="my-4">
                <Form onSubmit={handleSubmit} className="w-75 my-4 mx-auto">
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
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password here..."
                    />
                  </Form.Group>
                  <Button className="w-100 mt-3" type="submit">
                    Register
                  </Button>
                </Form>
              </Card>
              <p>
                Already Have an account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="d-none d-md-block my-4">
            <img src={regsiterImg} alt="Register user" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Register;
