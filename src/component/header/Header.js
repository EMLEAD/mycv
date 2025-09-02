import React, { useState, useEffect } from 'react';
import "./Header.css";
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/photo_2025-08-19_09-48-36.jpg";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleToggle = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const newMenuState = !menuOpen;
      setMenuOpen(newMenuState);
      if (newMenuState) {
        document.body.classList.add('menu-open');
        document.documentElement.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
        document.documentElement.classList.remove('menu-open');
      }
    }
  };
  
  const handleClose = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
    }
  };
  
  // Close menu when route changes or screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        handleClose();
      }
    };

    // Close menu when clicking outside or pressing Escape
    const handleClickOutside = (e) => {
      if (menuOpen && window.innerWidth <= 768) {
        const nav = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
          handleClose();
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        handleClose();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      // Clean up classes when component unmounts
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="logo-div">
        <img 
          className="logo" 
          src={Logo} 
          alt="Logo" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <nav>
        <div 
          className="hamburger" 
          onClick={handleToggle} 
          onKeyDown={(e) => e.key === 'Enter' && handleToggle()}
          aria-label="Menu" 
          aria-expanded={menuOpen}
          role="button"
          tabIndex={0}
        >
          {menuOpen ? (
            <FaTimes size={24} className="menu-icon" />
          ) : (
            <FaBars size={24} className="menu-icon" />
          )}
        </div>
        {menuOpen && (
          <div 
            className="nav-overlay active" 
            onClick={handleClose} 
            role="button" 
            aria-label="Close menu" 
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClose()}
          />
        )}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              onClick={handleClose} 
              className={({ isActive }) => isActive ? 'active' : ''}
              tabIndex={menuOpen ? 0 : -1}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/About" 
              onClick={handleClose} 
              className={({ isActive }) => isActive ? 'active' : ''}
              tabIndex={menuOpen ? 0 : -1}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Services" 
              onClick={handleClose} 
              className={({ isActive }) => isActive ? 'active' : ''}
              tabIndex={menuOpen ? 0 : -1}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Contact" 
              onClick={handleClose} 
              className={({ isActive }) => isActive ? 'active' : ''}
              tabIndex={menuOpen ? 0 : -1}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;