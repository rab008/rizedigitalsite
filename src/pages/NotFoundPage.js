import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage Component
 * 
 * 404 page displayed when a user navigates to a non-existent route
 */
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <section className="section text-center" style={{ padding: 'var(--spacing-xxl) 0' }}>
        <div className="container">
          <h1 style={{ fontSize: '6rem', marginBottom: 'var(--spacing-md)' }}>404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="mb-5" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          
          <div className="mb-5">
            <Link to="/" className="btn btn-primary">
              Return to Homepage
            </Link>
          </div>
          
          <div className="helpful-links mt-5">
            <h3 className="mb-3">You might find these links helpful:</h3>
            <div className="grid grid-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <Link to="/" className="link-item">Home</Link>
              <Link to="/services" className="link-item">Services</Link>
              <Link to="/about" className="link-item">About Us</Link>
              <Link to="/contact" className="link-item">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
