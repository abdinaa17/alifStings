// Global Imports
import {Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {FaTwitter, FaLinkedin, FaFacebook, FaYoutube} from "react-icons/fa"

// Local Imports
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <footer className='footer shadow bg-primary text-white'>
        <div className='container py-5 mx-auto'>
        <Row>
            <Col className="col-lg-3 col-8">
               <p className="my-4">
               <Link to='/' ><em>alif</em>Stings</Link>
               </p>
                <p className="mt-4">123 Long Ave, Columbus, OH 43212
                </p>
                <a className="my-4" href="tel:+13115552368">(614) 555-2368</a>
            </Col>
            <Col className="col-lg-3 col-4">
            <p className="my-4">Company</p>
                <div className='d-flex flex-column'>
                    <Link to="/about">About Us</Link>
                    <Link to="/coming-soon">Services</Link>
                    <Link to="/coming-soon">Careers</Link>
                </div>
            </Col>
            <Col className="col-lg-3 col-8">
            <p className="my-4">Resources</p>
                <div className='d-flex flex-column'>
                    <Link to=''>Contact Us</Link>
                    <Link to=''>Blog</Link>
                    <Link to=''>About Us</Link>
                </div>
            </Col>
            <Col className="col-lg-3 col-4">
                <p className="my-4">Company</p>
                <div className='d-flex flex-column'>
                    <Link to='/coming-soon'>
                     Privacy Policy
                    </Link>
                    <Link to='/coming-soon'>
                      Terms and Conditions
                    </Link>
                    <Link to='/coming-soon'>
                     FAQs
                    </Link>
                </div>
            </Col>

        </Row>
        <Row className='d-flex justify-content-center align-items-center flex-column my-5 w-100'>
            <Col md={6} lg={6}>
                <div className='d-flex'>
                    <Link to="" className="p-2" >
                      <FaTwitter size={24} />
                    </Link>
                    <Link to="" className="ms-3 p-2" >
                     <FaLinkedin size={24} />
                    </Link>
                    <Link to="" className="mx-3 p-2" >
                      <FaFacebook size={24} />
                    </Link>
                    <Link to="" className="p-2" >
                        <FaYoutube size={24}/>
                    </Link>
                </div>
            </Col>
            <Col  md={6} lg={6}>
            <small className="text-center mt-5">&copy; Copyright {new Date().getFullYear()} All rights reserved.</small>
            </Col>
        </Row>
        </div>
        
    </footer>
  )
}

export default Footer