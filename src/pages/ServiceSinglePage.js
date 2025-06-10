import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * ServiceSinglePage Component
 * 
 * Displays detailed information about a specific service
 * Implements the structure outlined in the Service Individual Page document
 */
const ServiceSinglePage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mock service data - in a real application, this would come from an API
  const services = [
    {
      id: 'website-development',
      title: 'Website Development',
      subtitle: 'Custom websites that drive results',
      description: 'Our website development service delivers custom, responsive websites that are designed to achieve your business goals. Whether you need a simple informational site or a complex web application, our team of experienced developers will create a solution that meets your specific requirements.',
      image: 'website-development.jpg',
      icon: 'fa-laptop-code',
      features: [
        'Responsive design for all devices',
        'User-friendly content management system',
        'Search engine optimization',
        'Performance optimization',
        'Security implementation',
        'Analytics integration'
      ],
      benefits: [
        {
          title: 'Increased Online Visibility',
          description: 'A professionally designed website helps you reach more potential customers through improved search engine rankings and social media integration.',
          icon: 'fa-search'
        },
        {
          title: 'Enhanced User Experience',
          description: "Intuitive navigation and responsive design ensure visitors can easily find what they're looking for, leading to higher engagement and conversion rates.",
          icon: 'fa-users'
        },
        {
          title: 'Improved Brand Credibility',
          description: 'A polished, professional website builds trust with your audience and establishes your brand as an authority in your industry.',
          icon: 'fa-certificate'
        },
        {
          title: 'Increased Conversion Rates',
          description: "Strategic calls-to-action and optimized user journeys guide visitors toward conversion, whether that's making a purchase, filling out a form, or contacting your business.",
          icon: 'fa-chart-line'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Discovery & Planning',
          description: 'We begin by understanding your business goals, target audience, and requirements to develop a strategic plan for your website.'
        },
        {
          step: 2,
          title: 'Design & Prototyping',
          description: 'Our designers create wireframes and visual designs that align with your brand identity and business objectives.'
        },
        {
          step: 3,
          title: 'Development',
          description: 'Our development team brings the designs to life, building a fully functional website with all the features and functionality you need.'
        },
        {
          step: 4,
          title: 'Testing & Quality Assurance',
          description: 'We thoroughly test your website across different devices and browsers to ensure optimal performance and user experience.'
        },
        {
          step: 5,
          title: 'Launch & Training',
          description: 'Once approved, we launch your website and provide training on how to manage and update your content.'
        },
        {
          step: 6,
          title: 'Ongoing Support',
          description: 'We offer ongoing maintenance and support to ensure your website continues to perform optimally and stays up-to-date.'
        }
      ],
      faq: [
        {
          question: 'How long does it take to build a website?',
          answer: 'The timeline for website development varies depending on the complexity and scope of the project. A simple informational website might take 2-4 weeks, while a complex e-commerce platform or custom web application could take 8-12 weeks or more.'
        },
        {
          question: 'Will my website be mobile-friendly?',
          answer: 'Absolutely! All websites we develop are fully responsive and mobile-friendly by default. We use modern development practices to ensure your site looks great and functions perfectly on all devices.'
        },
        {
          question: 'Can I update the website content myself?',
          answer: 'Yes, we build most of our websites on user-friendly content management systems that allow you to easily update content without technical knowledge. We provide training and documentation to help you manage your site effectively.'
        },
        {
          question: 'Do you provide hosting services?',
          answer: 'Yes, we offer reliable, high-performance hosting solutions for websites of all sizes. Our hosting packages include regular backups, security monitoring, and technical support.'
        },
        {
          question: 'What is the cost of website development?',
          answer: 'The cost of website development depends on the complexity, features, and scope of the project. We provide detailed quotes after understanding your specific requirements. Contact us for a free consultation to discuss your project and receive a customized estimate.'
        }
      ],
      relatedServices: ['ecommerce-solutions', 'ui-ux-design', 'seo-optimization'],
      price: 'Starting at $3,000',
      timeframe: '2-8 weeks',
      category: 'web'
    },
    {
      id: 'ecommerce-solutions',
      title: 'E-Commerce Solutions',
      subtitle: 'Sell products online with ease',
      description: 'Our e-commerce solutions help businesses sell products and services online with ease. We create custom online stores that are designed to maximize sales and provide a seamless shopping experience for your customers.',
      image: 'ecommerce-solutions.jpg',
      icon: 'fa-shopping-cart',
      features: [
        'User-friendly product management',
        'Secure payment processing',
        'Inventory management',
        'Order fulfillment integration',
        'Customer account management',
        'Mobile-optimized shopping experience'
      ],
      benefits: [
        {
          title: 'Expanded Market Reach',
          description: 'Sell to customers anywhere, anytime, breaking geographical barriers and expanding your potential customer base.',
          icon: 'fa-globe'
        },
        {
          title: 'Increased Sales',
          description: 'Optimize the shopping experience to increase conversion rates and average order value through strategic design and functionality.',
          icon: 'fa-dollar-sign'
        },
        {
          title: '24/7 Availability',
          description: 'Your online store never closes, allowing customers to shop at their convenience and generating sales around the clock.',
          icon: 'fa-clock'
        },
        {
          title: 'Valuable Customer Insights',
          description: 'Gather data on customer behavior and preferences to inform marketing strategies and product development.',
          icon: 'fa-chart-pie'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Requirements Analysis',
          description: 'We analyze your business needs, product catalog, and target audience to determine the best e-commerce solution for your business.'
        },
        {
          step: 2,
          title: 'Platform Selection',
          description: 'Based on your requirements, we recommend the most suitable e-commerce platform (Shopify, WooCommerce, Magento, etc.).'
        },
        {
          step: 3,
          title: 'Design & User Experience',
          description: 'We design a visually appealing and user-friendly online store that reflects your brand identity and optimizes the shopping experience.'
        },
        {
          step: 4,
          title: 'Development & Integration',
          description: 'Our developers build your e-commerce store and integrate payment gateways, shipping methods, and other necessary third-party services.'
        },
        {
          step: 5,
          title: 'Product Setup & Content',
          description: 'We help you set up your product catalog, including product descriptions, images, pricing, and categories.'
        },
        {
          step: 6,
          title: 'Testing & Launch',
          description: 'We thoroughly test your online store to ensure everything works perfectly before launching it to the public.'
        }
      ],
      faq: [
        {
          question: 'Which e-commerce platform do you recommend?',
          answer: "The best platform depends on your specific needs. We work with various platforms including Shopify, WooCommerce, and Magento. During our consultation, we'll recommend the most suitable option based on your requirements, budget, and technical capabilities."
        },
        {
          question: 'Can you migrate my existing online store to a new platform?',
          answer: 'Yes, we offer e-commerce migration services. We can transfer your products, customer data, and order history from your current platform to a new one with minimal disruption to your business.'
        },
        {
          question: 'How do you handle payment processing?',
          answer: 'We integrate secure payment gateways that comply with industry standards for data protection. We can set up multiple payment methods including credit cards, PayPal, Apple Pay, and more depending on your requirements.'
        },
        {
          question: 'Can you help with shipping and tax configuration?',
          answer: 'Absolutely! We configure shipping methods and tax calculations based on your business model and shipping policies. We can set up real-time shipping rates, flat rates, free shipping thresholds, and tax calculations for different regions.'
        },
        {
          question: 'Do you provide training on how to manage the online store?',
          answer: 'Yes, we provide comprehensive training on how to manage your e-commerce store, including product management, order processing, and content updates. We also provide documentation for future reference.'
        }
      ],
      relatedServices: ['website-development', 'digital-strategy', 'content-marketing'],
      price: 'Starting at $5,000',
      timeframe: '4-12 weeks',
      category: 'web'
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      subtitle: 'Improve your search engine rankings',
      description: "Our SEO optimization services help improve your website's visibility in search engines, driving more organic traffic to your site. We use proven strategies and techniques to help your business rank higher for relevant keywords and phrases.",
      image: 'seo-optimization.jpg',
      icon: 'fa-search',
      features: [
        'Comprehensive website audit',
        'Keyword research and analysis',
        'On-page optimization',
        'Technical SEO improvements',
        'Content optimization',
        'Link building strategies',
        'Local SEO optimization',
        'Regular performance reporting'
      ],
      benefits: [
        {
          title: 'Increased Organic Traffic',
          description: 'Attract more visitors to your website through improved search engine rankings for relevant keywords.',
          icon: 'fa-users'
        },
        {
          title: 'Higher Quality Leads',
          description: 'Reach potential customers who are actively searching for your products or services, resulting in higher conversion rates.',
          icon: 'fa-filter'
        },
        {
          title: 'Improved User Experience',
          description: 'SEO best practices also enhance the overall user experience of your website, leading to higher engagement and conversion rates.',
          icon: 'fa-smile'
        },
        {
          title: 'Long-Term Results',
          description: 'Unlike paid advertising, SEO provides sustainable, long-term results that continue to benefit your business over time.',
          icon: 'fa-chart-line'
        }
      ],
      process: [
        {
          step: 1,
          title: 'Comprehensive Audit',
          description: "We conduct a thorough analysis of your website's current SEO performance, identifying strengths, weaknesses, and opportunities for improvement."
        },
        {
          step: 2,
          title: 'Keyword Research',
          description: 'We identify the most relevant and valuable keywords for your business based on search volume, competition, and user intent.'
        },
        {
          step: 3,
          title: 'On-Page Optimization',
          description: "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords."
        },
        {
          step: 4,
          title: 'Technical SEO',
          description: 'We address technical issues that may be affecting your search rankings, such as site speed, mobile-friendliness, and crawlability.'
        },
        {
          step: 5,
          title: 'Content Strategy',
          description: 'We develop a content strategy to address gaps in your current content and create new, valuable content that targets important keywords.'
        },
        {
          step: 6,
          title: 'Off-Page Optimization',
          description: "We implement strategies to build high-quality backlinks and improve your website's authority and reputation."
        }
      ],
      faq: [
        {
          question: 'How long does it take to see results from SEO?',
          answer: 'SEO is a long-term strategy, and results typically take time to materialize. You may start seeing improvements within 3-6 months, but significant results often take 6-12 months or more, depending on your industry, competition, and starting point.'
        },
        {
          question: 'Can you guarantee a #1 ranking on Google?',
          answer: 'No reputable SEO professional can guarantee specific rankings, as search algorithms are complex and constantly changing. We focus on implementing proven strategies that improve your visibility and drive relevant traffic, but we cannot guarantee specific positions.'
        },
        {
          question: 'How do you measure SEO success?',
          answer: 'We track various metrics including organic traffic, keyword rankings, conversion rates, bounce rates, and more. We provide regular reports that show your progress and the impact of our SEO efforts on your business goals.'
        },
        {
          question: 'Do I need to create new content for SEO?',
          answer: 'In most cases, yes. Fresh, high-quality content is a crucial component of successful SEO. We can help you develop a content strategy and create optimized content that appeals to both search engines and your target audience.'
        },
        {
          question: 'How often do you update your SEO strategies?',
          answer: 'Search algorithms change frequently, so we continuously monitor industry trends and algorithm updates to ensure our strategies remain effective. We adjust our approach as needed to maintain and improve your search rankings.'
        }
      ],
      relatedServices: ['content-marketing', 'website-development', 'digital-strategy'],
      price: 'Starting at $1,500/month',
      timeframe: 'Ongoing',
      category: 'marketing'
    }
  ];
  
  // Find the service based on the serviceId parameter
  useEffect(() => {
    const foundService = services.find(s => s.id === serviceId);
    setService(foundService);
    setLoading(false);
  }, [serviceId]);
  
  // FAQ accordion component
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="faq-item" style={{ 
        marginBottom: 'var(--spacing-md)',
        border: '1px solid #e2e8f0',
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden'
      }}>
        <button 
          className="faq-question" 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 'var(--spacing-md)',
            backgroundColor: isOpen ? 'var(--primary-color)' : 'var(--background-light)',
            color: isOpen ? 'var(--text-light)' : 'var(--text-dark)',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            transition: 'all var(--transition-normal)'
          }}
        >
          <span style={{ fontWeight: '600' }}>{question}</span>
          <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
        </button>
        
        {isOpen && (
          <div className="faq-answer" style={{ 
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--background-light)'
          }}>
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
  };
  
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
  
  if (!service) {
    return (
      <div className="error-container" style={{ 
        textAlign: 'center',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist or has been removed.</p>
        <Link to="/services" className="btn btn-primary mt-3">View All Services</Link>
      </div>
    );
  }
  
  return (
    <div className="service-single-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-light)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <div className="service-icon mb-3" style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-md)'
              }}>
                <i className={`fas ${service.icon} fa-2x`}></i>
              </div>
              <h1 className="mb-2">{service.title}</h1>
              <p className="lead mb-4">{service.subtitle}</p>
              <div className="service-meta" style={{ 
                display: 'flex',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div>
                  <strong>Price:</strong> {service.price}
                </div>
                <div>
                  <strong>Timeframe:</strong> {service.timeframe}
                </div>
              </div>
              <Link to="/contact" className="btn btn-light">Request a Quote</Link>
            </div>
            <div className="hero-image" style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: 'var(--border-radius-lg)',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className={`fas ${service.icon} fa-5x`}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Service Overview</h2>
              <p className="mb-4">{service.description}</p>
              <h3 className="mb-3">Key Features</h3>
              <ul className="feature-list" style={{ 
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}>
                {service.features.map((feature, index) => (
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-image" style={{ 
              backgroundColor: 'var(--background-light)',
              borderRadius: 'var(--border-radius-lg)',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className={`fas ${service.icon} fa-5x`} style={{ color: 'var(--primary-color)' }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Benefits</h2>
          <div className="grid grid-2">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card" style={{ 
                backgroundColor: 'white',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                boxShadow: 'var(--box-shadow-sm)'
              }}>
                <div className="benefit-icon mb-3" style={{ 
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
                  <i className={`fas ${benefit.icon} fa-2x`}></i>
                </div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Our Process</h2>
          <div className="process-timeline">
            {service.process.map((step, index) => (
              <div key={index} className="process-step" style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: index === service.process.length - 1 ? 0 : 'var(--spacing-xl)'
              }}>
                <div className="step-number" style={{ 
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'var(--spacing-md)',
                  flexShrink: 0,
                  fontWeight: 'bold'
                }}>{step.step}</div>
                <div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {service.faq.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/faq" className="btn btn-outline">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Related Services</h2>
          <div className="grid grid-3">
            {service.relatedServices.map(relatedId => {
              const relatedService = services.find(s => s.id === relatedId);
              return (
                <div key={relatedId} className="service-card" style={{ 
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
                    <i className={`fas ${relatedService.icon} fa-3x`}></i>
                  </div>
                  <div className="service-content" style={{ padding: 'var(--spacing-md)' }}>
                    <h3>{relatedService.title}</h3>
                    <p>{relatedService.description.substring(0, 120)}...</p>
                    <div className="service-meta" style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: 'var(--spacing-md)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)'
                    }}>
                      <div>{relatedService.price}</div>
                      <div>{relatedService.timeframe}</div>
                    </div>
                    <Link to={`/services/${relatedService.id}`} className="btn btn-primary mt-3" style={{ width: '100%' }}>
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
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
          <h2 className="mb-3">Ready to Get Started?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Let's discuss how our {service.title.toLowerCase()} services can help your business grow and succeed.
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

export default ServiceSinglePage;
