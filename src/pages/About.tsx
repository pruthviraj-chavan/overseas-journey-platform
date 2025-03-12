
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FounderSection from '@/components/FounderSection';
import MissionSection from '@/components/MissionSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactCTA from '@/components/ContactCTA';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-emprise-pink to-emprise-pink/90 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
          
          <div className="container mx-auto container-padding relative z-10">
            <div className="text-center">
              <h1 className="text-white mb-4 animate-fade-in">About Emprise Study Abroad</h1>
              <p className="text-white/90 max-w-3xl mx-auto text-xl md:text-2xl animate-fade-in animation-delay-200">
                Your dedicated partner for transforming educational aspirations into international success stories.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4 animate-fade-in">
                Our Story
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in animation-delay-200">
                Guiding Dreams Towards <span className="text-gradient">Global Opportunities</span>
              </h2>
              
              <p className="text-emprise-blue/80 text-lg mb-8 animate-fade-in animation-delay-300">
                Established in 2021, Emprise Study Abroad in Shahupuri, Kolhapur, is a leading 
                Overseas Education Consultancy helping students achieve their dream of studying abroad.
                With a commitment to excellence and personalized guidance, we've successfully placed 
                over 1000 students in prestigious universities worldwide.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: "1000+", label: "Successful Placements" },
                  { number: "50+", label: "Partner Universities" },
                  { number: "5+", label: "Years of Experience" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl shadow-card animate-fade-in animation-delay-400" style={{ animationDelay: `${400 + (index * 100)}ms` }}>
                    <h3 className="text-3xl md:text-4xl font-bold text-emprise-pink mb-2">{stat.number}</h3>
                    <p className="text-emprise-blue/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <FounderSection />
        <WhyChooseUsSection />
        <MissionSection />
        <WorkProcessSection />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
