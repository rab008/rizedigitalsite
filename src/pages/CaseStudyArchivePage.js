import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CaseStudyArchivePage Component
 * 
 * Displays a collection of case studies with filtering options
 * Implements the structure outlined in the Case Study Archive Page document
 */
const CaseStudyArchivePage = () => {
  // Mock case studies data - in a real application, this would come from an API
  const caseStudies = [
    {
      id: 'retail-store-visibility',
      title: 'Increasing Online Visibility for a Local Retail Store',
      industry: 'Retail',
      challenge: 'Low online visibility and decreasing foot traffic',
      solution: 'Comprehensive local SEO and social media strategy',
      results: ['45% increase in foot traffic', '120% increase in online engagement', '35% growth in revenue'],
      image: 'retail-case-study.jpg',
      featured: true
    },
    {
      id: 'tech-startup-web-app',
      title: 'Custom Web Application for Tech Startup',
      industry: 'Technology',
      challenge: 'Inefficient operations and poor customer experience',
      solution: 'Scalable web application with intuitive UI/UX',
      results: ['65% increase in operational efficiency', '40% reduction in customer service inquiries', '85% positive user feedback'],
      image: 'tech-case-study.jpg',
      featured: true
    },
    {
      id: 'ecommerce-artisan',
      title: 'E-Commerce Success for a Local Artisan',
      industry: 'E-Commerce',
      challenge: 'Limited market reach and sales potential',
      solution: 'Custom e-commerce platform with expanded market reach',
      results: ['300% increase in online sales', 'Expanded customer base to 15 states', '65% increase in average order value'],
      image: 'ecommerce-case-study.jpg',
      featured: false
    },
    {
      id: 'restaurant-local-seo',
      title: 'Local SEO Success for Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Poor online visibility and decreasing reservations',
      solution: 'Local SEO strategy with Google Business Profile optimization',
      results: ['200% increase in Google Business Profile views', '85% increase in online reservations', '60% growth in takeout orders'],
      image: 'restaurant-case-study.jpg',
      featured: false
    },
    {
      id: 'multilingual-website',
      title: 'Multilingual Website Boosts Customer Engagement',
      industry: 'Professional Services',
      challenge: 'Limited reach in diverse community',
      solution: 'Multilingual website with targeted content strategy',
      results: ['75% increase in website traffic', '40% growth in non-English speaking customers', '50% increase in overall sales'],
      image: 'multilingual-case-study.jpg',
      featured: false
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation for Traditional Business',
      industry: 'Manufacturing',
      challenge: 'Outdated processes and declining market share',
      solution: 'Comprehensive digital transformation strategy',
      results: ['120% increase in online visibility', '45% growth in new customer acquisition', '30% increase in revenue'],
      image: 'transformation-case-study.jpg',
      featured: false
    }
  ];

  // Industries for filtering
  const industries = ['All Industries', 'Retail', 'Technology', 'E-Commerce', 'Food & Beverage', 'Professional Services', 'Manufacturing'];
  
  return (
    <div className="case-study-archive-page">
      {/* Archive Header/Introduction */}
      <section className="hero-section" style={{ 
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-light)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h1 className="mb-2">Our Success Stories</h1>
              <p className="lead mb-4">
                Explore how we've helped businesses like yours achieve remarkable results through strategic digital solutions.
              </p>
              <div className="stats" style={{ 
                display: 'flex',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div className="stat">
                  <div className="stat-number" style={{ fontSize: '2rem', fontWeight: 'bold' }}>$10M+</div>
                  <div className="stat-label">Client ROI Generated</div>
                </div>
                <div className="stat">
                  <div className="stat-number" style={{ fontSize: '2rem', fontWeight: 'bold' }}>100+</div>
                  <div className="stat-label">Success Stories</div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-light">Discuss Your Project</Link>
            </div>
            <div className="hero-image" style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 'var(--border-radius-lg)',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className="fas fa-chart-line fa-5x"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section" style={{ 
        backgroundColor: 'var(--background-light)',
        padding: 'var(--spacing-lg) 0'
      }}>
        <div className="container">
          <div className="filters" style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--spacing-md)'
          }}>
            <div className="industry-filter">
              <label htmlFor="industry-select" className="mr-2">Filter by Industry:</label>
              <select id="industry-select" className="form-select">
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            <div className="search-filter">
              <input 
                type="text" 
                placeholder="Search case studies..." 
                className="form-input"
                style={{ minWidth: '250px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Featured Success Stories</h2>
          <div className="grid grid-2">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <div key={index} className="case-study-card" style={{ 
                backgroundColor: 'var(--background-light)',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--box-shadow-sm)',
                height: '100%'
              }}>
                <div className="case-study-image" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <i className="fas fa-briefcase fa-3x"></i>
                </div>
                <div className="case-study-content" style={{ padding: 'var(--spacing-lg)' }}>
                  <div className="industry-tag" style={{ 
                    display: 'inline-block',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--border-radius-sm)',
                    fontSize: '0.8rem',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    {study.industry}
                  </div>
                  <h3 className="mb-2">{study.title}</h3>
                  <p className="mb-3"><strong>Challenge:</strong> {study.challenge}</p>
                  <p className="mb-3"><strong>Solution:</strong> {study.solution}</p>
                  <div className="results mb-4">
                    <strong>Results:</strong>
                    <ul style={{ paddingLeft: 'var(--spacing-lg)', marginTop: 'var(--spacing-sm)' }}>
                      {study.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/case-studies/${study.id}`} className="btn btn-primary">
                    View Full Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="section-title text-center mb-5">All Case Studies</h2>
          <div className="grid grid-3">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <div key={index} className="case-study-card" style={{ 
                backgroundColor: 'white',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--box-shadow-sm)',
                height: '100%'
              }}>
                <div className="case-study-image" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  height: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <i className="fas fa-briefcase fa-2x"></i>
                </div>
                <div className="case-study-content" style={{ padding: 'var(--spacing-md)' }}>
                  <div className="industry-tag" style={{ 
                    display: 'inline-block',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--border-radius-sm)',
                    fontSize: '0.8rem',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    {study.industry}
                  </div>
                  <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{study.title}</h3>
                  <p className="mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                  <div className="results mb-3">
                    <strong>Key Result:</strong> {study.results[0]}
                  </div>
                  <Link to={`/case-studies/${study.id}`} className="btn btn-sm btn-outline">
                    Read Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Trusted by Leading Companies</h2>
          <div className="client-logos" style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--spacing-xl)'
          }}>
            {[1, 2, 3, 4, 5].map((logo, index) => (
              <div key={index} className="client-logo" style={{ 
                width: '150px',
                height: '80px',
                backgroundColor: 'var(--background-light)',
                borderRadius: 'var(--border-radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="fas fa-building fa-2x" style={{ color: 'var(--text-muted)' }}></i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="mb-4">Our Approach to Client Success</h2>
              <p className="mb-4">
                We follow a proven methodology that consistently delivers exceptional results for our clients. Our approach combines strategic thinking, data-driven insights, and creative execution to address your unique challenges and opportunities.
              </p>
              <div className="methodology-steps">
                {[
                  { icon: 'fas fa-search', title: 'Discovery & Analysis', description: 'We start by understanding your business, goals, and challenges through in-depth research and analysis.' },
                  { icon: 'fas fa-lightbulb', title: 'Strategy Development', description: 'Based on our findings, we create a customized strategy designed to achieve your specific objectives.' },
                  { icon: 'fas fa-code', title: 'Implementation', description: 'Our expert team executes the strategy with precision, using best practices and innovative approaches.' },
                  { icon: 'fas fa-chart-line', title: 'Measurement & Optimization', description: 'We continuously monitor performance, analyze results, and optimize for maximum impact.' }
                ].map((step, index) => (
                  <div key={index} className="methodology-step" style={{ 
                    display: 'flex',
                    marginBottom: 'var(--spacing-md)',
                    alignItems: 'flex-start'
                  }}>
                    <div className="step-icon" style={{ 
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 'var(--spacing-md)',
                      flexShrink: 0
                    }}>
                      <i className={step.icon}></i>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xs)' }}>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="methodology-image" style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: 'var(--border-radius-lg)',
                padding: 'var(--spacing-xl)',
                boxShadow: 'var(--box-shadow-md)',
                width: '100%',
                maxWidth: '400px'
              }}>
                <div style={{ 
                  backgroundColor: 'var(--background-light)',
                  borderRadius: 'var(--border-radius-md)',
                  height: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  <i className="fas fa-project-diagram fa-4x" style={{ color: 'var(--primary-color)' }}></i>
                </div>
                <div className="text-center">
                  <h3 className="mb-2">Our Success Framework</h3>
                  <p>A proven approach that has generated over $10M in client ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="section cta-section" style={{ 
        backgroundColor: 'var(--primary-color)', 
        color: 'var(--text-light)',
        padding: 'var(--spacing-xl) 0'
      }}>
        <div className="container text-center">
          <h2 className="mb-3">Ready to Become Our Next Success Story?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Contact us today to discuss your project and discover how our proven approach can help your business achieve exceptional results.
          </p>
          <Link to="/contact" className="btn" style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-color)',
            fontWeight: 'bold'
          }}>
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyArchivePage;
