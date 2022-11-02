// Global Imports

import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center py-5"
      style={{ height: "50vh" }}
    >
      <Spinner as="span" animation="grow" variant="primary" size="" />
      <span className="ms-5 fs-1">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
