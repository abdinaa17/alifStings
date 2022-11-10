// Global Imports
import { Row, Col } from "react-bootstrap";

// Local Imports
// Local Imports
import { useAuth } from "../context/context";

const DashboardPage = () => {
  const { currentUser } = useAuth();
  return (
    <section className="page p-5">
      <div className="container">
        {currentUser && (
          <h2>
            Welcome,{" "}
            <span className="text-capitalize">
              {currentUser.email.split("@")[0]}
            </span>
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
