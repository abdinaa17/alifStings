// Global Imports
import {useState} from 'react'
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Button } from "react-bootstrap";

import '../Navbar/Navbar.css'

const Test = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const handleToggle = () => {
        setMobileMenu(!mobileMenu)
      }
  return (
    <header>
            <nav className="container nav">
                <div className="logo"><a href="/"><span><em>biz</em></span>Listings</a></div>
           <div className={mobileMenu ? "nav__content": "nav__content show"}>
            <div className="nav__links">
            <a href="" > Home</a>
            <a href="" > Home</a>
            <a href="" > Home</a>
            <a href="" > Home</a>
            <a href="" > Home</a>
            </div>
            
            <div className='nav__btns'>
            <Button variant="custom" style={{marginRight: '1rem'}}><a href="" >Register</a></Button>
              <Button variant="light"><a href="" >Login</a></Button>
            </div>
          </div>

            <div className="nav__bars">
            {mobileMenu ? <BiX size={30} onClick={handleToggle} />: <BiMenuAltRight size={30} onClick={handleToggle} />}
          </div>
            </nav>
            
        </header>
  )
}

export default Test