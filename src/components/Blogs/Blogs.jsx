// Global Imports
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="container py-5">
      <h2 className="text-uppercase text-center my-5 mx-auto">
        Latest news Articles
      </h2>
      <Row className="g-4">
        <Col md={6} lg={3}>
          <Card className="cursor-pointer">
            <Link to="/coming-soon">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=aVf9UGgpwixzwM27bU_aF2v2veTNxBWJCdAUxfiYMkM="
                alt=""
                loading="lazy"
              />
            </Link>

            <Card.Body>
              <Card.Title className="my-2 text-uppercase">
                7 places you don't wanna miss!
              </Card.Title>

              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>

              <Row>
                <Col>
                  <Link to="/coming-soon">Read More...</Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="cursor-pointer">
            <Link to="/coming-soon">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=aVf9UGgpwixzwM27bU_aF2v2veTNxBWJCdAUxfiYMkM="
                alt=""
                loading="lazy"
              />
            </Link>

            <Card.Body>
              <Card.Title className="my-2 text-uppercase">
                Top 5 Daycares
              </Card.Title>

              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>

              <Row>
                <Col>
                  <Link to="/coming-soon">Read More...</Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="cursor-pointer">
            <Link to="/coming-soon">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=aVf9UGgpwixzwM27bU_aF2v2veTNxBWJCdAUxfiYMkM="
                alt=""
                loading="lazy"
              />
            </Link>

            <Card.Body>
              <Card.Title className="my-2 text-uppercase">
                Best Restaurants in CBUS
              </Card.Title>

              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>

              <Row>
                <Col>
                  <Link to="/coming-soon">Read More...</Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="cursor-pointer">
            <Link to="/coming-soon">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=aVf9UGgpwixzwM27bU_aF2v2veTNxBWJCdAUxfiYMkM="
                alt=""
                loading="lazy"
              />
            </Link>

            <Card.Body>
              <Card.Title className="my-2 text-uppercase">
                Best events
              </Card.Title>

              <Card.Subtitle className="my-2 opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                amet, reiciendis fuga aut tempora sed?
              </Card.Subtitle>

              <Row>
                <Col>
                  <Link to="/coming-soon">Read More...</Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blogs;
