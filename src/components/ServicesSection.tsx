
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, FileText, Plane, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'mbbs',
    title: 'MBBS in Russia',
    icon: <GraduationCap size={24} />,
    description: 'Comprehensive guidance for medical studies in top Russian universities with quality education at affordable costs.',
    color: 'from-rose-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 'btech',
    title: 'B.Tech & MBA Admissions',
    icon: <FileText size={24} />,
    description: 'Strategic application support for engineering and business programs at prestigious international institutions.',
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 'visa',
    title: 'Visa & Scholarship Assistance',
    icon: <Plane size={24} />,
    description: 'Expert guidance through complex visa processes and access to scholarship opportunities for financial support.',
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 'ielts',
    title: 'IELTS Exam Coaching',
    icon: <MessageSquare size={24} />,
    description: 'Specialized training programs for language proficiency tests with proven techniques and practice materials.',
    color: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="section-padding bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4">
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Comprehensive <span className="text-gradient">Study Abroad</span> Solutions
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            From university selection and application to visa processing and pre-departure guidance,
            we offer end-to-end support for your international education journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Navigation Sidebar */}
          <div className="space-y-4">
            {services.map((service) => (
              <div 
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "glass-card p-4 cursor-pointer transition-all duration-300 hover:shadow-lg",
                  activeService === service.id 
                    ? "border-l-4 border-emprise-pink translate-x-1" 
                    : "border-l-4 border-transparent"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "rounded-lg p-2 text-white",
                    `bg-gradient-to-br ${service.color}`
                  )}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-emprise-blue">{service.title}</h3>
                    <p className="text-sm text-emprise-blue/70 line-clamp-2">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <Link 
              to="/services" 
              className="block w-full text-center p-3 bg-white border border-emprise-pink/20 rounded-xl text-emprise-pink font-medium hover:bg-emprise-pink/5 transition-colors"
            >
              View All Services
            </Link>
          </div>
          
          {/* Service Details */}
          <div className="lg:col-span-2">
            {services.map((service) => (
              <div 
                key={service.id}
                className={cn(
                  "bg-white rounded-2xl p-6 shadow-card border border-gray-100 transition-all duration-500",
                  activeService === service.id 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 absolute -translate-y-8 pointer-events-none"
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={cn(
                      "inline-flex rounded-lg p-2 text-white mb-4",
                      `bg-gradient-to-br ${service.color}`
                    )}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-emprise-blue mb-4">{service.title}</h3>
                    
                    <p className="text-emprise-blue/80 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {[
                        'Personalized Counseling Sessions',
                        'Complete Documentation Support',
                        'Pre-Departure Guidance'
                      ].map((point, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emprise-pink"></div>
                          <span className="text-sm text-emprise-blue/80">{point}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-emprise-pink font-medium hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                  
                  <div className="relative">
                    <div className="rounded-xl overflow-hidden aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Link 
                        to="/contact" 
                        className="bg-white py-2 px-4 rounded-full shadow-lg text-sm font-medium text-emprise-pink hover:bg-emprise-pink hover:text-white transition-colors"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
