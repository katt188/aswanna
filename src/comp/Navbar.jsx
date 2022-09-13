import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navLinks">
            <span className="logo">Aswanna.lk</span>
            <h4 className="active">Home</h4>
            <h4 className="navLinkLeft">Rice</h4>
            <h4 className="navLinkLeft">Spices</h4>
            <h4 className="navLinkRight">Login</h4> {" "}
            <h4 className="navLinkRight">Register</h4>
        </div>
    </div>
  )
}

export default Navbar