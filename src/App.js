import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import CallUs from './components/CallUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './styles.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(!!authStatus);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
          <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <>
          <Header onLogout={handleLogout} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/call-us" element={<CallUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;