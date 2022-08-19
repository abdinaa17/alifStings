// Global Imports
import {useState} from 'react'
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Button } from "react-bootstrap";

// Local Imports
import "../Navbar/Navbar.css"

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleToggle = () => {
    setMobileMenu(!mobileMenu)
  }
  return (
    <header>
      <nav className="container">
        <div className="nav">
            <div className="nav__logo">
              <a href="/"><span><em>biz</em></span>Listings</a>
            </div>
            <div className={mobileMenu ? "nav__items": "nav__items show"}>
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
              {mobileMenu ? <BiX size={30} onClick={handleToggle} />: <BiMenuAltRight size={30} onClick={handleToggle} />}
            </div>
        </div>
    </nav>
    </header>
    
  )
}

export default Navbar
