import React from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import useUser from './hooks/useUser';
import { getAuth,signOut } from 'firebase/auth';


const NavBar = () => {
  const {user} =  useUser();
  const navigate = useNavigate();
  return (
    <nav className='nav-bar' >
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="articles"><li>Articles</li></NavLink>
        </ul>
        <div className='nav-right'>
          {
            user ? <button onClick={()=>{
              signOut(getAuth())
            }}>Log Out</button>
            : <button onClick={()=>navigate('/login')}  >Log In</button>
          }
        </div>
    </nav>
  )
}

export default NavBar