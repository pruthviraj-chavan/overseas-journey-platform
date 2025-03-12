
import React, { useEffect, useRef } from 'react';
import { MessageSquare, FileSearch, GraduationCap, FileText, Plane, CheckCircle } from 'lucide-react';

const WorkProcessSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
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
    
    const steps = timelineRef.current?.querySelectorAll('.timeline-step') || [];
    steps.forEach(step => {
      observer.observe(step);
    });
    
    return () => {
      steps.forEach(step => {
        observer.unobserve(step);
      });
    };
  }, []);

  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: "Initial Consultation",
      description: "We begin with a one-on-one session to understand your academic background, career aspirations, and preferences.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: <FileSearch size={24} />,
      title: "Profile Assessment",
      description: "Our experts evaluate your profile and identify suitable universities and programs aligned with your goals.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "University Selection",
      description: "We shortlist universities based on your preferences, budget, and career objectives, ensuring the best fit.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <FileText size={24} />,
      title: "Application Process",
      description: "Our team assists with preparing compelling applications, including SOPs, LORs, and other required documents.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Plane size={24} />,
      title: "Visa Guidance",
      description: "We provide comprehensive support for visa application preparation and interview coaching.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Pre-Departure Support",
      description: "From accommodation arrangements to travel tips, we ensure you're fully prepared for your journey abroad.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4">
            Our Process
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            Our streamlined process guides you from your initial inquiry to your successful journey abroad. 
            We're with you every step of the way.
          </p>
        </div>
        
        <div className="relative" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-emprise-pink to-emprise-blue/50 hidden md:block"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`md:grid md:grid-cols-2 md:gap-8 items-center timeline-step opacity-0`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-2'}`}>
                  <div className={`glass-card p-6 rounded-xl border border-gray-100 shadow-card ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <div className={`inline-flex rounded-full p-3 text-white mb-4 bg-gradient-to-br ${step.color}`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-emprise-blue mb-2">{step.title}</h3>
                    
                    <p className="text-emprise-blue/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className={`hidden md:flex md:col-span-1 ${index % 2 === 0 ? 'md:order-2 md:justify-start' : 'md:order-1 md:justify-end'}`}>
                  <div className="relative">
                    <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-emprise-pink z-10`}></div>
                    <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-[-30px]' : 'right-[-30px]'} -translate-y-1/2 w-10 h-1 bg-emprise-pink`}></div>
                  </div>
                </div>
                
                {/* Small screen step number indicator */}
                <div className="flex items-center justify-center md:hidden mb-4">
                  <div className="w-8 h-8 rounded-full bg-emprise-pink text-white flex items-center justify-center font-bold">
                    {index + 1}
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

export default WorkProcessSection;
