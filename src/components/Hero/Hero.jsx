// Global Imports
import { useState } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap/";
import { BiSearch } from "react-icons/bi";

// Local Imports
import "../Hero/Hero.css";
const Hero = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      console.log("Nothing was searched");
      return;
    }
    console.log(query);
  };
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="text-capitalize">
          Explore the best halal-friendly places In Your City
        </h1>
        <h3>Find some of the best tips from around the city.</h3>
        <p className="lead">
          We bring you a variety of halal-friendly business around the Columbus
          area for your convinience. From restaurants, to mosques, to daycares
          and many more...
        </p>
      </div>
    </div>
  );
};

export default Hero;
