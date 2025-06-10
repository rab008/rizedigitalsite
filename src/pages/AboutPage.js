import React from 'react';
import { Link } from 'react-router-dom';

/**
 * AboutPage Component
 * 
 * About Us page for the website
 * Implements the structure outlined in the About Us Page document
 */
const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header" style={{ 
        backgroundColor: 'var(--background-off)',
        padding: 'var(--spacing-xxl) 0'
      }}>
        <div className="container">
          <h1>About Rize Digital</h1>
          <p className="lead">
            We're a team of digital experts passionate about helping businesses succeed online.
          </p>
        </div>
      </section>

      {/* Company Overview/Introduction */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Company Overview</h2>
              <p className="mb-3">
                <strong>Our Mission:</strong> To empower businesses with innovative digital solutions that drive growth, increase efficiency, and deliver measurable results.
              </p>
              <p>
                Founded in 2015, Rize Digital has been at the forefront of digital innovation, helping businesses of all sizes establish and grow their online presence. Over the years, we've expanded our services to meet the evolving needs of our clients, always staying ahead of industry trends and technologies.
              </p>
              <p>
                We solve the core challenge of digital presence and growth for small to medium-sized businesses who struggle to navigate the complex digital landscape on their own.
              </p>
              <p>
                Our services are tailored for businesses in retail, professional services, healthcare, and technology sectors who want to increase their online visibility, generate more leads, and improve customer engagement.
              </p>
              <p>
                What sets us apart is our data-driven approach, transparent communication, and commitment to delivering measurable results that directly impact our clients' bottom line.
              </p>
              <div className="stats-container mt-4 grid grid-3">
                <div className="stat-item text-center">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Clients Served</div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item text-center">
                  <div className="stat-number">7+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div style={{ 
              background: 'var(--primary-light)', 
              height: '400px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <span style={{ color: 'white' }}>Company Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story/Origin */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div style={{ 
              background: 'var(--background-light)', 
              height: '400px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 'var(--border-radius-md)'
            }}>
              <span style={{ color: 'var(--secondary-color)' }}>Founder Image</span>
            </div>
            <div>
              <h2>Our Founder's Story</h2>
              <p>
                The journey of Rize Digital began when our founder, Michael Chen, experienced firsthand the challenges small businesses face in the digital world. After helping his family's restaurant establish an online presence that increased their revenue by 40%, he realized his passion for digital marketing and web development.
              </p>
              <p>
                "I saw how transformative a strong digital strategy could be for a small business, but also how inaccessible expert guidance was for many entrepreneurs," Michael recalls. "That's when I decided to build a company that would make professional digital services accessible to businesses of all sizes."
              </p>
              <p>
                Starting with just three clients in 2015, Michael built Rize Digital on the principles of transparency, measurable results, and genuine partnership with clients. The early days were challenging, working from a small home office and handling everything from web development to client meetings.
              </p>
              <p>
                The turning point came in 2017 when one of our e-commerce clients saw a 300% increase in sales after implementing our comprehensive digital strategy. This success story attracted attention and helped establish Rize Digital as a trusted name in the industry.
              </p>
              <blockquote className="mt-4">
                "Our mission isn't just to build websites or run campaigns—it's to be a true partner in our clients' success and help them achieve their business goals through effective digital strategies."
                <footer>— Michael Chen, Founder & CEO</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our diverse team of experts brings together decades of experience in digital marketing, web development, design, and business strategy.
          </p>
          
          <div className="grid grid-3">
            {/* Team Member 1 */}
            <div className="card">
              <div style={{ 
                background: 'var(--secondary-color)', 
                height: '300px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 'var(--border-radius-md) var(--border-radius-md) 0 0'
              }}>
                <span style={{ color: 'white' }}>Team Member Photo</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">Michael Chen</h3>
                <p className="mb-1"><strong>Founder & CEO</strong></p>
                <p className="card-text">
                  With over 15 years of experience in digital marketing and business development, Michael leads our strategic vision and client relationships.
                </p>
                <p className="mb-2">
                  <small>MBA, Digital Marketing Certified, Former Google Consultant</small>
                </p>
                <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="card">
              <div style={{ 
                background: 'var(--secondary-color)', 
                height: '300px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 'var(--border-radius-md) var(--border-radius-md) 0 0'
              }}>
                <span style={{ color: 'white' }}>Team Member Photo</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">Sarah Johnson</h3>
                <p className="mb-1"><strong>Creative Director</strong></p>
                <p className="card-text">
                  Sarah brings 10+ years of design experience, creating stunning visual identities and user experiences for our clients.
                </p>
                <p className="mb-2">
                  <small>BFA in Design, Adobe Certified Expert, Former Agency Art Director</small>
                </p>
                <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="card">
              <div style={{ 
                background: 'var(--secondary-color)', 
                height: '300px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: 'var(--border-radius-md) var(--border-radius-md) 0 0'
              }}>
                <span style={{ color: 'white' }}>Team Member Photo</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">David Rodriguez</h3>
                <p className="mb-1"><strong>Technical Director</strong></p>
                <p className="card-text">
                  David leads our development team with 12+ years of experience building scalable, high-performance websites and applications.
                </p>
                <p className="mb-2">
                  <small>MS in Computer Science, Full-Stack Developer, AWS Certified</small>
                </p>
                <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <button className="btn btn-outline">View Full Team</button>
          </div>
        </div>
      </section>

      {/* Company Mission and Vision */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-light)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Our Mission</h2>
              <p className="mb-4">
                To empower businesses with innovative digital solutions that drive growth, increase efficiency, and deliver measurable results. We believe that every business, regardless of size, deserves access to high-quality digital services that can transform their online presence and help them connect with their ideal customers.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To become the most trusted digital partner for businesses worldwide, known for our expertise, integrity, and the measurable impact we create for our clients. We envision a future where businesses of all sizes can harness the full potential of digital technologies to achieve their goals and make a positive impact in their industries.
              </p>
            </div>
            <div>
              <div style={{ 
                background: 'rgba(255,255,255,0.1)', 
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--border-radius-md)',
                height: '100%'
              }}>
                <h3 className="mb-3">How Our Mission Benefits You</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li className="mb-3">
                    <i className="fas fa-check-circle mr-2"></i> 
                    <strong>Data-Driven Approach:</strong> We base our strategies on solid data and analytics, not guesswork.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle mr-2"></i> 
                    <strong>Transparent Communication:</strong> You'll always know exactly what we're doing and why.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle mr-2"></i> 
                    <strong>Measurable Results:</strong> We focus on metrics that matter to your business growth.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle mr-2"></i> 
                    <strong>Long-term Partnership:</strong> We're invested in your long-term success, not just quick wins.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle mr-2"></i> 
                    <strong>Industry Expertise:</strong> Our specialized knowledge in your industry drives better results.
                  </li>
                </ul>
                
                <div className="testimonial mt-4">
                  <blockquote>
                    "Rize Digital truly lives their mission. They've been an invaluable partner in our growth, helping us increase our online sales by 200% in just one year."
                  </blockquote>
                  <div className="testimonial-author">
                    <strong>Robert Miller</strong><br />
                    CEO, GreenTech Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values and Culture */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These principles guide everything we do and define how we work with our clients and each other.
          </p>
          
          <div className="grid grid-3">
            {/* Value 1 */}
            <div className="card">
              <div className="card-content text-center">
                <i className="fas fa-handshake fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
                <h3 className="card-title">Integrity</h3>
                <p className="card-text">
                  We believe in complete transparency and honesty in all our client relationships. We only recommend solutions that we truly believe will benefit your business.
                </p>
                <p>
                  <strong>How this benefits you:</strong> You'll always receive honest advice and realistic expectations about what we can achieve together.
                </p>
              </div>
            </div>
            
            {/* Value 2 */}
            <div className="card">
              <div className="card-content text-center">
                <i className="fas fa-chart-line fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
                <h3 className="card-title">Results-Driven</h3>
                <p className="card-text">
                  We focus on delivering measurable outcomes that directly impact your business goals, not just activities or vanity metrics.
                </p>
                <p>
                  <strong>How this benefits you:</strong> Every dollar you invest with us is tied to specific, measurable business results that matter to your bottom line.
                </p>
              </div>
            </div>
            
            {/* Value 3 */}
            <div className="card">
              <div className="card-content text-center">
                <i className="fas fa-lightbulb fa-3x mb-3" style={{ color: 'var(--primary-color)' }}></i>
                <h3 className="card-title">Innovation</h3>
                <p className="card-text">
                  We continuously explore new technologies and strategies to keep our clients ahead of the curve in the ever-evolving digital landscape.
                </p>
                <p>
                  <strong>How this benefits you:</strong> You gain access to cutting-edge digital solutions without having to navigate the complexities yourself.
                </p>
              </div>
            </div>
          </div>
          
          {/* Company Culture */}
          <div className="culture-section mt-5">
            <h3 className="text-center mb-4">Our Company Culture</h3>
            <div className="grid grid-2">
              <div>
                <p>
                  At Rize Digital, we foster a culture of collaboration, continuous learning, and work-life balance. We believe that happy, engaged team members deliver the best results for our clients.
                </p>
                <p>
                  Our team enjoys flexible working arrangements, regular professional development opportunities, and a supportive environment where everyone's ideas are valued.
                </p>
                <p>
                  We celebrate diversity and believe that different perspectives lead to better solutions. Our team members come from various backgrounds, bringing unique insights to every project.
                </p>
                <div className="employee-testimonial mt-4" style={{ 
                  background: 'var(--background-off)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)'
                }}>
                  <blockquote>
                    "Working at Rize Digital has been the highlight of my career. The collaborative environment, focus on continuous learning, and genuine care for both employees and clients make this a truly special place to work."
                  </blockquote>
                  <div className="testimonial-author">
                    <strong>Jennifer Lee</strong><br />
                    Digital Marketing Specialist, 3 years at Rize Digital
                  </div>
                </div>
              </div>
              <div className="culture-images">
                <div className="grid grid-2" style={{ gap: 'var(--spacing-sm)' }}>
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} style={{ 
                      background: 'var(--secondary-color)', 
                      height: '150px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      borderRadius: 'var(--border-radius-sm)'
                    }}>
                      <span style={{ color: 'white' }}>Team Photo {num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline/Milestones */}
      <section className="section" style={{ backgroundColor: 'var(--background-off)' }}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">
            From humble beginnings to industry leadership, here's how we've grown over the years.
          </p>
          
          <div className="timeline">
            {/* 2015 */}
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Founded in San Francisco</h3>
                <p>Michael Chen establishes Rize Digital with a focus on helping small businesses improve their online presence.</p>
                <ul>
                  <li>First 3 clients onboarded</li>
                  <li>Initial team of 2 people</li>
                </ul>
              </div>
            </div>
            
            {/* 2017 */}
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>Major Growth Milestone</h3>
                <p>Breakthrough case study with e-commerce client leads to rapid expansion.</p>
                <ul>
                  <li>Team grows to 10 employees</li>
                  <li>Office expansion</li>
                  <li>50th client milestone</li>
                </ul>
              </div>
            </div>
            
            {/* 2019 */}
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>Service Expansion</h3>
                <p>Launch of comprehensive digital marketing services and custom application development.</p>
                <ul>
                  <li>Team grows to 25 employees</li>
                  <li>New headquarters</li>
                  <li>First industry award for client work</li>
                </ul>
              </div>
            </div>
            
            {/* 2021 */}
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>National Recognition</h3>
                <p>Named one of the "Top Digital Agencies to Watch" by Industry Magazine.</p>
                <ul>
                  <li>Team grows to 40 employees</li>
                  <li>250th client milestone</li>
                  <li>Launch of client success program</li>
                </ul>
              </div>
            </div>
            
            {/* 2023 */}
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>International Expansion</h3>
                <p>Opening of our first international office to serve clients globally.</p>
                <ul>
                  <li>Team grows to 60+ employees</li>
                  <li>500th client milestone</li>
                  <li>Launch of proprietary analytics platform</li>
                </ul>
              </div>
            </div>
            
            {/* 2025 */}
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Looking Forward</h3>
                <p>Continuing to innovate and expand our services to meet the evolving needs of our clients.</p>
                <ul>
                  <li>AI-powered marketing solutions</li>
                  <li>Expanded global presence</li>
                  <li>Industry-specific service packages</li>
                </ul>
              </div>
            </div>
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
          <h2 className="mb-3">Ready to Work With Us?</h2>
          <p className="mb-4" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-lg)' }}>
            Let's discuss how our team can help your business achieve its digital goals and drive measurable results.
          </p>
          <Link to="/contact" className="btn" style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-color)',
            fontWeight: 'bold'
          }}>
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
