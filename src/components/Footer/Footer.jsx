// Global Imports
import { Col, Row } from 'react-bootstrap'

import {FaTwitter, FaLinkedin, FaFacebook, FaYoutube} from "react-icons/fa"
import { Link } from 'react-router-dom'

// Local Imports
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className='footer mt-3'>
      <Row className='container p-3'>
            <Col md={6} lg={3} className='flex-column mt-3'>
            
            <a href=""><em>alif</em>Stings</a>
             <p>&copy; Copyright 2022. All rights reserved.</p> 
            </Col>
            <Col md={6} lg={3} className='flex-column mt-3'>
              <Link to="/about"><h3>About Us</h3></Link>
              <p>123 Long Ave, Columbus, OH 43212</p>
              <p><a href="tel:+13115552368">(614) 555-2368</a></p>
            </Col>

            <Col md={6} lg={3} className="mt-4">
            <h6>Find Us On our Socials</h6>
              <Row className='flex-md-column mt-3 align-items-center w-50'>
                <Col className="my-1">
                <Link to="/coming-soon">
                     <FaTwitter size={24} />
                  </Link>
                </Col>
                <Col className="my-1">
                <Link  to="/coming-soon">
                     <FaLinkedin size={24} />
                  </Link>
                </Col>
                <Col className="my-1">
                <Link  to="/coming-soon">
                     <FaFacebook size={24} />
                  </Link>
                </Col>
                <Col className="my-1">
                <Link to="/coming-soon">
                     <FaYoutube size={24} />
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col md={6} lg={3}>
              <Row className='flex-md-column mt-3 align-items-center'>
                <Col className="my-1">
                <Link to="/coming-soon">
                     Services
                  </Link>
                </Col>
                <Col className="my-1">
                <Link to="/coming-soon">
                    Careers
                  </Link>
                </Col>
                <Col className="my-1">
                <Link to="/coming-soon">
                Blog
                  </Link>
                </Col>
                <Col className="my-1">
                <Link to="/coming-soon">
                Privacy Policy
                  </Link>
                </Col>
                <Col className="my-1">
                <Link to="/coming-soon">
                Terms and Conditions
                  </Link>
                </Col>
                
                
              </Row>
            </Col>
        </Row>
        

    </footer>
  )
}

export default Footer