import React from 'react';
import { Link } from 'react-router-dom';

/**
 * HomePage Component
 * 
 * Main landing page for the website
 * Implements the structure outlined in the Home Page document
 */
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Professional Digital Solutions for Your Business</h1>
            <p className="hero-subtitle">
              We help businesses grow through innovative digital strategies and cutting-edge web solutions.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </div>
            <p className="mt-3">
              <small>Trusted by 10,000+ customers worldwide</small>
            </p>
          </div>
          <div className="hero-image" style={{ backgroundColor: 'var(--primary-light)' }}></div>
        </div>
      </section>

      {/* Value Proposition/Benefits Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How We Help Your Business Succeed</h2>
          <p className="section-subtitle">
            Our solutions are designed to deliver measurable results and help your business thrive in the digital landscape.
          </p>
          
          <div className="grid grid-3">
            {/* Benefit 1 */}
            <div className="card">
              <div className="card-content">
                <i className="fas fa-rocket fa-2x mb-2" style={{ color: 'var(--primary-color)' }}></i>
                <h3 className="card-title">Increased Online Visibility</h3>
                <p className="card-text">
                  Gain more exposure with optimized digital presence and targeted marketing strategies that put you in front of your ideal customers.
                </p>
                <p><strong>Achieve 200% more organic traffic</strong></p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="card">
              <div className="card-content">
                <i className="fas fa-chart-line fa-2x mb-2" style={{ color: 'var(--primary-color)' }}></i>
                <h3 className="card-title">Higher Conversion Rates</h3>
                <p className="card-text">
                  Transform visitors into customers with conversion-focused design and compelling content that drives action.
                </p>
                <p><strong>Average 40% increase in lead generation</strong></p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="card">
              <div className="card-content">
                <i className="fas fa-cogs fa-2x mb-2" style={{ color: 'var(--primary-color)' }}></i>
                <h3 className="card-title">Streamlined Operations</h3>
                <p className="card-text">
                  Automate repetitive tasks and optimize workflows with custom digital solutions tailored to your business needs.
                </p>
                <p><strong>Save 20+ hours per week on manual processes</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="section-title">Trusted by Businesses Worldwide</h2>
          
          {/* Testimonial */}
          <div className="testimonial mb-4">
            <div className="grid grid-2">
              <div className="testimonial-content">
                <blockquote>
                  "Working with Rize Digital transformed our online presence completely. Their strategic approach to our website redesign and digital marketing increased our leads by 150% in just three months."
                </blockquote>
                <div className="testimonial-author">
                  <strong>Sarah Johnson</strong><br />
                  CEO, TechSolutions Inc.
                </div>
              </div>
              <div className="testimonial-video">
                <div style={{ 
                  background: 'var(--primary-light)', 
                  height: '200px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: 'var(--border-radius-md)'
                }}>
                  <i className="fas fa-play-circle fa-3x" style={{ color: 'white' }}></i>
                </div>
              </div>
            </div>
          </div>
          
          {/* Client Logos */}
          <div className="client-logos">
            <div className="grid grid-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="logo-placeholder" style={{ 
                  height: '80px', 
                  background: 'rgba(255,255,255,0.7)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  borderRadius: 'var(--border-radius-sm)'
                }}>
                  <span style={{ color: 'var(--secondary-color)' }}>Client Logo {num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services/Products Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to meet your business objectives and drive growth.
          </p>
          
          <div className="grid grid-3">
            {/* Service 1 */}
            <div className="card">
              <div style={{ height: '200px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} className="card-image">Web Development</div>
              <div className="card-content">
                <h3 className="card-title">Web Development</h3>
                <p className="card-text">
                  Custom websites and web applications designed to engage visitors and drive conversions.
                </p>
                <p className="mb-3"><strong>Starting at $2,999</strong></p>
                <Link to="/services/web-development" className="btn btn-outline">Learn More</Link>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="card">
              <div style={{ height: '200px', backgroundColor: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} className="card-image">Digital Marketing</div>
              <div className="card-content">
                <h3 className="card-title">Digital Marketing</h3>
                <p className="card-text">
                  Strategic marketing campaigns that increase visibility and drive qualified traffic.
                </p>
                <p className="mb-3"><strong>Starting at $1,499/month</strong></p>
                <Link to="/services/digital-marketing" className="btn btn-outline">Learn More</Link>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="card">
              <div style={{ height: '200px', backgroundColor: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} className="card-image">SEO Optimization</div>
              <div className="card-content">
                <h3 className="card-title">SEO Optimization</h3>
                <p className="card-text">
                  Data-driven SEO strategies that improve rankings and organic traffic.
                </p>
                <p className="mb-3"><strong>Starting at $999/month</strong></p>
                <Link to="/services/seo" className="btn btn-outline">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* About the Company Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>About Rize Digital</h2>
              <p>
                Founded in 2015, Rize Digital has been at the forefront of digital innovation, 
                helping businesses of all sizes establish and grow their online presence.
              </p>
              <p>
                Our mission is to empower businesses with cutting-edge digital solutions that 
                drive growth, increase efficiency, and deliver measurable results.
              </p>
              <p>
                With a team of experienced professionals and a client-centered approach, 
                we've helped over 500 businesses achieve their digital goals.
              </p>
              <Link to="/about" className="btn btn-outline mt-3">Learn More About Us</Link>
            </div>
            <div style={{ 
              background: 'var(--primary-light)', 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <span style={{ color: 'white' }}>Team Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process/How It Works Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            Our streamlined process ensures efficient delivery of high-quality solutions tailored to your needs.
          </p>
          
          <div className="process-steps">
            <div className="grid grid-4">
              {/* Step 1 */}
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Discovery</h3>
                <p>We learn about your business, goals, and challenges to create a tailored strategy.</p>
              </div>
              
              {/* Step 2 */}
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Strategy</h3>
                <p>We develop a comprehensive plan aligned with your business objectives.</p>
              </div>
              
              {/* Step 3 */}
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Implementation</h3>
                <p>Our team executes the strategy with precision and attention to detail.</p>
              </div>
              
              {/* Step 4 */}
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Optimization</h3>
                <p>We continuously monitor and refine to maximize results and ROI.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="section cta-section" style={{ 
        backgroundColor: 'var(--primary-color)', 
        color: 'var(--text-light)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container text-center">
          <h2 className="mb-3">Ready to Grow Your Business?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Take the first step toward digital success. Contact us today for a free consultation and discover how we can help your business thrive online.
          </p>
          <Link to="/contact" className="btn" style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-color)',
            fontWeight: 'bold'
          }}>
            Get a Free Consultation
          </Link>
          <p className="mt-3">
            <small>No obligation. 100% satisfaction guarantee.</small>
          </p>
        </div>
      </section>

      {/* Blog/Content Preview Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends, tips, and strategies in the digital world.
          </p>
          
          <div className="grid grid-3">
            {/* Blog Post 1 */}
            <div className="card">
              <div style={{ height: '200px', backgroundColor: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} className="card-image">Blog Post 1</div>
              <div className="card-content">
                <h3 className="card-title">10 SEO Strategies That Actually Work in 2025</h3>
                <p className="card-text">
                  Learn the latest SEO techniques that are driving results in today's competitive digital landscape.
                </p>
                <a href="#" className="btn btn-outline">Read More</a>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="card">
              <div style={{ height: '200px', backgroundColor: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} className="card-image">Blog Post 2</div>
              <div className="card-content">
                <h3 className="card-title">How to Create a Website That Converts Visitors</h3>
                <p className="card-text">
                  Discover the key elements of high-converting websites and how to implement them effectively.
                </p>
                <a href="#" className="btn btn-outline">Read More</a>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="card">
              <div style={{ height: '200px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} className="card-image">Blog Post 3</div>
              <div className="card-content">
                <h3 className="card-title">The Ultimate Guide to Social Media Marketing</h3>
                <p className="card-text">
                  Master the art of social media marketing with our comprehensive guide for businesses.
                </p>
                <a href="#" className="btn btn-outline">Read More</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <a href="#" className="btn btn-primary">View All Articles</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
