import React, { useState } from 'react';

/**
 * ContactPage Component
 * 
 * Contact page for the website
 * Implements the structure outlined in the Contact Us Page document
 */
const ContactPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    message: '',
    subscribe: false
  });
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'general',
        message: '',
        subscribe: false
      });
    }, 1500);
  };
  
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundColor: 'var(--background-off)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">
            We'd love to hear from you. Reach out to our team with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Get in Touch</h2>
              <p className="mb-4">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {submitSuccess ? (
                <div className="success-message" style={{
                  backgroundColor: 'var(--success-color)',
                  color: 'white',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  <i className="fas fa-check-circle mr-2"></i>
                  Thank you for your message! We'll be in touch shortly.
                </div>
              ) : submitError ? (
                <div className="error-message" style={{
                  backgroundColor: 'var(--error-color)',
                  color: 'white',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  There was an error sending your message. Please try again.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="inquiryType" className="form-label">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    className="form-select"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Subscribe to our newsletter for industry insights and updates</span>
                  </label>
                </div>
                
                <div className="form-group">
                  <p className="privacy-note" style={{ fontSize: '0.875rem', color: 'var(--secondary-color)' }}>
                    <i className="fas fa-lock mr-1"></i> We respect your privacy and will never share your information.
                  </p>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="contact-info-container">
              <h2>Contact Information</h2>
              <p className="mb-4">You can also reach us using the following contact details:</p>
              
              <div className="contact-info-item mb-3">
                <i className="fas fa-map-marker-alt mr-2" style={{ color: 'var(--primary-color)' }}></i>
                <div>
                  <strong>Address:</strong><br />
                  123 Business Avenue, Suite 100<br />
                  San Francisco, CA 94107
                </div>
              </div>
              
              <div className="contact-info-item mb-3">
                <i className="fas fa-phone mr-2" style={{ color: 'var(--primary-color)' }}></i>
                <div>
                  <strong>Phone:</strong><br />
                  (123) 456-7890
                </div>
              </div>
              
              <div className="contact-info-item mb-3">
                <i className="fas fa-envelope mr-2" style={{ color: 'var(--primary-color)' }}></i>
                <div>
                  <strong>Email:</strong><br />
                  info@rizedigital.com
                </div>
              </div>
              
              <div className="contact-info-item mb-4">
                <i className="fas fa-clock mr-2" style={{ color: 'var(--primary-color)' }}></i>
                <div>
                  <strong>Business Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </div>
              </div>
              
              <div className="social-links mb-4">
                <h3 className="mb-2">Connect With Us</h3>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                  <a href="https://facebook.com" className="social-link" style={{ 
                    color: 'var(--text-dark)',
                    fontSize: '1.5rem'
                  }} aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" className="social-link" style={{ 
                    color: 'var(--text-dark)',
                    fontSize: '1.5rem'
                  }} aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" className="social-link" style={{ 
                    color: 'var(--text-dark)',
                    fontSize: '1.5rem'
                  }} aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" className="social-link" style={{ 
                    color: 'var(--text-dark)',
                    fontSize: '1.5rem'
                  }} aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              
              <div className="map-container" style={{ 
                height: '300px', 
                backgroundColor: 'var(--background-off)',
                borderRadius: 'var(--border-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span>Google Map Embed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers to common questions about working with us.
          </p>
          
          <div className="grid grid-2">
            <div className="faq-item mb-4">
              <h3>What services do you offer?</h3>
              <p>
                We offer a comprehensive range of digital services including web development, 
                digital marketing, SEO optimization, content creation, and branding solutions. 
                Each service is tailored to meet your specific business needs and goals.
              </p>
            </div>
            
            <div className="faq-item mb-4">
              <h3>How much do your services cost?</h3>
              <p>
                Our pricing varies based on project scope, complexity, and specific requirements. 
                We offer customized quotes after understanding your needs. Contact us for a free 
                consultation to discuss your project and receive a detailed estimate.
              </p>
            </div>
            
            <div className="faq-item mb-4">
              <h3>What is your typical response time?</h3>
              <p>
                We respond to all inquiries within 24 business hours. For urgent matters, 
                please call our office directly. Once you're a client, you'll have access 
                to our project management system for real-time updates and communication.
              </p>
            </div>
            
            <div className="faq-item mb-4">
              <h3>Do you work with clients internationally?</h3>
              <p>
                Yes, we work with clients worldwide. Our team is experienced in managing 
                remote projects and collaborating across different time zones. We use 
                various digital tools to ensure smooth communication regardless of location.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <a href="/faq" className="btn btn-outline">View All FAQs</a>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="section cta-section" style={{ 
        backgroundColor: 'var(--primary-color)', 
        color: 'var(--text-light)',
        padding: 'var(--spacing-xl) 0'
      }}>
        <div className="container text-center">
          <h2 className="mb-3">Ready to Start Your Project?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Schedule a free 30-minute consultation to discuss your project needs and how we can help.
          </p>
          <a href="#" className="btn" style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-color)',
            fontWeight: 'bold'
          }}>
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
