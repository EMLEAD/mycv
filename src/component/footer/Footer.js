import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-title">EMC</h2>
          <p className="footer-tagline">"One Line at a Time,Building the Future Where Code Meets Possibility.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <div className="footer-icons">
            <a href="https://www.facebook.com/moses.adewale.5243/" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/AEmlead" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/adewale_emc/" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/EMLEAD" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EMLEAD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
