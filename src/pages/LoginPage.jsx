import { useState } from "react";
import { Col, Row, Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

// Local Imports
import LoadingSpinner from "../components/LoadingSpinner";
import loginImg from "../assets/images/login.svg";
import { auth } from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      setLoading(true);
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      // Firebase error code returns every error with "auth/error message" We only want the error message so we'll split it and get the error message.

      const errorMessage = err.code.split("/")[1];
      setError(errorMessage);
    }
    setLoading(false);
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="page py-5">
      <div className="container">
        <Row>
          <Col lg={8} md={6}>
            <h2 className="text-capitalize text-center my-4">
              log in to your account
            </h2>
            <div style={{ maxWidth: "400px" }} className="mx-auto">
              {error && (
                <Alert className="text-capitalize" variant="primary">
                  {error}
                </Alert>
              )}
              <Card className="my-4">
                <Form onSubmit={handleLogin} className="w-75 my-4 mx-auto">
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      autoComplete="off"
                      placeholder="E.g user@email.com..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password here..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button className="w-100 mt-3" type="submit">
                    Login
                  </Button>
                  <div className="pt-3">
                    <p className="fw-bolder text-center">Or</p>
                    <Button variant="success" className="w-100 mb-3">
                      Log in with Gmail
                    </Button>
                    <Button variant="info" className="w-100">
                      Log in with Facebook
                    </Button>
                  </div>
                </Form>
              </Card>
              <p>
                <small className="text-capitalize">
                  Don't have an account?{" "}
                  <Link to="/register">Register Here</Link>
                </small>{" "}
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
