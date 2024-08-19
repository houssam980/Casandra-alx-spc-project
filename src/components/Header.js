import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function from props
    navigate('/'); // Redirect to the LandingPage
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/dashboard" className="logo">
          <h1>Dashboard Home</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/call-us">Call Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;