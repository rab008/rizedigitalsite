import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceArchivePage from './pages/ServiceArchivePage';
import ServiceSinglePage from './pages/ServiceSinglePage';
import ServiceAreaArchivePage from './pages/ServiceAreaArchivePage';
import ServiceAreaSinglePage from './pages/ServiceAreaSinglePage';
import CaseStudyArchivePage from './pages/CaseStudyArchivePage';
import CaseStudySinglePage from './pages/CaseStudySinglePage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Main App component
 * Sets up the routing structure for the entire application
 * Includes the Header and Footer components on all pages
 */
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServiceArchivePage />} />
          <Route path="/services/:serviceId" element={<ServiceSinglePage />} />
          <Route path="/service-areas" element={<ServiceAreaArchivePage />} />
          <Route path="/service-areas/:areaId" element={<ServiceAreaSinglePage />} />
          <Route path="/case-studies" element={<CaseStudyArchivePage />} />
          <Route path="/case-studies/:caseId" element={<CaseStudySinglePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
