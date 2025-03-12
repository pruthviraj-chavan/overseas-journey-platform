
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Clock, Mail, Phone, MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navigation />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-emprise-pink to-emprise-pink/90 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
          
          <div className="container mx-auto container-padding relative z-10">
            <div className="text-center">
              <h1 className="text-white mb-4 animate-fade-in">Get in Touch</h1>
              <p className="text-white/90 max-w-3xl mx-auto text-xl md:text-2xl animate-fade-in animation-delay-200">
                We're here to answer your questions and help you start your global education journey.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information and Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div className="space-y-8">
                <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4 animate-fade-in">
                  Contact Us
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 animate-fade-in animation-delay-200">
                  Start Your <span className="text-gradient">Global Education</span> Journey Today
                </h2>
                
                <p className="text-emprise-blue/80 leading-relaxed mb-8 animate-fade-in animation-delay-300">
                  Whether you have questions about study programs, visa processes, or just want to know more about studying abroad, 
                  our expert counselors are ready to guide you. Reach out to us through any of the following channels:
                </p>
                
                <div className="space-y-6 animate-fade-in animation-delay-400">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-emprise-pink/10 p-3">
                      <MapPin className="text-emprise-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-emprise-blue">Office Location</h3>
                      <p className="text-emprise-blue/70">Emprise Study Abroad, Shahupuri, Kolhapur, Maharashtra, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-emprise-pink/10 p-3">
                      <Clock className="text-emprise-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-emprise-blue">Business Hours</h3>
                      <p className="text-emprise-blue/70">Monday - Saturday: 09:00 AM – 07:00 PM</p>
                      <p className="text-emprise-blue/70">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-emprise-pink/10 p-3">
                      <Mail className="text-emprise-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-emprise-blue">Email Us</h3>
                      <a href="mailto:info@empriseabroad.com" className="text-emprise-blue/70 hover:text-emprise-pink transition-colors">
                        info@empriseabroad.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-emprise-pink/10 p-3">
                      <Phone className="text-emprise-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-emprise-blue">Call Us</h3>
                      <a href="tel:+918788312094" className="text-emprise-blue/70 hover:text-emprise-pink transition-colors">
                        +91 8788312094
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-emprise-pink/10 p-3">
                      <MessageSquare className="text-emprise-pink" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-emprise-blue">WhatsApp</h3>
                      <a 
                        href="https://wa.me/918788312094" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emprise-blue/70 hover:text-emprise-pink transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Google Map */}
                <div className="rounded-xl overflow-hidden shadow-card mt-8 h-[300px] animate-fade-in animation-delay-500">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30664.794792789703!2d74.21958082418013!3d16.7065852630742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sShahupuri%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1663329178261!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              {/* Right Column - Contact Form */}
              <div className="animate-fade-in animation-delay-300">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
