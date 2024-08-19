import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle, Star, Menu, X, Phone, Mail, MapPin, Users, Search, CreditCard, Truck } from 'lucide-react';
import './LandingPage.css';
import { Bus, Car, Train } from 'lucide-react';

const Feature = ({ title, description, icon: Icon }) => (
  <div className="feature">
    <Icon className="feature-icon" />
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Testimonial = ({ quote, author }) => (
  <div className="testimonial">
    <p className="testimonial-quote">"{quote}"</p>
    <p className="testimonial-author">- {author}</p>
  </div>
);

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="contact-info">
    <Icon className="contact-icon" />
    <h4 className="contact-title">{title}</h4>
    <p className="contact-content">{content}</p>
  </div>
);

const LandingPage = ({ onLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h1>CASANDRA</h1>
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
          </div>
          <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to CASANDRA</h1>
          <h2>Your Gateway to Seamless Bus Travel</h2>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="features" className="features">
          <div className="section-header">
            <h2>Our Key Features</h2>
            <p className="section-title">Effortless Booking at Your Fingertips</p>
            <p className="section-description">
              Discover how CASANDRA makes your bus travel experience smooth and stress-free.
            </p>
          </div>
          <div className="features-grid">
            <Feature
              icon={CheckCircle}
              title="Real-Time Availability"
              description="Instantly check bus seat availability and book in real-time."
            />
            <Feature
              icon={ChevronDown}
              title="Flexible Trip Management"
              description="Easily manage your bookings, view details"
            />
            <Feature
              icon={Users}
              title="Customer Support"
              description="Our friendly support team is available 24/7 to assist you."
            />
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">How It Works</h2>
      <p className="section-description">
        Book your bus journey in three simple steps
      </p>
    </div>
    <div className="steps-grid">
      <div className="step">
        <div className="step-icon">
          <Search size={48} />
        </div>
        <img src="/images/lux.jpg" alt="Search for buses" className="step-image" />
        <h3>Search</h3>
        <p>Enter your destination and travel date to find available buses.</p>
      </div>
      <div className="step">
        <div className="step-icon">
          <CreditCard size={48} />
        </div>
        <img src="/images/lux1.jpg" alt="Select and pay" className="step-image" />
        <h3>Select & Pay</h3>
        <p>Choose your preferred seat and complete the secure payment.</p>
      </div>
      <div className="step">
        <div className="step-icon">
          <Truck size={48} />
        </div>
        <img src="/images/cinft-1.jpg" alt="Travel" className="step-image" />
        <h3>Travel</h3>
        <p>Receive your e-ticket and enjoy your comfortable journey.</p>
      </div>
    </div>
  </div>
</section>
        <section id="about" className="about-us">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Discover CASANDRA</h2>
              <p className="section-subtitle">Redefining Bus Travel for the Modern Era</p>
            </div>
            
            <div className="about-content">
              <div className="about-image-container">
                <img 
                  src="/images/ctn-img.webp" 
                  alt="CASANDRA's vision of modern bus travel" 
                  className="about-image"
                />
              </div>
              
              <div className="about-text">
                <p className="lead-paragraph">
                  At CASANDRA, we are more than just a bus booking platform – we are pioneers of seamless and innovative travel experiences.
                </p>
                
                <div className="feature-grid">
                  <div className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <h3>Effortless Booking</h3>
                    <p>Plan your trips with a few simple steps, ensuring a hassle-free experience.</p>
                  </div>
                  <div className="feature-item">
                    <ChevronDown className="feature-icon" />
                    <h3>Inclusive Travel</h3>
                    <p>Travel options for every budget, making bus journeys accessible to all.</p>
                  </div>
                  <div className="feature-item">
                    <Star className="feature-icon" />
                    <h3>Comfort on the Go</h3>
                    <p>Experience travel that feels like home with our carefully selected operators.</p>
                  </div>
                </div>
                
                <p className="mission-statement">
                  Our goal is simple: to revolutionize the way you travel by connecting you to trusted operators nationwide, ensuring your journey is not just seamless, but memorable.
                </p>
              </div>
            </div>
            
            <div className="testimonial-slider">
              {/* Add a testimonial slider component here */}
            </div>
          </div>
        </section>

        <section id="partners" className="partner-companies">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Our Trusted Partners</h2>
      <p className="section-description">
        We collaborate with top bus companies to ensure quality service
      </p>
    </div>
    <div className="partners-grid">
      <div className="partner">
        <Bus size={64} className="partner-icon" />
        <h3>ElevenWay</h3>
      </div>
      <div className="partner">
        <Truck size={64} className="partner-icon" />
        <h3>TrackOnly</h3>
      </div>
      <div className="partner">
        <Car size={64} className="partner-icon" />
        <h3>UberMe</h3>
      </div>
      <div className="partner">
        <Train size={64} className="partner-icon" />
        <h3>OCFF Train</h3>
      </div>
    </div>
  </div>
</section>

        <section id="contact" className="contact-us">
          <div className="contact-background">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-description">
                  We're here to assist you. Reach out to us using any of the methods below.
                </p>
              </div>
              <div className="contact-content">
                <div className="contact-image">
                  <img src="/images/abt-img.jpg" alt="Contact Us" />
                </div>
                <div className="contact-grid">
                  <ContactInfo icon={Mail} title="Email" content="Contact@CASANDRA.com" />
                  <ContactInfo icon={Phone} title="Phone" content="+212 63297-9856" />
                  <ContactInfo icon={MapPin} title="Address" content="Avenue, Casablanca, Morocco" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <h2>What Our Passengers Say</h2>
          <div className="testimonials-grid">
            <Testimonial
              quote="Booking a bus ticket has never been easier. The app is user-friendly and reliable."
              author="Amina Benali, Traveler"
            />
            <Testimonial
              quote="I love the convenience of checking availability and booking my seat in just a few clicks."
              author="Youssef El Amrani, Commuter"
            />
            <Testimonial
              quote="The payment process is secure, and I appreciate the multiple options available."
              author="Fatima Zahra, Frequent Traveler"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 CASANDRA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;