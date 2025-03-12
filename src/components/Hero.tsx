
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Globe from './Globe';

const Hero = () => {
  const [text, setText] = useState('MBBS in Russia');
  const texts = ['MBBS in Russia', 'Study in UK', 'IELTS Coaching', 'B.Tech Admissions', 'MBA Abroad'];
  
  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setText(texts[currentIndex]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-[5%] w-72 h-72 bg-emprise-pink/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-emprise-gold/5 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink animate-fade-in">
              Premier Education Consultancy in Kolhapur
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Gateway to <span className="text-gradient">Global Education</span>
            </h1>
            
            <div className="h-12">
              <p className="text-lg md:text-xl text-emprise-blue/80 animate-fade-in">
                <span className="font-medium text-emprise-blue">Specializing in:</span> {" "}
                <span key={text} className="inline-block animate-fade-in font-semibold text-emprise-pink">
                  {text}
                </span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 md:gap-6">
              {['Personalized Guidance', 'Visa Assistance', 'Scholarship Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emprise-pink" />
                  <span className="text-emprise-blue/80 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </div>
          </div>
          
          {/* Right Column - Globe Animation */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right mt-4 md:mt-0">
            <div className="w-full max-w-md aspect-square flex items-center justify-center relative">
              <Globe />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
