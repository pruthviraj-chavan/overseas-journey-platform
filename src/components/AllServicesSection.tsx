
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { GraduationCap, Globe, FileText, Plane, MessageSquare, BookOpen, Award } from 'lucide-react';

const services = [
  {
    id: 'counseling',
    title: 'Career Counseling',
    icon: <BookOpen size={24} />,
    description: 'Personalized study abroad planning based on your academic background, interests, and career aspirations.',
    color: 'from-rose-500 to-pink-600',
    details: [
      'One-on-one sessions with expert counselors',
      'Assessment of academic & career goals',
      'Customized study abroad roadmap',
      'Course & country selection guidance'
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'university',
    title: 'University Selection',
    icon: <GraduationCap size={24} />,
    description: 'Finding the right fit for your goals from our network of partner universities worldwide.',
    color: 'from-blue-500 to-indigo-600',
    details: [
      'Comprehensive university profiles',
      'Course comparison across institutions',
      'Budget-aligned university options',
      'Application success probability assessment'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'application',
    title: 'Application Assistance',
    icon: <FileText size={24} />,
    description: 'Comprehensive support for SOPs, LORs, and all documentation required for successful applications.',
    color: 'from-amber-500 to-orange-600',
    details: [
      'SOP & LOR drafting and review',
      'Resume building for applications',
      'Application form completion',
      'Document verification & submission'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'visa',
    title: 'Visa Guidance',
    icon: <Plane size={24} />,
    description: 'End-to-end support for visa applications and interviews to ensure a smooth approval process.',
    color: 'from-emerald-500 to-teal-600',
    details: [
      'Country-specific visa requirements',
      'Documentation preparation',
      'Visa application filing',
      'Mock interview preparation'
    ],
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'scholarship',
    title: 'Scholarship Assistance',
    icon: <Award size={24} />,
    description: 'Information and application support for securing fully-funded scholarships and financial aid.',
    color: 'from-purple-500 to-violet-600',
    details: [
      'Scholarship database access',
      'Eligibility assessment',
      'Application assistance',
      'Scholarship essay guidance'
    ],
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 'ielts',
    title: 'IELTS/TOEFL Coaching',
    icon: <MessageSquare size={24} />,
    description: 'Comprehensive training programs to help you achieve your target scores in English proficiency tests.',
    color: 'from-cyan-500 to-blue-600',
    details: [
      'Expert language trainers',
      'Practice tests & materials',
      'One-on-one speaking sessions',
      'Test-taking strategies'
    ],
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: 'loan',
    title: 'Education Loan Support',
    icon: <Globe size={24} />,
    description: 'Assistance with education loan applications and connecting you with the right financial institutions.',
    color: 'from-pink-500 to-rose-600',
    details: [
      'Bank partnership network',
      'Loan eligibility assessment',
      'Documentation support',
      'Collateral guidance'
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  }
];

const AllServicesSection = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-white relative" ref={sectionRef}>
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4">
            Our Services
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Comprehensive <span className="text-gradient">Study Abroad</span> Solutions
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            From career counseling to pre-departure guidance, we offer a complete range of services
            to ensure your international education journey is successful.
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
              to="/contact" 
              className="block w-full text-center p-3 bg-white border border-emprise-pink/20 rounded-xl text-emprise-pink font-medium hover:bg-emprise-pink/5 transition-colors"
            >
              Get a Free Consultation
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
                      {service.details.map((point, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emprise-pink"></div>
                          <span className="text-sm text-emprise-blue/80">{point}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to="/contact"
                      className="inline-flex items-center gap-2 btn-primary"
                    >
                      Enquire Now
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
                      <a 
                        href="https://wa.me/918788312094" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white py-2 px-4 rounded-full shadow-lg text-sm font-medium text-emprise-pink hover:bg-emprise-pink hover:text-white transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
