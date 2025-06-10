import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * FAQPage Component
 * 
 * FAQ page for the website
 * Implements the structure outlined in the FAQ Page document
 */
const FAQPage = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');
  
  // FAQ categories
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'services', name: 'Products & Services' },
    { id: 'pricing', name: 'Pricing & Packages' },
    { id: 'technical', name: 'Technical Support' },
    { id: 'policies', name: 'Company Policies' }
  ];
  
  // FAQ items
  const faqItems = [
    {
      id: 1,
      category: 'services',
      question: "What services does Rize Digital offer?",
      answer: "Rize Digital offers a comprehensive range of digital services including web development, digital marketing, SEO optimization, content creation, and branding solutions. Each service is tailored to meet your specific business needs and goals. Our team of experts works closely with you to develop strategies that drive results and help your business grow online."
    },
    {
      id: 2,
      category: 'services',
      question: "How long does it take to build a website?",
      answer: "The timeline for website development varies depending on the complexity, features, and scope of the project. A simple informational website might take 2-4 weeks, while a complex e-commerce platform or custom web application could take 8-12 weeks or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements and goals."
    },
    {
      id: 3,
      category: 'services',
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer comprehensive website maintenance services to ensure your site remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, content updates, and technical support. We recommend ongoing maintenance for all websites to protect your investment and ensure continuous improvement."
    },
    {
      id: 4,
      category: 'pricing',
      question: "How much do your services cost?",
      answer: "Our pricing varies based on project scope, complexity, and specific requirements. We offer customized quotes after understanding your needs. For website development, prices typically range from $3,000 for basic sites to $15,000+ for complex e-commerce or custom applications. Digital marketing services usually start at $1,500 per month. Contact us for a free consultation to discuss your project and receive a detailed estimate."
    },
    {
      id: 5,
      category: 'pricing',
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger projects. Typically, we require a 50% deposit to begin work, with the remaining balance due upon project completion. For ongoing services like digital marketing or maintenance, we bill monthly. For larger projects, we can arrange milestone-based payments. We accept credit cards, bank transfers, and checks."
    },
    {
      id: 6,
      category: 'technical',
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All websites we develop are fully responsive and mobile-friendly by default. We use modern development practices to ensure your site looks great and functions perfectly on all devices, including smartphones, tablets, laptops, and desktop computers. Mobile optimization is critical for user experience and search engine rankings, so we prioritize this in every project."
    },
    {
      id: 7,
      category: 'technical',
      question: "Can I update the website content myself?",
      answer: "Yes, we build most of our websites on user-friendly content management systems (CMS) like WordPress that allow you to easily update content without technical knowledge. We provide training and documentation to help you manage your site effectively. For more complex updates or technical changes, our team is always available to assist you."
    },
    {
      id: 8,
      category: 'technical',
      question: "How do you handle website security?",
      answer: "We implement multiple layers of security measures to protect your website, including SSL certificates, secure hosting environments, regular updates, malware scanning, and firewall protection. We follow industry best practices for secure coding and data protection. For e-commerce sites, we ensure PCI compliance for secure payment processing. We also offer ongoing security monitoring as part of our maintenance packages."
    },
    {
      id: 9,
      category: 'policies',
      question: "What is your refund policy?",
      answer: "We're committed to your satisfaction. If you're not happy with our services, please contact us within 14 days of delivery. For fixed-price projects, we offer a satisfaction guarantee and will work with you to address any concerns. For ongoing services, we offer prorated refunds for unused service periods. Custom development work and third-party costs (like domain registration or stock photos) are generally non-refundable once work has begun."
    },
    {
      id: 10,
      category: 'policies',
      question: "Who owns the website after it's completed?",
      answer: "You do! Once the project is completed and final payment is received, you own all rights to the custom elements of your website. We transfer all necessary files and provide access to your hosting and domain accounts. We believe in full transparency and ensuring you have complete ownership of your digital assets. The only exceptions would be third-party elements like stock photos or plugins that have their own licensing terms."
    },
    {
      id: 11,
      category: 'services',
      question: "Do you offer hosting services?",
      answer: "Yes, we offer reliable, high-performance hosting solutions for websites of all sizes. Our hosting packages include regular backups, security monitoring, and technical support. We manage all aspects of hosting so you don't have to worry about technical details. If you prefer to use your own hosting provider, we're happy to work with them as well."
    },
    {
      id: 12,
      category: 'services',
      question: "Can you help improve my website's search engine rankings?",
      answer: "Yes, we offer comprehensive SEO (Search Engine Optimization) services to improve your website's visibility in search engines. Our approach includes technical SEO, content optimization, keyword research, local SEO, and link building strategies. We provide regular reports to track progress and continuously refine our strategies based on performance data and algorithm updates."
    }
  ];
  
  // Filter FAQ items based on search query and active category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };
  
  // FAQ Item component with accordion functionality
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
  
  return (
    <div className="faq-page">
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundColor: 'var(--background-off)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="lead">
            Find answers to common questions about our services, processes, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Search and Categories */}
      <section className="section">
        <div className="container">
          {/* Search Bar */}
          <div className="search-container mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="form-group" style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search for questions..."
                className="form-input"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ paddingLeft: '40px' }}
              />
              <i className="fas fa-search" style={{ 
                position: 'absolute', 
                left: '15px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'var(--secondary-color)'
              }}></i>
            </div>
          </div>
          
          {/* Categories */}
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
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: activeCategory === category.id ? 'var(--primary-color)' : 'var(--background-light)',
                    color: activeCategory === category.id ? 'var(--text-light)' : 'var(--text-dark)',
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
          
          {/* FAQ Items */}
          <div className="faq-container">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map(item => (
                <FAQItem 
                  key={item.id} 
                  question={item.question} 
                  answer={item.answer} 
                />
              ))
            ) : (
              <div className="no-results text-center" style={{ padding: 'var(--spacing-xl)' }}>
                <i className="fas fa-search fa-3x mb-3" style={{ color: 'var(--secondary-color)' }}></i>
                <h3>No matching questions found</h3>
                <p>Try adjusting your search or browse all categories</p>
                <button 
                  className="btn btn-outline mt-3"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Still Have Questions?</h2>
              <p>
                Can't find the answer you're looking for? Our team is here to help.
                Contact us directly and we'll get back to you as soon as possible.
              </p>
              <div className="contact-options mt-4">
                <div className="contact-option mb-3">
                  <i className="fas fa-phone mr-2" style={{ color: 'var(--primary-color)' }}></i>
                  <span><strong>Call us:</strong> (123) 456-7890</span>
                </div>
                <div className="contact-option mb-3">
                  <i className="fas fa-envelope mr-2" style={{ color: 'var(--primary-color)' }}></i>
                  <span><strong>Email us:</strong> support@rizedigital.com</span>
                </div>
                <div className="contact-option mb-3">
                  <i className="fas fa-comment mr-2" style={{ color: 'var(--primary-color)' }}></i>
                  <span><strong>Live chat:</strong> Available Monday-Friday, 9AM-5PM</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary mt-3">Contact Us</Link>
            </div>
            <div className="resources-container">
              <h2>Helpful Resources</h2>
              <p>
                Explore our resources to learn more about our services and how we can help your business grow.
              </p>
              <div className="resources mt-4">
                <div className="resource-item mb-3" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--background-light)',
                  borderRadius: 'var(--border-radius-md)'
                }}>
                  <i className="fas fa-file-alt fa-2x" style={{ color: 'var(--primary-color)' }}></i>
                  <div>
                    <h4 className="mb-1">Service Guide</h4>
                    <p className="mb-0">Detailed information about our services and how they can benefit your business.</p>
                    <a href="#" className="btn btn-sm btn-outline mt-2">Download PDF</a>
                  </div>
                </div>
                <div className="resource-item mb-3" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--background-light)',
                  borderRadius: 'var(--border-radius-md)'
                }}>
                  <i className="fas fa-play-circle fa-2x" style={{ color: 'var(--primary-color)' }}></i>
                  <div>
                    <h4 className="mb-1">Video Tutorials</h4>
                    <p className="mb-0">Watch our tutorial videos to learn how to use our services effectively.</p>
                    <a href="#" className="btn btn-sm btn-outline mt-2">Watch Videos</a>
                  </div>
                </div>
                <div className="resource-item" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  padding: 'var(--spacing-md)',
                  backgroundColor: 'var(--background-light)',
                  borderRadius: 'var(--border-radius-md)'
                }}>
                  <i className="fas fa-book fa-2x" style={{ color: 'var(--primary-color)' }}></i>
                  <div>
                    <h4 className="mb-1">Knowledge Base</h4>
                    <p className="mb-0">Browse our extensive knowledge base for detailed articles and guides.</p>
                    <a href="#" className="btn btn-sm btn-outline mt-2">Explore Articles</a>
                  </div>
                </div>
              </div>
            </div>
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
          <h2 className="mb-3">Ready to Get Started?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Let's discuss how our digital solutions can help your business grow and succeed online.
          </p>
          <Link to="/contact" className="btn" style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-color)',
            fontWeight: 'bold'
          }}>
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
