// Global Imports
import { useState } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Local Imports
import { auth, db } from "../../config/firebase";
import LoadingSpinner from "../../components/LoadingSpinner";
import Sidebar from "./Sidebar";
import { cleanUpError } from "../../utils/helperFunctions";
import { Message } from "../../components";

const ProfilePage = () => {
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const logOutUser = async () => {
    setError("");
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      const errorMessage = cleanUpError(err.code);
      setError(errorMessage);
    }
  };

  if (isLoading && loading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="d-flex">
      <div className="positon-relative">
        <Sidebar logOutUser={logOutUser} />
      </div>
      <div className="content page">
        {error && <Message className="capitalize-first">{error}</Message>}
        <h2 className="">My Profile</h2>
        <Row className="g-4 w-100">
          <Col>
            <div>
              <p className="lead">
                Welcome,{" "}
                <span className="text-capitalize">
                  {user.email.split("@")[0]}
                </span>
              </p>{" "}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ProfilePage;
