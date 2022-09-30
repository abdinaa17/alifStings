// Global Imports
import { Row , Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='container py-5'>
      <h2 className="text-uppercase text-center my-5 mx-auto">Latest news Articles</h2>
      <Row className='g-4'>
        <Col md={6} lg={3}>
           <Card className='cursor-pointer'>
              <Link to='/coming-soon' ><Card.Img variant="top" src="https://blackpro.listingprowp.com/wp-content/uploads/2022/03/coaches-300x181.png" alt="" /></Link>

              <Card.Body>

              <Card.Title className="my-2">Blog Name</Card.Title>

              <Card.Subtitle className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, reiciendis fuga aut tempora sed?</Card.Subtitle>

              <Row>


              <Col><Link to='/coming-soon' >Read More...</Link></Col>

              </Row>

              </Card.Body>
            </Card>
        </Col>
        <Col md={6} lg={3}>
           <Card className='cursor-pointer'>
              <Link to='/coming-soon' ><Card.Img variant="top" src="https://blackpro.listingprowp.com/wp-content/uploads/2022/03/coaches-300x181.png" alt="" /></Link>

              <Card.Body>

              <Card.Title className="my-2">Blog Name</Card.Title>

              <Card.Subtitle className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, reiciendis fuga aut tempora sed?</Card.Subtitle>

              <Row>


              <Col><Link to='/coming-soon' >Read More...</Link></Col>

              </Row>

              </Card.Body>
            </Card>
        </Col>
        <Col md={6} lg={3}>
           <Card className='cursor-pointer'>
              <Link to='/coming-soon' ><Card.Img variant="top" src="https://blackpro.listingprowp.com/wp-content/uploads/2022/03/coaches-300x181.png" alt="" /></Link>

              <Card.Body>

              <Card.Title className="my-2">Blog Name</Card.Title>

              <Card.Subtitle className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, reiciendis fuga aut tempora sed?</Card.Subtitle>

              <Row>


              <Col><Link to='/coming-soon' >Read More...</Link></Col>

              </Row>

              </Card.Body>
            </Card>
        </Col>
        <Col md={6} lg={3}>
           <Card className='cursor-pointer'>
              <Link to='/coming-soon' ><Card.Img variant="top" src="https://blackpro.listingprowp.com/wp-content/uploads/2022/03/coaches-300x181.png" alt="" /></Link>

              <Card.Body>

              <Card.Title className="my-2">Blog Name</Card.Title>

              <Card.Subtitle className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, reiciendis fuga aut tempora sed?</Card.Subtitle>

              <Row>


              <Col><Link to='/coming-soon' >Read More...</Link></Col>

              </Row>

              </Card.Body>
            </Card>
        </Col>
      </Row>
  </div>
  )
}

export default Blogs