import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * ServiceArchivePage Component
 * 
 * Displays all services offered by the company
 * Implements the structure outlined in the Service Archive Page document
 */
const ServiceArchivePage = () => {
  // State for service filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Service categories
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'web', name: 'Web Development' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'design', name: 'Design & Branding' },
    { id: 'consulting', name: 'Consulting' }
  ];
  
  // Service items
  const services = [
    {
      id: 'website-development',
      category: 'web',
      title: 'Website Development',
      description: 'Custom website development tailored to your business needs. We create responsive, user-friendly websites that drive results.',
      icon: 'fa-laptop-code',
      price: 'Starting at $3,000',
      timeframe: '2-8 weeks',
      featured: true
    },
    {
      id: 'ecommerce-solutions',
      category: 'web',
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce solutions to help you sell products online. Includes product management, payment processing, and order fulfillment.',
      icon: 'fa-shopping-cart',
      price: 'Starting at $5,000',
      timeframe: '4-12 weeks',
      featured: true
    },
    {
      id: 'web-application',
      category: 'web',
      title: 'Web Application Development',
      description: 'Custom web applications designed to solve specific business problems and improve operational efficiency.',
      icon: 'fa-cogs',
      price: 'Starting at $8,000',
      timeframe: '8-16 weeks',
      featured: false
    },
    {
      id: 'seo-optimization',
      category: 'marketing',
      title: 'SEO Optimization',
      description: "Improve your website's visibility in search engines with our comprehensive SEO services.",
      icon: 'fa-search',
      price: 'Starting at $1,500/month',
      timeframe: 'Ongoing',
      featured: true
    },
    {
      id: 'content-marketing',
      category: 'marketing',
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution to attract and engage your target audience.',
      icon: 'fa-pencil-alt',
      price: 'Starting at $2,000/month',
      timeframe: 'Ongoing',
      featured: false
    },
    {
      id: 'social-media',
      category: 'marketing',
      title: 'Social Media Management',
      description: 'Comprehensive social media management to build your brand presence and engage with your audience.',
      icon: 'fa-share-alt',
      price: 'Starting at $1,800/month',
      timeframe: 'Ongoing',
      featured: false
    },
    {
      id: 'brand-identity',
      category: 'design',
      title: 'Brand Identity Design',
      description: 'Develop a cohesive brand identity including logo, color palette, typography, and brand guidelines.',
      icon: 'fa-paint-brush',
      price: 'Starting at $2,500',
      timeframe: '2-4 weeks',
      featured: true
    },
    {
      id: 'ui-ux-design',
      category: 'design',
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience and increases conversion rates.',
      icon: 'fa-object-group',
      price: 'Starting at $3,500',
      timeframe: '3-6 weeks',
      featured: false
    },
    {
      id: 'digital-strategy',
      category: 'consulting',
      title: 'Digital Strategy Consulting',
      description: 'Strategic guidance to help you navigate the digital landscape and achieve your business goals.',
      icon: 'fa-chart-line',
      price: 'Starting at $2,500/month',
      timeframe: 'Ongoing',
      featured: true
    },
    {
      id: 'tech-consulting',
      category: 'consulting',
      title: 'Technology Consulting',
      description: 'Expert advice on technology selection, implementation, and optimization for your business.',
      icon: 'fa-server',
      price: 'Starting at $3,000/month',
      timeframe: 'Ongoing',
      featured: false
    }
  ];
  
  // Filter services based on active filter
  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);
  
  // Featured services
  const featuredServices = services.filter(service => service.featured);
  
  return (
    <div className="service-archive-page">
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundColor: 'var(--background-off)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">
            Comprehensive digital solutions tailored to help your business grow and succeed online.
          </p>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Digital Solutions for Modern Businesses</h2>
              <p>
                At Rize Digital, we offer a comprehensive range of digital services designed to help your business thrive in the digital landscape. Our team of experts combines technical expertise with creative thinking to deliver solutions that drive real results.
              </p>
              <p>
                Whether you need a stunning website, a comprehensive digital marketing strategy, or expert consulting services, we have the skills and experience to help you achieve your goals.
              </p>
              <div className="stats-container" style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginTop: 'var(--spacing-lg)'
              }}>
                <div className="stat-item text-center">
                  <div className="stat-number" style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: 'bold',
                    color: 'var(--primary-color)'
                  }}>200+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number" style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: 'bold',
                    color: 'var(--primary-color)'
                  }}>50+</div>
                  <div className="stat-label">Industries Served</div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number" style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: 'bold',
                    color: 'var(--primary-color)'
                  }}>95%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="process-container" style={{ 
              backgroundColor: 'var(--background-light)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--border-radius-lg)'
            }}>
              <h3>Our Approach</h3>
              <div className="process-step" style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: 'var(--spacing-md)'
              }}>
                <div className="step-number" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'var(--spacing-md)',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <h4>Discovery & Strategy</h4>
                  <p>We begin by understanding your business goals, target audience, and competitive landscape to develop a tailored strategy.</p>
                </div>
              </div>
              <div className="process-step" style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: 'var(--spacing-md)'
              }}>
                <div className="step-number" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'var(--spacing-md)',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <h4>Planning & Design</h4>
                  <p>We create detailed plans and designs that align with your brand identity and business objectives.</p>
                </div>
              </div>
              <div className="process-step" style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: 'var(--spacing-md)'
              }}>
                <div className="step-number" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'var(--spacing-md)',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <h4>Development & Implementation</h4>
                  <p>Our team of experts brings your project to life with attention to detail and technical excellence.</p>
                </div>
              </div>
              <div className="process-step" style={{ 
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <div className="step-number" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'var(--spacing-md)',
                  flexShrink: 0
                }}>4</div>
                <div>
                  <h4>Testing & Launch</h4>
                  <p>We thoroughly test all deliverables to ensure quality and performance before launch.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Featured Services</h2>
          <div className="grid grid-3">
            {featuredServices.map(service => (
              <div key={service.id} className="service-card" style={{ 
                backgroundColor: 'white',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--box-shadow-sm)',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
                height: '100%'
              }}>
                <div className="service-icon" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <i className={`fas ${service.icon} fa-3x`}></i>
                </div>
                <div className="service-content" style={{ padding: 'var(--spacing-md)' }}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta" style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 'var(--spacing-md)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <div>{service.price}</div>
                    <div>{service.timeframe}</div>
                  </div>
                  <Link to={`/services/${service.id}`} className="btn btn-primary mt-3" style={{ width: '100%' }}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-3">All Services</h2>
          <p className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Browse our complete range of services and find the perfect solution for your business needs.
          </p>
          
          {/* Service Categories */}
          <div className="categories-container mb-5">
            <div className="categories" style={{ 
              display: 'flex', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 'var(--spacing-sm)'
            }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: activeFilter === category.id ? 'var(--primary-color)' : 'var(--background-light)',
                    color: activeFilter === category.id ? 'var(--text-light)' : 'var(--text-dark)',
                    border: '1px solid #e2e8f0',
                    borderRadius: 'var(--border-radius-sm)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Grid */}
          <div className="grid grid-3">
            {filteredServices.map(service => (
              <div key={service.id} className="service-card" style={{ 
                backgroundColor: 'white',
                borderRadius: 'var(--border-radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--box-shadow-sm)',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
                height: '100%'
              }}>
                <div className="service-icon" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  padding: 'var(--spacing-md)',
                  textAlign: 'center'
                }}>
                  <i className={`fas ${service.icon} fa-3x`}></i>
                </div>
                <div className="service-content" style={{ padding: 'var(--spacing-md)' }}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta" style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 'var(--spacing-md)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <div>{service.price}</div>
                    <div>{service.timeframe}</div>
                  </div>
                  <Link to={`/services/${service.id}`} className="btn btn-primary mt-3" style={{ width: '100%' }}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Technologies */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Tools and Technologies We Use</h2>
          <div className="grid grid-4">
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-react fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>React</h4>
              <p>Modern, responsive user interfaces</p>
            </div>
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-node-js fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>Node.js</h4>
              <p>Scalable backend solutions</p>
            </div>
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-wordpress fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>WordPress</h4>
              <p>Content management systems</p>
            </div>
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-shopify fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>Shopify</h4>
              <p>E-commerce solutions</p>
            </div>
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-google fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>Google Analytics</h4>
              <p>Data-driven insights</p>
            </div>
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-aws fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>AWS</h4>
              <p>Cloud infrastructure</p>
            </div>
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-figma fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>Figma</h4>
              <p>UI/UX design</p>
            </div>
            <div className="tech-item text-center" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-md)',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <i className="fab fa-mailchimp fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
              <h4>Mailchimp</h4>
              <p>Email marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <div className="grid grid-3">
            <div className="testimonial" style={{ 
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
                Rize Digital transformed our online presence with a stunning website that perfectly captures our brand. Their team was professional, responsive, and delivered beyond our expectations.
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
                }}>JD</div>
                <div>
                  <div className="author-name" style={{ fontWeight: 'bold' }}>Jane Doe</div>
                  <div className="author-company">ABC Company</div>
                </div>
              </div>
            </div>
            <div className="testimonial" style={{ 
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
                The SEO services provided by Rize Digital have significantly improved our search rankings and increased our organic traffic by 150%. Their data-driven approach and regular reporting keep us informed every step of the way.
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
                }}>JS</div>
                <div>
                  <div className="author-name" style={{ fontWeight: 'bold' }}>John Smith</div>
                  <div className="author-company">XYZ Corporation</div>
                </div>
              </div>
            </div>
            <div className="testimonial" style={{ 
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
                Working with Rize Digital on our brand identity was a game-changer for our business. Their strategic approach and creative design work helped us stand out in a crowded market and connect with our target audience.
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
                }}>SJ</div>
                <div>
                  <div className="author-name" style={{ fontWeight: 'bold' }}>Sarah Johnson</div>
                  <div className="author-company">123 Startup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>How long does it take to complete a project?</h4>
              <p>
                Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 8-12 weeks or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.
              </p>
            </div>
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>What is your pricing structure?</h4>
              <p>
                Our pricing is based on the scope of work, complexity, and specific requirements of each project. We provide detailed quotes after understanding your needs. For ongoing services like digital marketing, we offer monthly retainer packages.
              </p>
            </div>
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>Do you offer ongoing support after project completion?</h4>
              <p>
                Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. These can include regular updates, security monitoring, content updates, and technical support.
              </p>
            </div>
            <div className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
              <h4>Can you work with my existing website or do I need a new one?</h4>
              <p>
                We can work with your existing website if it has a solid foundation. After an assessment, we'll recommend whether to improve your current site or build a new one based on your goals and the state of your existing website.
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
          <h2 className="mb-3">Ready to Grow Your Business?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Let's discuss how our digital solutions can help your business thrive in the digital landscape.
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

export default ServiceArchivePage;
