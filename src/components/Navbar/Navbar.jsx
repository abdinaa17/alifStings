// Global Imports
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "react-bootstrap";

// Local Imports
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center nav">
            <div className="nav__logo">
              <a href="/"><span><em>biz</em></span>Listings</a>
            </div>
            <div className="nav__items">
              <ul className="d-flex">
                <li>
                  <a href="/listings">Listings</a>
                </li>
                <li>
                  <a href="/listings">About Us</a>
                </li>
                <li>
                  <a href="/listings">Listings</a>
                </li>
                <li>
                  <a href="/listings">Listings</a>
                </li>
                <li>
                  <a href="/listings">Listings</a>
                </li>
              </ul>
              <div className="nav__btns">
              <Button variant="custom"><a href="" >Register</a></Button>
              <Button variant="light"><a href="" >Login</a></Button>
            </div>
            </div>
            <div className="nav__toggle-btn">
              <BiMenuAltRight size={30} />
            </div>
        </div>
    </nav>
    </header>
    
  )
}

export default Navbar
