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
        <h1>Explore The Best Places In Your City</h1>
        <h3>Find some of the best tips from around the city.</h3>
        <div className="hero__form">
          <Form className="h-100" onSubmit={handleSubmit}>
            <Row className="align-items-center h-100">
              <Col>
                <Form.Control
                  placeholder="Find Restaurants, Places, Mosques and more..."
                  className="text-center shadow-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button variant="primary" className="mx-2" type="submit">
                  {" "}
                  <BiSearch size={15} />
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
