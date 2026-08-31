import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/home"><li>Home </li></Link>
        <Link to="/Aboutme"><li>Aboutme</li></Link>
        <Link to="/Login"><li>Login</li></Link>
      </nav>
    </div>
  )
}

export default Navbar
