
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
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add IntersectionObserver for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Once the animation is added, we don't need to observe this element anymore
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    // Observe all sections that should animate
    const animateSections = document.querySelectorAll('.animate-on-scroll');
    animateSections.forEach(section => {
      section.classList.remove('animate-fade-in');
      observer.observe(section);
    });
    
    return () => {
      // Clean up the observer
      animateSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      
      <main className="flex-grow">
        <ServicesHero />
        <div className="animate-on-scroll opacity-0">
          <AllServicesSection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <ServiceProcess />
        </div>
        <div className="animate-on-scroll opacity-0">
          <CountriesSection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <TestimonialsSection />
        </div>
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
