import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Local Imports
import "../Header/Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <header className="">
      <Navbar className="container" variant="light" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand className="nav__logo">
            alifStings<span className="text-primary fw-bold fs-1">.</span>
          </Navbar.Brand>
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
            <LinkContainer to="/services">
              <Nav.Link active={false}>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link active={false}>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ms-auto">
            <LinkContainer to="/pricing">
              <Button
                variant="primary"
                className="nav__btn my-2 my-md-0  mx-md-2"
              >
                Add Listing
              </Button>
            </LinkContainer>
            {user ? (
              <LinkContainer to="/dashboard">
                <Button
                  variant="custom"
                  className="nav__btn my-2 my-md-0 mx-md-2 d-flex align-items-center justify-content-center"
                >
                  <FaUserCircle />
                  <span className="text-capitalize ms-2">
                    {user.email.split("@")[0]}
                  </span>
                </Button>
              </LinkContainer>
            ) : (
              <LinkContainer to="/login">
                <Button
                  variant="custom"
                  className="nav__btn my-2 my-md-0 mx-md-2"
                >
                  Account
                </Button>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
