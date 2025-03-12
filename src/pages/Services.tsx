
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
  // Simplified effect to just scroll to top and remove animations
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      
      <main className="flex-grow">
        <ServicesHero />
        <AllServicesSection />
        <ServiceProcess />
        <CountriesSection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
