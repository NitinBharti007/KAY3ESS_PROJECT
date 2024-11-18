import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <SlidingBanner/>
            <ServicesSection />
            <ProjectsSection />
            <ClientLogos />
            <Testimonials />
            <Footer />
            <WhatsAppButton />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
