// src/components/CallUs.js
import React from 'react';
import './CallUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const CallUs = () => {
  return (
    <section className="call-us">
      <div className="call-content">
        <h2 className="call-title">Get in Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone-alt contact-icon"></i>
            <div className="contact-details">
              <h3 className="contact-type">Phone</h3>
              <p className="contact-info-text">+212 632979856</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <div className="contact-details">
              <h3 className="contact-type">Email</h3>
              <p className="contact-info-text">Casandra.Area@bookin.com</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <div className="contact-details">
              <h3 className="contact-type">Address</h3>
              <p className="contact-info-text">Atlas Street, Casablanca, Morocco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallUs;
