
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkingMethod from '../components/WorkingMethod';
import WhoWeServe from '../components/WhoWeServe';
import CaseStudies from '../components/CaseStudies';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Service = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <Navigation />

      <Services />

      <Footer />
    </div>
  );
};

export default Service;
