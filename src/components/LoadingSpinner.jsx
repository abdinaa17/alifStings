import spinner from "../assets/images/spinner.svg";

const LoadingSpinner = () => {
  return (
    <div
      className=" d-flex justify-content-center align-items-center py-5"
      style={{
        height: "100vh",
        position: "absolute",
        inset: "0",
        background: "#111",
        zIndex: "99999",
      }}
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
