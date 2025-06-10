import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * CaseStudySinglePage Component
 * 
 * Displays detailed information about a specific case study
 * Implements the structure outlined in the Case Study Individual Page document
 */
const CaseStudySinglePage = () => {
  const { caseId } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Mock case studies data - in a real application, this would come from an API
  const caseStudies = [
    {
      id: 'retail-store-visibility',
      title: 'Increasing Online Visibility for a Local Retail Store',
      client: {
        name: 'Golden Gate Boutique',
        industry: 'Retail',
        size: 'Small Business (5-10 employees)',
        location: 'San Francisco, CA',
        founded: 2015,
        description: 'A boutique clothing store specializing in locally designed fashion and accessories.'
      },
      challenge: {
        main: 'Low online visibility and decreasing foot traffic',
        details: 'Golden Gate Boutique was struggling with declining foot traffic and online visibility. Despite offering high-quality, locally designed products, they were being overshadowed by larger retailers and were not effectively reaching their target audience of fashion-conscious local shoppers.',
        impact: 'Sales had decreased by 15% year-over-year, and their online presence was minimal with few organic search results and low social media engagement.',
        previous_attempts: 'The client had previously attempted basic social media marketing and a simple website, but without a strategic approach or optimization.'
      },
      goals: {
        primary: 'Increase store foot traffic by 30% within 6 months',
        secondary: [
          'Improve online visibility in local search results',
          'Boost social media engagement by 50%',
          'Establish the brand as a go-to destination for local fashion',
          'Create a sustainable digital marketing strategy'
        ],
        kpis: [
          'Store foot traffic',
          'Website traffic from local searches',
          'Social media engagement metrics',
          'Online-to-offline conversion rate',
          'Overall revenue growth'
        ]
      },
      solution: {
        overview: 'We developed a comprehensive local SEO and social media strategy tailored to the unique needs of a boutique retail store in a competitive urban market.',
        approach: [
          {
            phase: 'Discovery & Analysis',
            details: 'We conducted thorough market research, competitor analysis, and customer persona development to understand the local fashion retail landscape and identify opportunities for differentiation.'
          },
          {
            phase: 'Local SEO Implementation',
            details: 'We optimized the client\'s Google Business Profile, created location-specific content, and implemented technical SEO improvements to boost local search visibility.'
          },
          {
            phase: 'Social Media Strategy',
            details: 'We developed a content calendar focused on showcasing local designers, in-store events, and the unique shopping experience, with targeted advertising to reach fashion-conscious consumers in the San Francisco area.'
          },
          {
            phase: 'Cross-Channel Integration',
            details: 'We integrated online and offline marketing efforts, including in-store promotions that drove social media engagement and digital campaigns that encouraged store visits.'
          }
        ],
        technologies: [
          'Google Business Profile Optimization',
          'Local SEO Tools',
          'Social Media Management Platform',
          'Analytics and Tracking Software',
          'Content Management System'
        ]
      },
      implementation: {
        timeline: '3 months for initial implementation, followed by ongoing optimization',
        challenges: [
          'Limited budget requiring creative resource allocation',
          'Highly competitive local retail market',
          'Need to maintain brand authenticity while expanding reach'
        ],
        solutions: [
          'Prioritized high-impact, low-cost strategies initially',
          'Focused on unique local angle to differentiate from larger competitors',
          'Developed brand guidelines to ensure consistent messaging across all channels'
        ],
        team: [
          'Digital Marketing Strategist',
          'SEO Specialist',
          'Social Media Manager',
          'Content Creator',
          'Web Developer'
        ]
      },
      results: {
        metrics: [
          {
            name: 'Foot Traffic Increase',
            value: '45%',
            timeframe: '6 months'
          },
          {
            name: 'Social Media Engagement',
            value: '120%',
            timeframe: '6 months'
          },
          {
            name: 'Local Search Visibility',
            value: '85%',
            timeframe: '6 months'
          },
          {
            name: 'Revenue Growth',
            value: '35%',
            timeframe: '6 months'
          },
          {
            name: 'Return on Marketing Investment',
            value: '320%',
            timeframe: '12 months'
          }
        ],
        testimonials: [
          {
            quote: "The results have exceeded our expectations. Not only are we seeing more customers in our store, but they're also more engaged with our brand and spending more per visit.",
            author: 'Sarah Chen',
            position: 'Owner, Golden Gate Boutique'
          },
          {
            quote: "Working with Rize Digital transformed our business. They understood our unique challenges as a local boutique and created a strategy that truly set us apart.",
            author: 'Michael Torres',
            position: 'Marketing Manager, Golden Gate Boutique'
          }
        ],
        unexpected_benefits: [
          'Increased interest from local designers wanting to sell through the boutique',
          'Media coverage in local fashion publications',
          'Opportunities for collaboration with complementary local businesses'
        ]
      },
      lessons: {
        insights: [
          'Local retail businesses benefit significantly from highly targeted digital strategies',
          'Authentic storytelling is crucial for boutique brands to connect with their audience',
          'Integration between online and offline experiences creates a powerful customer journey'
        ],
        adaptations: [
          'Adjusted content strategy based on engagement analytics',
          'Expanded focus on in-store events based on customer feedback',
          'Refined targeting parameters for social media advertising'
        ],
        best_practices: [
          'Regular analysis of local search trends and adjustments to SEO strategy',
          'Consistent brand voice across all digital and physical touchpoints',
          'Leveraging customer stories and user-generated content'
        ]
      },
      future_plans: {
        next_steps: [
          'Expansion of e-commerce capabilities',
          'Development of a customer loyalty program',
          'Exploration of influencer partnerships with local fashion bloggers'
        ],
        long_term: [
          'Potential for opening a second location based on neighborhood analysis',
          'Development of a private label collection',
          'Creation of a community hub for local fashion events and workshops'
        ]
      },
      team: {
        project_lead: {
          name: 'Jennifer Park',
          role: 'Digital Marketing Director',
          expertise: '10+ years in retail marketing strategy'
        },
        key_members: [
          {
            name: 'David Rodriguez',
            role: 'SEO Specialist',
            contribution: 'Local search optimization and technical SEO implementation'
          },
          {
            name: 'Aisha Johnson',
            role: 'Social Media Strategist',
            contribution: 'Content strategy and community engagement'
          },
          {
            name: 'Ryan Kim',
            role: 'Web Developer',
            contribution: 'Website optimization and analytics implementation'
          }
        ]
      },
      related_case_studies: [
        'ecommerce-artisan',
        'restaurant-local-seo'
      ],
      faq: [
        {
          question: 'How long did it take to see initial results?',
          answer: 'The client began seeing improvements in social media engagement within the first month. Significant increases in foot traffic were observed by month three, with full results realized within six months.'
        },
        {
          question: 'What was the most effective channel for driving store visits?',
          answer: 'Google Business Profile optimization and local search visibility proved most effective for driving new customers to the store, while social media was more effective for engaging existing customers and encouraging repeat visits.'
        },
        {
          question: 'How was ROI measured for this project?',
          answer: 'We implemented tracking systems to measure online-to-offline conversions, including QR codes, special offers, and customer surveys. This data, combined with the client\'s sales information, allowed us to calculate the return on marketing investment.'
        },
        {
          question: 'Would this approach work for larger retail chains?',
          answer: 'While the core strategies could be adapted for larger retailers, this approach was specifically tailored to leverage the unique advantages of a local boutique. Larger chains would require a modified strategy that balances local relevance with brand consistency across locations.'
        }
      ]
    },
    {
      id: 'tech-startup-web-app',
      title: 'Custom Web Application for Tech Startup',
      client: {
        name: 'InnovateTech Solutions',
        industry: 'Technology',
        size: 'Startup (15-20 employees)',
        location: 'San Jose, CA',
        founded: 2019,
        description: 'A technology startup providing innovative solutions for small business operations and customer management.'
      },
      challenge: {
        main: 'Inefficient operations and poor customer experience',
        details: 'InnovateTech Solutions was struggling with inefficient internal operations and a suboptimal customer experience. Their existing systems were fragmented, leading to data silos, manual processes, and delays in customer service.',
        impact: 'Operational inefficiencies were increasing costs by approximately 30%, while customer satisfaction scores were declining, threatening client retention and growth.',
        previous_attempts: 'The client had tried using various off-the-shelf software solutions, but these failed to address their specific workflow needs and integration requirements.'
      },
      goals: {
        primary: 'Develop a custom web application to streamline operations and improve customer experience',
        secondary: [
          'Reduce operational costs by 25%',
          'Improve customer satisfaction scores by 40%',
          'Eliminate data silos and manual processes',
          'Create a scalable solution that can grow with the company'
        ],
        kpis: [
          'Operational efficiency metrics',
          'Customer satisfaction scores',
          'Response time to customer inquiries',
          'Employee productivity',
          'Cost savings'
        ]
      },
      solution: {
        overview: 'We developed a scalable, custom web application with an intuitive UI/UX design that integrated all key business functions and provided a seamless customer portal.',
        approach: [
          {
            phase: 'Discovery & Requirements Gathering',
            details: 'We conducted extensive stakeholder interviews, workflow analysis, and user research to understand the specific needs of both internal teams and customers.'
          },
          {
            phase: 'Architecture & Design',
            details: 'We created a flexible, microservices-based architecture and developed wireframes and prototypes for an intuitive user interface, iterating based on user feedback.'
          },
          {
            phase: 'Development',
            details: 'Using an Agile methodology, we built the application with modern technologies, focusing on performance, security, and scalability.'
          },
          {
            phase: 'Testing & Deployment',
            details: 'We conducted comprehensive testing, including user acceptance testing, and implemented a phased deployment approach to minimize disruption.'
          }
        ],
        technologies: [
          'React.js for frontend development',
          'Node.js for backend services',
          'MongoDB for flexible data storage',
          'AWS for cloud infrastructure',
          'Docker for containerization',
          'Jest and Cypress for testing'
        ]
      },
      implementation: {
        timeline: '6 months from initial discovery to full deployment',
        challenges: [
          'Complex integration with existing legacy systems',
          'Need for minimal disruption during transition',
          'Balancing feature richness with performance and simplicity'
        ],
        solutions: [
          'Developed custom APIs for legacy system integration',
          'Implemented a phased rollout strategy with parallel systems during transition',
          'Prioritized features based on business impact and user needs'
        ],
        team: [
          'Project Manager',
          'UX/UI Designer',
          'Frontend Developers',
          'Backend Developers',
          'QA Engineers',
          'DevOps Specialist'
        ]
      },
      results: {
        metrics: [
          {
            name: 'Operational Efficiency',
            value: '65%',
            timeframe: '3 months post-launch'
          },
          {
            name: 'Customer Service Inquiries',
            value: '-40%',
            timeframe: '3 months post-launch'
          },
          {
            name: 'Customer Satisfaction',
            value: '85%',
            timeframe: '6 months post-launch'
          },
          {
            name: 'Employee Productivity',
            value: '50%',
            timeframe: '6 months post-launch'
          },
          {
            name: 'Cost Savings',
            value: '$250,000',
            timeframe: 'Annual'
          }
        ],
        testimonials: [
          {
            quote: "The web application has transformed our business operations. What used to take hours now takes minutes, and our team can focus on innovation rather than administration.",
            author: 'Priya Patel',
            position: 'CEO, InnovateTech Solutions'
          },
          {
            quote: "Our customers love the new portal. It's intuitive, fast, and gives them the information they need without having to contact support.",
            author: 'Robert Chen',
            position: 'Customer Success Manager, InnovateTech Solutions'
          }
        ],
        unexpected_benefits: [
          'Improved ability to identify and act on business insights from integrated data',
          'Enhanced team collaboration and communication',
          'Increased capacity for taking on new clients without adding staff'
        ]
      },
      lessons: {
        insights: [
          'Early and continuous user involvement is critical for successful custom application development',
          'Flexible architecture decisions pay dividends when business requirements evolve',
          'Investing in proper data migration and integration planning prevents major issues later'
        ],
        adaptations: [
          'Shifted to more frequent, smaller releases based on user feedback',
          'Added more robust analytics based on initial usage patterns',
          'Enhanced mobile functionality beyond initial requirements'
        ],
        best_practices: [
          'Comprehensive documentation for knowledge transfer and maintenance',
          'Automated testing to ensure stability with each update',
          'Regular stakeholder reviews throughout the development process'
        ]
      },
      future_plans: {
        next_steps: [
          'Development of additional modules for advanced reporting and analytics',
          'Mobile application development',
          'Integration with additional third-party services'
        ],
        long_term: [
          'Potential white-labeling of the solution for resale',
          'AI-powered features for predictive analytics',
          'Expansion of the platform to serve enterprise clients'
        ]
      },
      team: {
        project_lead: {
          name: 'Alex Wong',
          role: 'Technical Director',
          expertise: '12+ years in custom application development'
        },
        key_members: [
          {
            name: 'Sophia Martinez',
            role: 'Lead UX/UI Designer',
            contribution: 'User research and interface design'
          },
          {
            name: 'James Kim',
            role: 'Full Stack Developer',
            contribution: 'Core application architecture and development'
          },
          {
            name: 'Olivia Johnson',
            role: 'QA Lead',
            contribution: 'Testing strategy and quality assurance'
          }
        ]
      },
      related_case_studies: [
        'digital-transformation',
        'ecommerce-artisan'
      ],
      faq: [
        {
          question: 'How was the project budget determined?',
          answer: 'The budget was established based on a detailed scoping phase, which included requirements gathering, technical planning, and ROI analysis. We worked with the client to prioritize features that would deliver the highest business value within their budget constraints.'
        },
        {
          question: 'How did you ensure the application would meet user needs?',
          answer: 'We implemented a user-centered design process that included stakeholder interviews, user personas, journey mapping, and iterative prototyping. Throughout development, we conducted regular user testing sessions to validate our approach and make adjustments.'
        },
        {
          question: 'What measures were taken to ensure data security?',
          answer: 'Security was a priority throughout the development process. We implemented industry best practices including encryption at rest and in transit, role-based access control, regular security audits, and compliance with relevant data protection regulations.'
        },
        {
          question: 'How is the application maintained and updated?',
          answer: 'We established a continuous integration/continuous deployment (CI/CD) pipeline for efficient updates and provided comprehensive documentation. We also offer ongoing maintenance and support services, with regular feature updates based on user feedback and evolving business needs.'
        }
      ]
    }
  ];
  
  // Find the case study based on the caseId parameter
  useEffect(() => {
    const foundCase = caseStudies.find(c => c.id === caseId);
    setCaseStudy(foundCase);
    setLoading(false);
  }, [caseId]);
  
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
  
  if (!caseStudy) {
    return (
      <div className="error-container" style={{ 
        textAlign: 'center',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <h1>Case Study Not Found</h1>
        <p>The case study you are looking for does not exist or has been removed.</p>
        <Link to="/case-studies" className="btn btn-primary mt-3">View All Case Studies</Link>
      </div>
    );
  }
  
  return (
    <div className="case-study-single-page">
      {/* Case Study Header/Introduction */}
      <section className="hero-section" style={{ 
        backgroundColor: 'var(--primary-color)',
        color: 'var(--text-light)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <div className="industry-tag" style={{ 
                display: 'inline-block',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--border-radius-sm)',
                fontSize: '0.9rem',
                marginBottom: 'var(--spacing-sm)'
              }}>
                {caseStudy.client.industry}
              </div>
              <h1 className="mb-2">{caseStudy.title}</h1>
              <p className="lead mb-4">
                How we helped {caseStudy.client.name} achieve remarkable results through strategic digital solutions.
              </p>
              <div className="client-meta" style={{ 
                display: 'flex',
                gap: 'var(--spacing-lg)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div>
                  <strong>Client:</strong> {caseStudy.client.name}
                </div>
                <div>
                  <strong>Industry:</strong> {caseStudy.client.industry}
                </div>
                <div>
                  <strong>Location:</strong> {caseStudy.client.location}
                </div>
              </div>
              <div className="key-results" style={{ 
                display: 'flex',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                {caseStudy.results.metrics.slice(0, 3).map((metric, index) => (
                  <div key={index} className="result-item" style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--border-radius-sm)',
                    textAlign: 'center'
                  }}>
                    <div className="result-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                      {metric.value}
                    </div>
                    <div className="result-name">{metric.name}</div>
                  </div>
                ))}
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

      {/* Client Background and Challenge */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="mb-4">Client Background</h2>
              <div className="client-card" style={{ 
                backgroundColor: 'var(--background-light)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                marginBottom: 'var(--spacing-lg)'
              }}>
                <div className="client-logo" style={{ 
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: 'var(--border-radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  color: 'white'
                }}>
                  <i className="fas fa-building fa-2x"></i>
                </div>
                <h3 className="mb-2">{caseStudy.client.name}</h3>
                <div className="client-details" style={{ marginBottom: 'var(--spacing-md)' }}>
                  <div><strong>Industry:</strong> {caseStudy.client.industry}</div>
                  <div><strong>Size:</strong> {caseStudy.client.size}</div>
                  <div><strong>Location:</strong> {caseStudy.client.location}</div>
                  <div><strong>Founded:</strong> {caseStudy.client.founded}</div>
                </div>
                <p>{caseStudy.client.description}</p>
              </div>
            </div>
            <div>
              <h2 className="mb-4">The Challenge</h2>
              <div className="challenge-card" style={{ 
                backgroundColor: 'var(--background-light)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)'
              }}>
                <div className="challenge-icon" style={{ 
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--primary-color)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  color: 'white'
                }}>
                  <i className="fas fa-exclamation-triangle fa-lg"></i>
                </div>
                <h3 className="mb-3">{caseStudy.challenge.main}</h3>
                <p className="mb-3">{caseStudy.challenge.details}</p>
                <div className="challenge-impact mb-3">
                  <strong>Business Impact:</strong> {caseStudy.challenge.impact}
                </div>
                <div className="previous-attempts">
                  <strong>Previous Attempts:</strong> {caseStudy.challenge.previous_attempts}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="text-center mb-5">Results & Impact</h2>
          <div className="grid grid-2">
            <div className="results-metrics">
              <h3 className="mb-4">Key Metrics</h3>
              <div className="metrics-grid" style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--spacing-md)'
              }}>
                {caseStudy.results.metrics.map((metric, index) => (
                  <div key={index} className="metric-card" style={{ 
                    backgroundColor: 'white',
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--border-radius-sm)',
                    textAlign: 'center'
                  }}>
                    <div className="metric-value" style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold',
                      color: 'var(--primary-color)'
                    }}>
                      {metric.value}
                    </div>
                    <div className="metric-name">{metric.name}</div>
                    <div className="metric-timeframe" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {metric.timeframe}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonials">
              <h3 className="mb-4">Client Testimonials</h3>
              {caseStudy.results.testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card" style={{ 
                  backgroundColor: 'white',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--border-radius-md)',
                  marginBottom: 'var(--spacing-md)',
                  position: 'relative'
                }}>
                  <div className="quote-mark" style={{ 
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    fontSize: '2rem',
                    color: 'rgba(0,0,0,0.1)',
                    fontFamily: 'serif'
                  }}>"</div>
                  <p style={{ marginTop: 'var(--spacing-sm)' }}>
                    {testimonial.quote}
                  </p>
                  <div className="testimonial-author" style={{ 
                    marginTop: 'var(--spacing-md)',
                    fontWeight: 'bold'
                  }}>
                    {testimonial.author}, {testimonial.position}
                  </div>
                </div>
              ))}
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
          <h2 className="mb-3">Ready to Achieve Similar Results?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Contact us today to discuss how our proven approach can help your business overcome challenges and achieve exceptional results.
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

export default CaseStudySinglePage;
