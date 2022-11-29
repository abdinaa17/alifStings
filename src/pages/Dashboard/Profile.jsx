// Global Imports
import { useEffect, useState } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

// Local Imports
import { auth, db } from "../../config/firebase";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ListingCard } from "../../components";
import Sidebar from "./Sidebar";
import { cleanUpError } from "../../utils/cleanUpError";
// import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Log out user function
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
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="d-flex">
      <div className="positon-relative">
        <Sidebar logOutUser={logOutUser} />
      </div>
      <div className="content page p-5">
        {error && <Alert className="capitalize-first">{error}</Alert>}
        <h2>
          Welcome, to your profile page{" "}
          <span className="text-capitalize">
            {user && user.email.split("@")[0]}
          </span>
        </h2>
      </div>
    </section>
  );
};

export default DashboardPage;
