import { useState } from "react";
import { Col, Row, Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

// Local Imports
import LoadingSpinner from "../components/LoadingSpinner";
import loginImg from "../assets/images/login.svg";
import { auth } from "../config/firebase";
import ContinueWithGoogle from "../components/User/ContinueWithGoogle";
import { cleanUpError } from "../utils/cleanUpError";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

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

      // If the user came from a certain page to log in, we wanna redirect them to that page so they can continue from where they left off.
      if (state) {
        navigate(state.from);
        return;
      }
      navigate("/dashboard");
    } catch (err) {
      const errorMessage = cleanUpError(err.code);
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
                <Alert className="capitalize-first" variant="primary">
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
                </Form>
                <div className="pt-3">
                  <p className="fw-bolder text-center">Or</p>
                  <ContinueWithGoogle />
                </div>
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
            <img src={loginImg} alt="Login user" className="w-100" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
