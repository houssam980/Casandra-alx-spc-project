// src/components/Footer.js
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <i className="fas fa-bus-alt footer-icon"></i>
          <span className="footer-brand">CASANDRA </span>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-icon" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="footer-social-icon" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="footer-social-icon" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="footer-social-icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} CASANDRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
