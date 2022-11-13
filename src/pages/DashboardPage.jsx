// Global Imports
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
// Local Imports
import { auth } from "../config/firebase";
import LoadingSpinner from "../components/LoadingSpinner";
const DashboardPage = () => {
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Log out user function
  const handleLogout = async () => {
    setError("");
    try {
      await auth.signOut();
      navigate("/");
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
        {user && (
          <h2>
            Welcome,{" "}
            <span className="text-capitalize">{user.email.split("@")[0]}</span>
          </h2>
        )}
        <Row>
          <Col md={4}>Profile info</Col>
          <Col md={8}>Dashboard info</Col>
        </Row>
      </div>
    </section>
  );
};

export default DashboardPage;
