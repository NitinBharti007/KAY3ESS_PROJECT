import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SlidingBanner from './components/SlidingBanner';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <SlidingBanner />
            <ServicesSection />
            <ProjectsSection />
            <ClientLogos />
            <Testimonials />
            <WhatsAppButton />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
