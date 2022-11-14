// Global Imports
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Local Imports
import { auth } from "../config/firebase";
import LoadingSpinner from "../components/LoadingSpinner";
const DashboardPage = () => {
  const [user, loading] = useAuthState(auth);
  console.log(loading);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Log out user function
  const logOutUser = async () => {
    setError("");
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      // Firebase error code returns every error with "auth/error message" We only want the error message so we'll split it and get the error message.

      const errorMessage = err.code.split("/")[1];
      setError(errorMessage);
    }
  };
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="page p-5">
      <div className="container">
        <div className="intro">
          <h1>This is your page,</h1>
          {user && (
            <p className="lead">
              Welcome,{" "}
              <span className="text-capitalize">
                {user.email.split("@")[0]}
              </span>
            </p>
          )}
        </div>
        <Row>
          <Col md={4}>
            <h2>Profile Info</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur alias aliquid, explicabo veritatis aperiam labore.
            </p>
            <Button onClick={logOutUser}>Sign out</Button>
          </Col>
          <Col md={8}>
            <h2>Dashboard Info</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur alias aliquid, explicabo veritatis aperiam labore.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DashboardPage;
