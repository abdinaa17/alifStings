import { Button,Container, Nav, Navbar } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

const Header = () => {
  return (
    <header className='bg-primary h-75'>
         <Navbar className="container" variant='dark' expand="md">
        <LinkContainer to="/"> 
            <Navbar.Brand><em>alif</em>Stings</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/">
             <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/listings">
             <Nav.Link>Listings</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
             <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/new-listing">
             <Nav.Link>Add Listing</Nav.Link>
          </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
          <LinkContainer to="/register">
            <Button variant="dark" className="my-2 my-md-0 w-50 mx-md-2">
            Register
            </Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button className="my-2 my-md-0 w-50 mx-md-2" variant="secondary">
                Login
            </Button>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default Header