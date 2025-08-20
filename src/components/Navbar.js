import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="navbar-logo">🎯</span>
            <span className="navbar-title">Mock Interview</span>
          </Link>

          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/interview-types" 
              className={`navbar-link ${isActive('/interview-types') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link 
              to="/results" 
              className={`navbar-link ${isActive('/results') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </Link>
          </div>

          <button 
            className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
