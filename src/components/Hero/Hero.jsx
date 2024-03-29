// Global Imports
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { animate, motion } from "framer-motion";

// Local Imports
import "../Hero/Hero.css";

const Hero = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate("/listings", { state: search });
  };

  return (
    <div className="hero">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", ease: "easeIn", duration: 1 }}
        className="hero__content"
      >
        <h1 className="text-capitalize">
          Explore the best halal-friendly places In Your City
        </h1>

        <p className="lead">
          We bring you a variety of halal-friendly businesses around the
          Columbus area for your convenience. From restaurants, to mosques, to
          daycares and many more...
        </p>
        <Form onSubmit={handleSearch} className="d-flex pe-4 mt-4">
          <Form.Control
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for listings..."
            className="form__input--border py-3"
          />
          <Button type="submit" className="form__btn--border px-4">
            <FaSearch size={24} />
          </Button>
        </Form>
      </motion.div>
    </div>
  );
};

export default Hero;
