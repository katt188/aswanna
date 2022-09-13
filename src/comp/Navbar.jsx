import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navLinks">
            <span className="logo">Aswanna.lk</span>
            <h4 className="active">Home</h4>
            <h4 className="navLinkLeft"><Link to={"/Rice"}>Rice</Link></h4>
            <h4 className="navLinkLeft"><Link to={"/Spices"}>Spices</Link></h4>
            <h4 className="navLinkRight"><Link to={"/Login"}>Login</Link></h4>
            <h4 className="navLinkRight"><Link to={"/Register"}>Register</Link></h4>
        </div>
    </div>
  )
}

export default Navbar