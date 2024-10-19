import React from 'react'
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className='nav-bar' >
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="articles"><li>Articles</li></NavLink>
        </ul>
    </nav>
  )
}

export default NavBar