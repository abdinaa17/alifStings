import React from "react";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

// Local Imports
import loginImg from "../assets/images/login.svg";
const Login = () => {
  const handleSubmit = (e) => {
    //
  };
  return (
    <section className="page py-5">
      <div className="container">
        <Row>
          <Col lg={8} md={6}>
            <h2 className="text-capitalize text-center my-4">
              log in to your account
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
                  <Button className="w-100" type="submit">
                    Login
                  </Button>
                  <div className="pt-3">
                    <p className="fw-bolder">Or Login With</p>
                    <Link to="/" className="p-2 text-info">
                      <FaGoogle size={24} />
                    </Link>
                    <Link to="/" className="p-2 text-info">
                      <FaFacebook size={24} />
                    </Link>
                  </div>
                </Form>
              </Card>
              <p>
                <small className="text-capitalize">
                  Don't have an account?{" "}
                  <Link to="/register">Register Here</Link>
                </small>
              </p>
              <p>
                <small className="text-capitalize">
                  Forgot Password?<Link to="/register"> reset it Here</Link>
                </small>
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="d-none d-md-block my-4">
            <img src={loginImg} alt="Login user" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
