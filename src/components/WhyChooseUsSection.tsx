
import React, { useEffect, useRef } from 'react';
import { Award, Globe, Users, BookOpen, Briefcase, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhyChooseUsSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    
    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      icon: <Users size={24} />,
      title: "Expert Guidance",
      description: "Our team of experienced counselors provides expert guidance on university admissions and visa processes.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: <Award size={24} />,
      title: "1000+ Successful Placements",
      description: "We've helped over a thousand students successfully achieve their dream of studying abroad.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Personalized Counseling",
      description: "We believe in a student-first approach, offering tailored guidance based on individual aspirations.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Globe size={24} />,
      title: "Global University Network",
      description: "We maintain strong partnerships with top universities worldwide to offer you the best options.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Briefcase size={24} />,
      title: "End-to-End Support",
      description: "From application to departure, we provide comprehensive assistance at every step of your journey.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Ongoing Communication",
      description: "We maintain open channels of communication, keeping you updated throughout the process.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-pink opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-gold opacity-5 blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4">
            Why Choose Us
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            The <span className="text-gradient">Emprise</span> Advantage
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            At Emprise Study Abroad, we combine expertise, personalization, and dedication to ensure 
            your international education journey is seamless and successful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsRef}>
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6 rounded-xl border border-gray-100 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 benefit-card opacity-0",
                index % 2 === 0 ? "bg-white" : "glass-card"
              )}
            >
              <div className={`inline-flex rounded-lg p-3 text-white mb-4 bg-gradient-to-br ${benefit.color}`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-emprise-blue mb-3">{benefit.title}</h3>
              
              <p className="text-emprise-blue/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
