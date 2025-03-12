
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emprise-blue to-emprise-blue/90 py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-emprise-pink blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-emprise-gold blur-3xl"></div>
      </div>
      
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6 animate-fade-in">
            Our Comprehensive Services
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in animation-delay-200">
            Transform Your <span className="relative">
              <span className="relative z-10">Future</span>
              <span className="absolute bottom-0 left-0 w-full h-[0.6rem] bg-emprise-pink/40 -z-10"></span>
            </span> With Global Education
          </h1>
          
          <p className="text-white/80 text-xl mb-10 animate-fade-in animation-delay-300">
            We offer end-to-end support for your international education journey, 
            from university selection to pre-departure guidance.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in animation-delay-400">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Free Consultation
            </Link>
            
            <a
              href="#services"
              className="bg-transparent text-white border border-white/40 font-medium py-3 px-6 rounded-full hover:bg-white/10 transition-colors"
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
