import spinner from "../assets/images/spinner.svg";

const LoadingSpinner = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center py-5"
      style={{ height: "50vh", background: "inherit" }}
    >
      <img
        src={spinner}
        alt="Loading spinner"
        style={{ background: "inherit" }}
      />
    </div>
  );
};

export default LoadingSpinner;
