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

            <Col md={6} lg={3}>
              Find Us On our Socials
              <Row className='flex-column mt-3 '>
                <Col>
                <FaTwitter size={24} />
                </Col>
                <Col>
                  <FaLinkedin size={24}/>
                </Col>
                <Col>
                  <FaFacebook size={24}/>
                </Col>
                <Col>
                  <FaYoutube size={24}/>
                </Col>
              </Row>
            </Col>
            <Col md={6} lg={3}>
              <ul>
                <li>
                  <Link to="/coming-soon">Services</Link>
                </li>
                <li>
                  <Link to="/coming-soon">Careers</Link>
                </li>
                <li>
                  <Link to="/coming-soon">Blog</Link>
                </li>
                <li>
                  <Link to="/coming-soon">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/coming-soon">Terms and Conditions</Link>
                </li>
              </ul>
            </Col>
        </Row>

    </footer>
  )
}

export default Footer