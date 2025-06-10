import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Header Component
 * 
 * Displays the site header with navigation menu and logo
 * Includes responsive mobile menu functionality
 */
const Header = () => {
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            Rize Digital
          </NavLink>
        </div>
        
        {/* Navigation Menu */}
        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/service-areas" className="nav-link">
                Service Areas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/case-studies" className="nav-link">
                Case Studies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faq" className="nav-link">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
