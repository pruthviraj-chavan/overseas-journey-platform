
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CountriesSection from '@/components/CountriesSection';
import ContactCTA from '@/components/ContactCTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CountriesSection />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
