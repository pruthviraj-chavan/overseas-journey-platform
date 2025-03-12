
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emprise-blue to-emprise-blue/90 py-16 md:py-20 overflow-hidden">
      {/* Simplified background for better performance */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block rounded-full bg-white/30 px-4 py-1.5 text-sm font-medium text-white mb-3">
            Our Comprehensive Services
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Transform Your <span className="relative">
              <span className="relative z-10">Future</span>
              <span className="absolute bottom-0 left-0 w-full h-[0.6rem] bg-emprise-pink/40 -z-10"></span>
            </span> With Global Education
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-5">
            We offer end-to-end support for your international education journey, 
            from university selection to pre-departure guidance.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Free Consultation
            </Link>
            
            <a
              href="#services"
              className="bg-transparent text-white border border-white/60 font-medium py-3 px-6 rounded-full hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
