// Global Imports
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'



// Local Imports
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <Row className='container p-3'>
            <Col className='flex-column mt-3'>
            
            <a href=""><em>alif</em>Stings</a>
             <p>copyright text goes here</p> 
            </Col>
            <Col className='flex-column mt-3'>
              <ListGroup>
                
              </ListGroup>
            </Col>

            <Col>
              Find Us On our Socials
              <Row className='flex-column mt-3'>
                <Col>Twitter</Col>
                <Col>Twitter</Col>
                <Col>Twitter</Col>
                <Col>Twitter</Col>
                <Col>Twitter</Col>
              </Row>
            </Col>
            <Col>

            </Col>
        </Row>

    </footer>
  )
}

export default Footer