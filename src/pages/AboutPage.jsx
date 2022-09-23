// Global Imports
import {Row, Col} from "react-bootstrap"

// Local Imports

const AboutPage = () => {
  return (
    <section className="container p-5">
      <div className="intro">
      <h1>About Us</h1>
      <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, rerum veritatis possimus cupiditate magnam facere!</p>
      </div>
      <Row className="mt-5">
        <Col md={6}>
        <div className="mission">
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
      </div></Col>
      <Col md={6}>
        <div className="vision">
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique ab dignissimos est deleniti a ipsum error laudantium, eum ipsa!</p>
      </div></Col>
      </Row>
    </section>
  )
}

export default AboutPage