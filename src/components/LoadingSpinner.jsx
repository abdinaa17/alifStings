import spinner from "../assets/images/spinner.svg";

const LoadingSpinner = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center py-5"
      style={{ height: "50vh" }}
    >
      <img src={spinner} alt="Loading spinner" />
    </div>
  );
};

export default LoadingSpinner;
