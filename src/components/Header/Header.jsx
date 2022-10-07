import { Button,Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

import { FaUserPlus, FaUser } from 'react-icons/fa';
// Local Imports
import '../Header/Header.css'
const Header = () => {
  return (
    <header className=''>
         <Navbar className="container" variant='light' expand="md">
        <LinkContainer to="/"> 
            <Navbar.Brand className='nav__logo'>alifStings<span className='text-primary fw-bold fs-1'>.</span></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav__center">
          <LinkContainer to="/">
             <Nav.Link active={false}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/listings">
             <Nav.Link active={false}>Listings</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
             <Nav.Link active={false}>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/coming-soon">
             <Nav.Link active={false}>Services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/coming-soon">
             <Nav.Link active={false}>Blog</Nav.Link>
          </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
          <LinkContainer to="/new-listing">
            <Button variant="primary" className="nav__btn my-2 my-md-0  mx-md-2">
              Add A Listing
            </Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button className="nav__btn my-2 my-md-0 mx-md-2" variant="black">
               <FaUser /> Login
            </Button>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default Header