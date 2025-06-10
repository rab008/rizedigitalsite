import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * 
 * Displays the site footer with navigation links, contact information,
 * social media links, and copyright information
 */
const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Company Information */}
          <div className="footer-column">
            <h4>Rize Digital</h4>
            <p>Professional digital services tailored to your business needs.</p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-link">
                <Link to="/about">About Us</Link>
              </li>
              <li className="footer-link">
                <Link to="/services">Services</Link>
              </li>
              <li className="footer-link">
                <Link to="/case-studies">Case Studies</Link>
              </li>
              <li className="footer-link">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="footer-link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <Link to="/services/web-development">Web Development</Link>
              </li>
              <li className="footer-link">
                <Link to="/services/digital-marketing">Digital Marketing</Link>
              </li>
              <li className="footer-link">
                <Link to="/services/seo">SEO Optimization</Link>
              </li>
              <li className="footer-link">
                <Link to="/services/content-creation">Content Creation</Link>
              </li>
              <li className="footer-link">
                <Link to="/services/branding">Branding & Identity</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="footer-links">
              <li className="footer-link">
                <i className="fas fa-map-marker-alt"></i> 123 Business Ave, Suite 100, City, State 12345
              </li>
              <li className="footer-link">
                <i className="fas fa-phone"></i> (123) 456-7890
              </li>
              <li className="footer-link">
                <i className="fas fa-envelope"></i> info@rizedigital.com
              </li>
              <li className="footer-link">
                <i className="fas fa-clock"></i> Mon-Fri: 9AM-5PM
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Rize Digital. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link> | 
            <Link to="/terms-of-service"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
