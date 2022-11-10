import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
// Local Imports
import { useAuth } from "../../context/context";
import "../Header/Header.css";

const Header = () => {
  const { currentUser, logoutUser } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Log out user function
  const handleLogout = async () => {
    setError("");
    try {
      await logoutUser();
      navigate("/");
    } catch (err) {
      // Firebase error code returns every error with "auth/error message" We only want the error message so we'll split it and get the error message.

      const errorMessage = err.code.split("/")[1];
      setError(errorMessage);
    }
  };
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
            {currentUser ? (
              <LinkContainer to="/dashboard">
                <Button
                  variant="custom"
                  className="nav__btn my-2 my-md-0 mx-md-2 d-flex align-items-center justify-content-center"
                >
                  <FaUserCircle />
                  <span className="text-capitalize ms-2">
                    {currentUser.email.split("@")[0]}
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
