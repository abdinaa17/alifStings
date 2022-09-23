// Global Imports
import {useState} from 'react'
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const handleToggle = () => {
        setMobileMenu(!mobileMenu)
      }
  return (
    <header>
            <nav className="container nav">
                <div className="logo"><Link to='/'><em>alif</em>Stings</Link></div>
                <div className={mobileMenu ? "nav__content": "nav__content show"}>
                  <div className="nav__links">
                      <Link onClick={handleToggle} to="/">Home</Link>
                      <Link onClick={handleToggle} to="/about">About</Link>
                      <Link onClick={handleToggle} to="/listings">Listings</Link>
                      </div>
                
                      <div className='nav__btns'>
                        <Button variant="custom" style={{marginRight: '1rem'}}><a href="" >Register</a></Button>
                          <Button variant="custom__secondary"><a href="" >Login</a></Button>
                      </div>
                  </div>

                  <div className="nav__bars">
                  {mobileMenu ? <BiX size={30} onClick={handleToggle} />: <BiMenuAltRight size={30} onClick={handleToggle} />}
                </div>
            </nav>
            
        </header>
  )
}

export default Navbar