import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// Local Imports
import regsiterImg from "../assets/images/register.svg";
import LoadingSpinner from "../components/LoadingSpinner";
import ContinueWithGoogle from "../components/User/ContinueWithGoogle";
import { auth, db } from "../config/firebase";
import { cleanUpError } from "../utils/cleanUpError";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const newUser = {
        email,
        timestamp: serverTimestamp(),
      };
      await setDoc(doc(db, "users", user.uid), newUser);
      navigate("/dashboard");
    } catch (err) {
      const errorMessage = cleanUpError(err.code);
      setError(errorMessage);
    }
    setLoading(false);
  };
  useEffect;
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="page py-5">
      <div className="container">
        <Row>
          <Col lg={8} md={6}>
            <h2 className="text-capitalize text-center my-4">
              register to create an account
            </h2>
            <div style={{ maxWidth: "400px" }} className="mx-auto">
              {error && (
                <Alert className="capitalize-first" variant="primary">
                  {error}
                </Alert>
              )}
              <Card className="my-4">
                <Form onSubmit={handleRegister} className="w-75 my-4 mx-auto">
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="E.g user@email.com..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
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
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password here..."
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button className="w-100 mt-3" type="submit">
                    Register
                  </Button>
                </Form>
                <div className="pt-3">
                  <p className="fw-bolder text-center">Or</p>
                  <ContinueWithGoogle />
                </div>
              </Card>
              <p>
                Already Have an account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="d-none d-md-block my-4">
            <img src={regsiterImg} alt="Register user" className="w-100" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Register;
