
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import AllServicesSection from '@/components/AllServicesSection';
import CountriesSection from '@/components/CountriesSection';
import ServiceProcess from '@/components/ServiceProcess';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactCTA from '@/components/ContactCTA';

const Services = () => {
  // Scroll to top on page load and set up animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simplified IntersectionObserver configuration for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Immediately observe sections instead of using setTimeout
    document.querySelectorAll('.animate-on-scroll').forEach(section => {
      section.classList.remove('opacity-0');
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      
      <main className="flex-grow">
        <ServicesHero />
        <div className="animate-on-scroll">
          <AllServicesSection />
        </div>
        <div className="animate-on-scroll">
          <ServiceProcess />
        </div>
        <div className="animate-on-scroll">
          <CountriesSection />
        </div>
        <div className="animate-on-scroll">
          <TestimonialsSection />
        </div>
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
