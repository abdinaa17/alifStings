// Global Imports
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Local Imports

import "../Hero/Hero.css";
const Hero = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/listings", { state: search });
  };
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
        {/* <Link
          to="/listings"
          className="btn btn-primary px-4 mt-4"
          role="button"
        >
          See Listings
        </Link> */}
        <Form onSubmit={handleSearch} className="pe-4 mt-4">
          <Form.Group>
            <Form.Control
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter search term here"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Hero;
