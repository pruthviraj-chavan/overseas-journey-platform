
import React, { useEffect, useRef } from 'react';
import { Lightbulb, Target, Users } from 'lucide-react';

const MissionSection = () => {
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
    
    const children = sectionRef.current?.querySelectorAll('.mission-item') || [];
    children.forEach(child => {
      observer.observe(child);
    });
    
    return () => {
      children.forEach(child => {
        observer.unobserve(child);
      });
    };
  }, []);
  
  return (
    <section className="py-16 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-pink opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-blue opacity-5 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4">
            Our Purpose
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Mission & <span className="text-gradient">Vision</span>
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            At Emprise Study Abroad, we're driven by a clear purpose and vision to transform the educational 
            journeys of aspiring students through ethical guidance and personalized support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Lightbulb size={32} className="text-emprise-pink" />,
              title: "Our Mission",
              description: "To empower students with comprehensive guidance and support, helping them navigate international education pathways and realize their full potential on the global stage.",
              delay: 0
            },
            {
              icon: <Target size={32} className="text-emprise-gold" />,
              title: "Our Vision",
              description: "To be the most trusted education consultancy that transforms the academic and career aspirations of Indian students through ethical, transparent, and student-centric services.",
              delay: 200
            },
            {
              icon: <Users size={32} className="text-emprise-blue.light" />,
              title: "Our Values",
              description: "Integrity, excellence, student-centricity, and innovation form the core of our approach. We believe in building lasting relationships based on trust and delivering beyond expectations.",
              delay: 400
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl border border-gray-100 shadow-card opacity-0 mission-item"
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <div className="mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-emprise-blue mb-4">{item.title}</h3>
              
              <p className="text-emprise-blue/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
