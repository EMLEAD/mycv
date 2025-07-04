import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'


const header = () => {
  return (
    <div className="Main-Div">
      <header>
       
        <nav>
          <ul>
          <li> <NavLink to="/">HOME</NavLink></li>
          <li> <NavLink to="/About">ABOUT</NavLink></li>
          <li> <NavLink to="/Services">SERVICES</NavLink></li>
          <li> <NavLink to="/Contact">CONTACT</NavLink></li>

          </ul>
        </nav>
      </header>
      
    
  


    </div>
  )
}

export default header