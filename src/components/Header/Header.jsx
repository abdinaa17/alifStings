import { Button,Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

import { FaUserPlus, FaUser } from 'react-icons/fa';
// Local Imports
import '../Header/Header.css'
const Header = () => {
  return (
    <header className='bg-primary'>
         <Navbar className="container" variant='dark' expand="md">
        <LinkContainer to="/"> 
            <Navbar.Brand><em>alif</em>Stings</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/">
             <Nav.Link active={false}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/listings">
             <Nav.Link active={false}>Listings</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
             <Nav.Link active={false}>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/new-listing">
             <Nav.Link active={false}>Add Listing</Nav.Link>
          </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
          <LinkContainer to="/register">
            <Button variant="danger" className="nav__btn my-2 my-md-0  mx-md-2">
            <FaUserPlus/> Register
            </Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button className="nav__btn my-2 my-md-0 mx-md-2" variant="secondary">
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