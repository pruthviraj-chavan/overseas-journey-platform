
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    program: 'MBBS, Russia',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    quote: 'Emprise made my dream of studying medicine abroad a reality. Their counselors guided me through every step of the application process, and I\'m now pursuing my MBBS at a top Russian university.',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Patel',
    program: 'MBA, UK',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    quote: 'The team at Emprise provided exceptional support for my MBA application. Their expertise in UK university admissions and visa procedures was invaluable. Highly recommended!',
    rating: 5
  },
  {
    id: 3,
    name: 'Aishwarya Singh',
    program: 'B.Tech, Germany',
    image: 'https://images.unsplash.com/photo-1573497019236-61f323342eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    quote: 'From IELTS coaching to securing a scholarship, Emprise handled everything professionally. Their personalized approach made my engineering study abroad journey smooth and stress-free.',
    rating: 4
  },
  {
    id: 4,
    name: 'Vikram Desai',
    program: 'IELTS Preparation',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    quote: 'The IELTS coaching at Emprise was excellent. The instructors provided targeted strategies that helped me achieve my target band score. Their approach is practical and effective.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
    
    // Reset autoplay after user interaction
    setTimeout(() => {
      setIsAutoplay(true);
    }, 5000);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay]);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emprise-pink/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emprise-gold/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4">
            Success Stories
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            What Our <span className="text-gradient">Students</span> Say
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            Read about the experiences of students who achieved their international education
            goals with Emprise Study Abroad's guidance and support.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-card p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-lg">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                            <Quote size={16} className="text-emprise-pink" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, index) => (
                            <Star 
                              key={index}
                              size={16} 
                              className={index < testimonial.rating ? "text-emprise-gold fill-emprise-gold" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-emprise-blue/90 text-lg md:text-xl italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <h4 className="font-semibold text-emprise-blue">{testimonial.name}</h4>
                          <p className="text-sm text-emprise-blue/70">{testimonial.program}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-5 bg-white rounded-full p-2 shadow-lg text-emprise-blue hover:text-emprise-pink transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-5 bg-white rounded-full p-2 shadow-lg text-emprise-blue hover:text-emprise-pink transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === activeIndex 
                    ? "w-8 bg-emprise-pink" 
                    : "w-2 bg-emprise-pink/30 hover:bg-emprise-pink/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
