import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * ServiceAreaSinglePage Component
 * 
 * Displays detailed information about a specific service area
 * Implements the structure outlined in the Service Area Single Page document
 */
const ServiceAreaSinglePage = () => {
  const { areaId } = useParams();
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mock service areas data - in a real application, this would come from an API
  const serviceAreas = [
    {
      id: 'san-francisco',
      name: 'San Francisco',
      region: 'Bay Area',
      image: 'san-francisco.jpg',
      description: 'Comprehensive digital services for businesses in San Francisco and the surrounding areas.',
      longDescription: 'Rize Digital provides comprehensive digital services to businesses throughout San Francisco. From startups in SoMa to established businesses in the Financial District, we help San Francisco companies establish a strong online presence and achieve their digital marketing goals. Our team has extensive experience working with businesses in various San Francisco neighborhoods, giving us unique insights into the local market dynamics and consumer behavior.',
      services: ['Website Development', 'SEO Optimization', 'Digital Marketing', 'E-Commerce Solutions', 'Content Marketing', 'Social Media Management'],
      neighborhoods: ['Financial District', 'SoMa', 'Mission District', 'Marina', 'North Beach', 'Richmond District'],
      responseTime: '24-48 hours',
      localChallenges: [
        'High competition in the tech and startup space',
        'Diverse customer base with varying digital preferences',
        'Fast-paced market requiring agile digital strategies',
        'Need for mobile-optimized solutions for on-the-go consumers',
        'Balancing innovation with user-friendly experiences'
      ],
      localSolutions: [
        'Competitive analysis to identify market gaps and opportunities',
        'Targeted digital strategies for specific customer segments',
        'Agile development and marketing approaches',
        'Mobile-first design and development',
        'User experience testing with local consumers'
      ],
      testimonials: [
        {
          quote: "Rize Digital transformed our online presence and helped us connect with more local customers. Their understanding of the San Francisco market was invaluable.",
          author: 'Sarah Chen',
          company: 'Golden Gate Boutique'
        },
        {
          quote: "Working with a digital agency that understands the unique challenges of the San Francisco market has been a game-changer for our business. Highly recommended!",
          author: 'Michael Torres',
          company: 'Bay Area Tech Solutions'
        },
        {
          quote: "The team at Rize Digital helped us navigate the competitive San Francisco market with a digital strategy that truly set us apart from our competitors.",
          author: 'Jessica Wong',
          company: 'SF Culinary Experiences'
        }
      ],
      caseStudies: [
        {
          title: 'Increasing Online Visibility for a Local Retail Store',
          description: 'How we helped a San Francisco boutique increase foot traffic by 45% through targeted local SEO and social media strategies.',
          results: ['45% increase in foot traffic', '120% increase in online engagement', '35% growth in revenue']
        },
        {
          title: 'E-Commerce Success for a San Francisco Artisan',
          description: 'Developing a custom e-commerce solution that helped a local artisan reach customers beyond the Bay Area.',
          results: ['300% increase in online sales', 'Expanded customer base to 15 states', '65% increase in average order value']
        }
      ],
      localTeam: {
        members: 3,
        expertise: ['Local SEO', 'Web Development', 'Digital Marketing', 'Content Creation'],
        responseTime: '24-48 hours'
      },
      emergencySupport: {
        available: true,
        hours: '24/7',
        contact: '1-800-RIZE-911'
      },
      faq: [
        {
          question: 'Do you work with businesses in all San Francisco neighborhoods?',
          answer: 'Yes, we serve clients throughout San Francisco, from the Financial District to the Sunset. Our team is familiar with the unique characteristics of each neighborhood and can tailor our digital strategies accordingly.'
        },
        {
          question: "How familiar are you with San Francisco's business regulations?",
          answer: "Our team stays up-to-date with San Francisco's business regulations and requirements. We ensure that all digital solutions we provide comply with local laws and industry standards."
        },
        {
          question: 'Can you help with location-based marketing in San Francisco?',
          answer: 'Absolutely! We specialize in location-based marketing strategies that help San Francisco businesses connect with local customers. This includes local SEO, geotargeted advertising, and neighborhood-specific content strategies.'
        },
        {
          question: 'Do you offer in-person consultations in San Francisco?',
          answer: "Yes, we offer in-person consultations throughout San Francisco. We're happy to meet at your place of business to discuss your digital needs and how we can help."
        }
      ]
    },
    {
      id: 'oakland',
      name: 'Oakland',
      region: 'East Bay',
      image: 'oakland.jpg',
      description: 'Tailored digital solutions for Oakland businesses looking to grow their online presence.',
      longDescription: 'Rize Digital provides comprehensive digital services to businesses throughout Oakland. From startups in Uptown to established businesses in Jack London Square, we help Oakland companies establish a strong online presence and achieve their digital marketing goals. Our team has extensive experience working with businesses in various Oakland neighborhoods, giving us unique insights into the local market dynamics and consumer behavior.',
      services: ['E-Commerce Solutions', 'Content Marketing', 'Brand Identity Design', 'Website Development', 'Social Media Management', 'Local SEO'],
      neighborhoods: ['Downtown', 'Uptown', 'Jack London Square', 'Temescal', 'Rockridge', 'Fruitvale'],
      responseTime: '24-48 hours',
      localChallenges: [
        'Diverse community with multilingual needs',
        'Growing business district with increasing competition',
        'Balancing digital innovation with community values',
        'Need for inclusive digital solutions',
        'Connecting with both local and broader Bay Area customers'
      ],
      localSolutions: [
        'Multilingual website development and content',
        'Competitive digital strategies for emerging businesses',
        'Community-focused digital marketing approaches',
        'Accessible website design and development',
        'Targeted campaigns for both local and regional reach'
      ],
      testimonials: [
        {
          quote: "Working with Rize Digital helped us establish a strong online presence in Oakland's competitive market. Their local expertise made all the difference.",
          author: 'Marcus Johnson',
          company: 'East Bay Brewers'
        },
        {
          quote: "Rize Digital understood our need to connect with Oakland's diverse community. Their multilingual approach helped us reach new customers we couldn't before.",
          author: 'Lucia Ramirez',
          company: 'Oakland Community Foods'
        },
        {
          quote: "The team at Rize Digital helped our Oakland business grow beyond our expectations with their strategic digital marketing approach.",
          author: 'James Wilson',
          company: 'Uptown Design Collective'
        }
      ],
      caseStudies: [
        {
          title: 'Multilingual Website Boosts Customer Engagement',
          description: 'How we helped an Oakland business reach a broader audience with a multilingual website and targeted content strategy.',
          results: ['75% increase in website traffic', '40% growth in non-English speaking customers', '50% increase in overall sales']
        },
        {
          title: 'Local SEO Success for Oakland Restaurant',
          description: 'Implementing a local SEO strategy that helped an Oakland restaurant increase reservations and takeout orders.',
          results: ['200% increase in Google Business Profile views', '85% increase in online reservations', '60% growth in takeout orders']
        }
      ],
      localTeam: {
        members: 2,
        expertise: ['Local SEO', 'Multilingual Content', 'Web Development', 'Social Media Marketing'],
        responseTime: '24-48 hours'
      },
      emergencySupport: {
        available: true,
        hours: '24/7',
        contact: '1-800-RIZE-911'
      },
      faq: [
        {
          question: 'Do you work with businesses in all Oakland neighborhoods?',
          answer: 'Yes, we serve clients throughout Oakland, from Downtown to Fruitvale. Our team is familiar with the unique characteristics of each neighborhood and can tailor our digital strategies accordingly.'
        },
        {
          question: 'Can you create multilingual websites for Oakland businesses?',
          answer: 'Absolutely! We specialize in creating multilingual websites that help Oakland businesses connect with the diverse local community. We can develop content in multiple languages and implement proper SEO for each.'
        },
        {
          question: 'How do you help Oakland businesses compete with San Francisco companies?',
          answer: "We develop strategies that highlight the unique advantages of Oakland businesses while ensuring they have the digital presence to compete regionally. This includes local SEO, targeted advertising, and distinctive branding that showcases Oakland's unique character."
        },
        {
          question: "Do you understand the specific needs of Oakland's diverse communities?",
          answer: "Yes, our team has extensive experience working with Oakland's diverse communities. We develop inclusive digital strategies that respect and celebrate this diversity while effectively reaching target audiences."
        }
      ]
    },
    {
      id: 'san-jose',
      name: 'San Jose',
      region: 'South Bay',
      image: 'san-jose.jpg',
      description: 'Digital services tailored to the unique needs of San Jose businesses and tech companies.',
      longDescription: 'Rize Digital provides comprehensive digital services to businesses throughout San Jose. From tech startups in North San Jose to established businesses in Downtown, we help San Jose companies establish a strong online presence and achieve their digital marketing goals. Our team has extensive experience working with businesses in various San Jose neighborhoods, giving us unique insights into the local market dynamics and consumer behavior.',
      services: ['Web Application Development', 'Digital Strategy Consulting', 'UI/UX Design', 'SEO Optimization', 'Content Marketing', 'E-Commerce Solutions'],
      neighborhoods: ['Downtown', 'North San Jose', 'Willow Glen', 'Santana Row', 'Japantown', 'Evergreen'],
      responseTime: '24-48 hours',
      localChallenges: [
        'Highly competitive tech industry',
        'Need for cutting-edge digital solutions',
        'Balancing innovation with usability',
        'Diverse population with varying tech literacy',
        'Standing out in Silicon Valley\'s digital landscape'
      ],
      localSolutions: [
        'Advanced web application development',
        'Innovative digital strategies for tech companies',
        'User-centered design approaches',
        'Inclusive digital solutions for diverse audiences',
        'Distinctive branding and positioning strategies'
      ],
      testimonials: [
        {
          quote: "As a tech startup in San Jose, we needed a digital partner who understood our industry. Rize Digital delivered exceptional results that helped us stand out.",
          author: 'Priya Patel',
          company: 'InnovateTech Solutions'
        },
        {
          quote: "Rize Digital's understanding of the San Jose market helped us connect with both tech-savvy customers and traditional businesses.",
          author: 'Robert Chen',
          company: 'Silicon Valley Consulting'
        },
        {
          quote: "The web application Rize Digital developed for our San Jose business has transformed our operations and customer experience.",
          author: 'Maria Gonzalez',
          company: 'South Bay Services'
        }
      ],
      caseStudies: [
        {
          title: 'Custom Web Application for Tech Startup',
          description: 'Developing a scalable web application that helped a San Jose startup streamline operations and improve customer experience.',
          results: ['65% increase in operational efficiency', '40% reduction in customer service inquiries', '85% positive user feedback']
        },
        {
          title: 'Digital Transformation for Traditional Business',
          description: 'Helping a long-established San Jose business transition to digital operations and reach new customers.',
          results: ['120% increase in online visibility', '45% growth in new customer acquisition', '30% increase in revenue']
        }
      ],
      localTeam: {
        members: 4,
        expertise: ['Web Application Development', 'UI/UX Design', 'Digital Strategy', 'Technical SEO'],
        responseTime: '24-48 hours'
      },
      emergencySupport: {
        available: true,
        hours: '24/7',
        contact: '1-800-RIZE-911'
      },
      faq: [
        {
          question: 'Do you have experience working with tech startups in San Jose?',
          answer: 'Yes, we have extensive experience working with tech startups in San Jose. We understand the unique challenges and opportunities in the Silicon Valley ecosystem and can help your startup establish a strong digital presence.'
        },
        {
          question: 'Can you help traditional San Jose businesses compete in the digital space?',
          answer: 'Absolutely! We specialize in helping traditional businesses transition to digital operations and establish a competitive online presence. We develop strategies that respect your established brand while embracing digital innovation.'
        },
        {
          question: 'Do you offer technical SEO services for San Jose tech companies?',
          answer: 'Yes, we offer advanced technical SEO services tailored to the needs of tech companies. Our team can optimize complex web applications, address JavaScript SEO challenges, and implement structured data for enhanced search visibility.'
        },
        {
          question: 'How do you stay current with the fast-paced tech environment in San Jose?',
          answer: 'Our team continuously updates their skills and knowledge through professional development, industry conferences, and collaboration with the local tech community. We\'re committed to staying at the forefront of digital innovation to serve our San Jose clients effectively.'
        }
      ]
    }
  ];
  
  // Find the area based on the areaId parameter
  useEffect(() => {
    const foundArea = serviceAreas.find(a => a.id === areaId);
    setArea(foundArea);
    setLoading(false);
  }, [areaId]);
  
  if (loading) {
    return (
      <div className="loading-container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '50vh'
      }}>
        <div className="spinner">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      </div>
    );
  }
  
  if (!area) {
    return (
      <div className="error-container" style={{ 
        textAlign: 'center',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <h1>Service Area Not Found</h1>
        <p>The service area you are looking for does not exist or has been removed.</p>
        <Link to="/service-areas" className="btn btn-primary mt-3">View All Service Areas</Link>
      </div>
    );
  }
  
  return (
    <div className="service-area-single-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-light)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h1 className="mb-2">Digital Services in {area.name}</h1>
              <p className="lead mb-4">
                Tailored digital solutions for {area.name} businesses
              </p>
              <div className="service-meta" style={{ 
                display: 'flex',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div>
                  <strong>Region:</strong> {area.region}
                </div>
                <div>
                  <strong>Response Time:</strong> {area.responseTime}
                </div>
              </div>
              <Link to="/contact" className="btn btn-light">Request a Consultation</Link>
            </div>
            <div className="hero-image" style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 'var(--border-radius-lg)',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className="fas fa-city fa-5x"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Area Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>About Our Services in {area.name}</h2>
              <p className="mb-4">{area.longDescription}</p>
              <h3 className="mb-3">Services Available in {area.name}</h3>
              <ul className="service-list" style={{ 
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}>
                {area.services.map((service, index) => (
                  <li key={index} style={{ 
                    marginBottom: 'var(--spacing-sm)',
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}>
                    <i className="fas fa-check-circle mr-2" style={{ 
                      color: 'var(--primary-color)',
                      marginRight: 'var(--spacing-sm)',
                      marginTop: '5px'
                    }}></i>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="area-map" style={{ 
                backgroundColor: 'var(--background-light)',
                borderRadius: 'var(--border-radius-lg)',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)'
              }}>
                <i className="fas fa-map-marked-alt fa-5x" style={{ color: 'var(--primary-color)' }}></i>
              </div>
              <h3 className="mb-2">Neighborhoods We Serve</h3>
              <div className="neighborhoods" style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--spacing-sm)'
              }}>
                {area.neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="neighborhood-tag" style={{ 
                    backgroundColor: 'var(--background-light)',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--border-radius-sm)',
                    fontSize: '0.9rem'
                  }}>
                    {neighborhood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Challenges and Solutions */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Local Challenges & Solutions</h2>
          <div className="grid grid-2">
            <div className="challenges" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--border-radius-md)',
              height: '100%'
            }}>
              <div className="section-icon mb-3" style={{ 
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)'
              }}>
                <i className="fas fa-exclamation-triangle fa-2x"></i>
              </div>
              <h3 className="mb-3">Common Challenges in {area.name}</h3>
              <ul style={{ paddingLeft: 'var(--spacing-md)' }}>
                {area.localChallenges.map((challenge, index) => (
                  <li key={index} className="mb-2">{challenge}</li>
                ))}
              </ul>
            </div>
            <div className="solutions" style={{ 
              backgroundColor: 'white',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--border-radius-md)',
              height: '100%'
            }}>
              <div className="section-icon mb-3" style={{ 
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)'
              }}>
                <i className="fas fa-lightbulb fa-2x"></i>
              </div>
              <h3 className="mb-3">Our {area.name} Solutions</h3>
              <ul style={{ paddingLeft: 'var(--spacing-md)' }}>
                {area.localSolutions.map((solution, index) => (
                  <li key={index} className="mb-2">{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">{area.name} Success Stories</h2>
          <div className="grid grid-2">
            {area.caseStudies.map((caseStudy, index) => (
              <div key={index} className="case-study" style={{ 
                backgroundColor: 'var(--background-light)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                height: '100%'
              }}>
                <h3 className="mb-3">{caseStudy.title}</h3>
                <p className="mb-3">{caseStudy.description}</p>
                <h4 className="mb-2">Results:</h4>
                <ul style={{ paddingLeft: 'var(--spacing-md)' }}>
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx} className="mb-1">{result}</li>
                  ))}
                </ul>
                <Link to="/case-studies" className="btn btn-outline mt-3">View More Case Studies</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">What Our {area.name} Clients Say</h2>
          <div className="grid grid-3">
            {area.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial" style={{ 
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
                  {testimonial.quote}
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
                  }}>{testimonial.author.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="author-name" style={{ fontWeight: 'bold' }}>{testimonial.author}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions About Our {area.name} Services</h2>
          <div className="grid grid-2">
            {area.faq.map((item, index) => (
              <div key={index} className="faq-item" style={{ marginBottom: 'var(--spacing-md)' }}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
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
          <h2 className="mb-3">Ready to Grow Your {area.name} Business?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
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

export default ServiceAreaSinglePage;
