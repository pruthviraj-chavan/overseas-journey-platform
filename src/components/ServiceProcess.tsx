
import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceProcess = () => {
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const steps = processRef.current?.querySelectorAll('.process-step');
          steps?.forEach((step, index) => {
            // Faster animation with 70ms delay between steps
            setTimeout(() => {
              step.classList.add('animate-fade-in');
            }, index * 70);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const process = [
    {
      step: "1",
      title: "Get in Touch",
      description: "Schedule an initial consultation with our expert counselors either in-person or online.",
    },
    {
      step: "2",
      title: "Profile Assessment",
      description: "We evaluate your academic background, goals, and preferences to create a personalized plan.",
    },
    {
      step: "3",
      title: "University & Course Selection",
      description: "Based on your profile, we recommend universities and programs that align with your aspirations.",
    },
    {
      step: "4",
      title: "Application Submission",
      description: "We assist with preparing and submitting strong applications to chosen universities.",
    },
    {
      step: "5",
      title: "Visa Process",
      description: "After receiving acceptance, we guide you through the complete visa application process.",
    },
    {
      step: "6",
      title: "Pre-Departure Guidance",
      description: "We prepare you for your journey with essential information about your destination.",
    }
  ];

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-3">
            Our Process
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Simple <span className="text-gradient">Step-by-Step</span> Journey
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            We've streamlined the study abroad process to make your journey smooth and stress-free,
            with expert guidance at every stage.
          </p>
        </div>
        
        <div ref={processRef} className="relative">
          {/* Process Cards - Simplified grid for better performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "glass-card p-5 rounded-xl border border-gray-100 shadow-card process-step opacity-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  index % 2 === 0 ? "bg-white" : "glass-card"
                )}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-pink text-white flex items-center justify-center font-bold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emprise-blue mb-2">{step.title}</h3>
                    <p className="text-emprise-blue/70">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Success Section */}
          <div className="text-center mt-12 p-6 rounded-2xl bg-gradient-to-r from-emprise-pink to-emprise-pink/90 text-white shadow-xl">
            <CheckCircle size={36} className="mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-3">Begin Your Global Education Journey</h3>
            <p className="mb-5 max-w-2xl mx-auto">
              Ready to transform your academic and career aspirations? Our team of experts is here to guide you every step of the way.
            </p>
            <a 
              href="https://wa.me/918788312094" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-emprise-pink px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
            >
              Chat with Us on WhatsApp
            </a>
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

export default ServiceProcess;
