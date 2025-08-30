import React, { useState } from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import Logo from "../assets/photo_2025-08-19_09-48-36.jpg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  return (
    <header>
      <div className="logo-div">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <nav>
        <div className="hamburger" onClick={handleToggle}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" onClick={handleClose}>HOME</NavLink></li>
          <li><NavLink to="/About" onClick={handleClose}>ABOUT</NavLink></li>
          <li><NavLink to="/Services" onClick={handleClose}>SERVICES</NavLink></li>
          <li><NavLink to="/Contact" onClick={handleClose}>CONTACT</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;