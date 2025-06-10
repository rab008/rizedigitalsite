import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ServiceAreaArchivePage Component
 * 
 * Displays all service areas covered by the company
 * Implements the structure outlined in the Service Area Archive document
 */
const ServiceAreaArchivePage = () => {
  // Mock service areas data - in a real application, this would come from an API
  const serviceAreas = [
    {
      id: 'san-francisco',
      name: 'San Francisco',
      region: 'Bay Area',
      image: 'san-francisco.jpg',
      description: 'Comprehensive digital services for businesses in San Francisco and the surrounding areas.',
      services: ['Website Development', 'SEO Optimization', 'Digital Marketing'],
      responseTime: '24-48 hours',
      testimonial: {
        quote: "Rize Digital transformed our online presence and helped us connect with more local customers. Their understanding of the San Francisco market was invaluable.",
        author: 'Sarah Chen',
        company: 'Golden Gate Boutique'
      }
    },
    {
      id: 'oakland',
      name: 'Oakland',
      region: 'East Bay',
      image: 'oakland.jpg',
      description: 'Tailored digital solutions for Oakland businesses looking to grow their online presence.',
      services: ['E-Commerce Solutions', 'Content Marketing', 'Brand Identity Design'],
      responseTime: '24-48 hours',
      testimonial: {
        quote: "Working with Rize Digital helped us establish a strong online presence in Oakland's competitive market. Their local expertise made all the difference.",
        author: 'Marcus Johnson',
        company: 'East Bay Brewers'
      }
    },
    {
      id: 'san-jose',
      name: 'San Jose',
      region: 'South Bay',
      image: 'san-jose.jpg',
      description: 'Digital services tailored to the unique needs of San Jose businesses and tech companies.',
      services: ['Web Application Development', 'Digital Strategy Consulting', 'UI/UX Design'],
      responseTime: '24-48 hours',
      testimonial: {
        quote: "As a tech startup in San Jose, we needed a digital partner who understood our industry. Rize Digital delivered exceptional results that helped us stand out.",
        author: 'Priya Patel',
        company: 'InnovateTech Solutions'
      }
    },
    {
      id: 'berkeley',
      name: 'Berkeley',
      region: 'East Bay',
      image: 'berkeley.jpg',
      description: 'Creative digital solutions for Berkeley businesses, startups, and educational institutions.',
      services: ['Website Development', 'Social Media Management', 'Content Marketing'],
      responseTime: '24-48 hours',
      testimonial: {
        quote: "Rize Digital helped our Berkeley-based business reach a wider audience while maintaining our local community focus. Highly recommended!",
        author: 'David Wong',
        company: 'Berkeley Books & Cafe'
      }
    },
    {
      id: 'palo-alto',
      name: 'Palo Alto',
      region: 'Peninsula',
      image: 'palo-alto.jpg',
      description: 'Innovative digital services for Palo Alto startups, tech companies, and established businesses.',
      services: ['Web Application Development', 'Digital Strategy Consulting', 'Brand Identity Design'],
      responseTime: '24-48 hours',
      testimonial: {
        quote: "The team at Rize Digital understands the unique challenges of the Palo Alto market. Their strategic approach helped us achieve remarkable growth.",
        author: 'Jennifer Lee',
        company: 'Peninsula Innovations'
      }
    },
    {
      id: 'mountain-view',
      name: 'Mountain View',
      region: 'Peninsula',
      image: 'mountain-view.jpg',
      description: 'Comprehensive digital solutions for Mountain View businesses in the tech sector and beyond.',
      services: ['Website Development', 'SEO Optimization', 'UI/UX Design'],
      responseTime: '24-48 hours',
      testimonial: {
        quote: "Rize Digital's expertise in the Mountain View market helped us establish a strong digital presence that resonates with our target audience.",
        author: 'Michael Rodriguez',
        company: 'ViewPoint Technologies'
      }
    }
  ];
  
  // Group service areas by region
  const groupedAreas = serviceAreas.reduce((acc, area) => {
    if (!acc[area.region]) {
      acc[area.region] = [];
    }
    acc[area.region].push(area);
    return acc;
  }, {});
  
  return (
    <div className="service-area-archive-page">
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-light)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <h1>Service Areas</h1>
          <p className="lead">
            Providing exceptional digital services throughout the San Francisco Bay Area
          </p>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section">
        <div className="container">
          <div className="map-container" style={{ 
            backgroundColor: 'var(--background-light)',
            borderRadius: 'var(--border-radius-lg)',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <div className="map-placeholder text-center">
              <i className="fas fa-map-marked-alt fa-5x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h3>Service Area Map</h3>
              <p>We serve clients throughout the San Francisco Bay Area</p>
            </div>
          </div>
          
          <div className="text-center mb-5">
            <h2>Local Expertise, Exceptional Results</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto' }}>
              At Rize Digital, we understand the unique challenges and opportunities of each local market we serve. 
              Our team combines industry expertise with local knowledge to deliver digital solutions that help your 
              business thrive in your specific community.
            </p>
          </div>
          
          <div className="stats-container" style={{ 
            display: 'flex', 
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <div className="stat-item text-center" style={{ padding: 'var(--spacing-md)' }}>
              <div className="stat-number" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-color)'
              }}>6+</div>
              <div className="stat-label">Service Areas</div>
            </div>
            <div className="stat-item text-center" style={{ padding: 'var(--spacing-md)' }}>
              <div className="stat-number" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-color)'
              }}>100+</div>
              <div className="stat-label">Local Projects</div>
            </div>
            <div className="stat-item text-center" style={{ padding: 'var(--spacing-md)' }}>
              <div className="stat-number" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-color)'
              }}>24-48</div>
              <div className="stat-label">Hour Response Time</div>
            </div>
            <div className="stat-item text-center" style={{ padding: 'var(--spacing-md)' }}>
              <div className="stat-number" style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold',
                color: 'var(--primary-color)'
              }}>98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas by Region */}
      {Object.entries(groupedAreas).map(([region, areas]) => (
        <section key={region} className="section" style={{ 
          backgroundColor: region === 'Bay Area' || region === 'Peninsula' ? 'var(--background-off)' : 'white'
        }}>
          <div className="container">
            <h2 className="mb-4">{region}</h2>
            <div className="grid grid-2">
              {areas.map(area => (
                <div key={area.id} className="service-area-card" style={{ 
                  backgroundColor: 'white',
                  borderRadius: 'var(--border-radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--box-shadow-sm)',
                  height: '100%'
                }}>
                  <div className="area-image" style={{ 
                    backgroundColor: 'var(--primary-color)',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <i className="fas fa-city fa-3x"></i>
                  </div>
                  <div className="area-content" style={{ padding: 'var(--spacing-md)' }}>
                    <h3 className="mb-2">{area.name}</h3>
                    <p className="mb-3">{area.description}</p>
                    
                    <h4 className="mb-2">Services Available:</h4>
                    <ul className="service-list mb-3" style={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {area.services.map((service, index) => (
                        <li key={index} style={{ 
                          marginBottom: 'var(--spacing-xs)',
                          display: 'flex',
                          alignItems: 'flex-start'
                        }}>
                          <i className="fas fa-check mr-2" style={{ 
                            color: 'var(--primary-color)',
                            marginRight: 'var(--spacing-sm)',
                            marginTop: '5px'
                          }}></i>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="response-time mb-3" style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)'
                    }}>
                      <i className="fas fa-clock mr-2" style={{ marginRight: 'var(--spacing-sm)' }}></i>
                      <span>Response Time: {area.responseTime}</span>
                    </div>
                    
                    <Link to={`/service-areas/${area.id}`} className="btn btn-primary" style={{ width: '100%' }}>
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">What Our Local Clients Say</h2>
          <div className="grid grid-3">
            {serviceAreas.slice(0, 3).map(area => (
              <div key={area.id} className="testimonial" style={{ 
                backgroundColor: 'var(--background-light)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                position: 'relative'
              }}>
                <div className="quote-mark" style={{ 
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontSize: '3rem',
                  color: 'rgba(0,0,0,0.1)',
                  fontFamily: 'serif'
                }}>"</div>
                <p style={{ marginTop: 'var(--spacing-md)' }}>
                  {area.testimonial.quote}
                </p>
                <div className="testimonial-author" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 'var(--spacing-md)'
                }}>
                  <div className="author-avatar" style={{ 
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    marginRight: 'var(--spacing-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>{area.testimonial.author.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="author-name" style={{ fontWeight: 'bold' }}>{area.testimonial.author}</div>
                    <div className="author-company">{area.testimonial.company}</div>
                    <div className="author-location">{area.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Our Local Expertise</h2>
              <p className="mb-3">
                At Rize Digital, we believe that understanding the local market is essential to delivering effective digital solutions. Our team has extensive experience working with businesses throughout the San Francisco Bay Area, giving us unique insights into the challenges and opportunities specific to each community.
              </p>
              <p className="mb-3">
                We stay up-to-date with local trends, regulations, and market conditions to ensure that our digital strategies are tailored to your specific location. Whether you're a small business in Berkeley or a tech startup in Palo Alto, we have the local knowledge and expertise to help you succeed.
              </p>
              <h3 className="mb-2">Our Local Approach Includes:</h3>
              <ul style={{ paddingLeft: 'var(--spacing-md)' }}>
                <li className="mb-2">Understanding the unique characteristics of each local market</li>
                <li className="mb-2">Tailoring digital strategies to local consumer behavior</li>
                <li className="mb-2">Implementing location-specific SEO and marketing tactics</li>
                <li className="mb-2">Building websites that appeal to local audiences</li>
                <li className="mb-2">Providing personalized service with quick response times</li>
              </ul>
            </div>
            <div className="local-team-image" style={{ 
              backgroundColor: 'var(--background-light)',
              borderRadius: 'var(--border-radius-lg)',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className="fas fa-users fa-5x" style={{ color: 'var(--primary-color)' }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>Do you serve areas outside of the listed service areas?</h4>
              <p>
                While we primarily focus on the San Francisco Bay Area, we can accommodate clients in surrounding areas on a case-by-case basis. Please contact us to discuss your specific location and needs.
              </p>
            </div>
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>Are there any additional fees for services in certain areas?</h4>
              <p>
                Our pricing is consistent across all service areas. We do not charge additional fees based on location within our service area. All pricing is based on the scope and requirements of your project.
              </p>
            </div>
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>Can you provide in-person consultations in all service areas?</h4>
              <p>
                Yes, we offer in-person consultations throughout our service areas. We're happy to meet at your place of business to discuss your digital needs and how we can help.
              </p>
            </div>
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>How familiar are you with local regulations in each service area?</h4>
              <p>
                Our team stays up-to-date with local regulations and requirements in each of our service areas. We ensure that all digital solutions we provide comply with local laws and industry standards.
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/faq" className="btn btn-outline">View All FAQs</Link>
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
          <h2 className="mb-3">Ready to Work with a Local Digital Expert?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Contact us today to discuss how our local expertise can help your business thrive in the digital landscape.
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

export default ServiceAreaArchivePage;
