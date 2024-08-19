// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h2 className="about-title">
          <i className="fas fa-info-circle about-icon"></i>
          About Us
        </h2>
        <p className="about-text">
          At CASANDRA, we are dedicated to providing the best ticket booking experience. Our team is passionate about making travel planning easy and enjoyable. With years of industry experience and a commitment to customer satisfaction, we strive to offer an intuitive platform that meets your needs.
        </p>
        <div className="about-team">
          <div className="team-member">
            <i className="fas fa-user-tie team-icon"></i>
            <h3 className="team-name">Houssam Ghmari</h3>
            <p className="team-role">CEO</p>
          </div>
          <div className="team-member">
            <i className="fas fa-laptop-code team-icon"></i>
            <h3 className="team-name">Houssam Ghmari</h3>
            <p className="team-role">CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
