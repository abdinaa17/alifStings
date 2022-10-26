// Global Imports
import { Link } from "react-router-dom";

// Local Imports
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="text-capitalize mb-4">
          Explore the best halal-friendly places In Your City
        </h1>
        <p className="lead">
          We bring you a variety of halal-friendly businesses around the
          Columbus area for your convinience. From restaurants, to mosques, to
          daycares and many more...
        </p>
        <Link
          to="/listings"
          className="btn btn-primary px-4 mt-4"
          role="button"
        >
          See Listings
        </Link>
      </div>
    </div>
  );
};

export default Hero;
