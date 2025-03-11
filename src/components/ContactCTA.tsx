
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-pink opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-gold opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto container-padding">
        <div className="bg-gradient-to-r from-emprise-pink to-emprise-pink/90 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - CTA Text */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Begin Your Global Education Journey?
              </h2>
              
              <p className="text-white/90 mb-8 text-lg">
                Get personalized guidance from our expert counselors to find the perfect 
                international study program tailored to your academic goals and preferences.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Free initial consultation',
                  'Customized university recommendations',
                  'Complete application assistance',
                  'Visa guidance and support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-white" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-emprise-pink px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]"
              >
                Book Free Consultation <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            {/* Right Column - Quick Contact Details */}
            <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Call Us</h4>
                    <p className="text-white/90">+91 8788312094</p>
                    <a 
                      href="tel:+918788312094" 
                      className="inline-block mt-1 text-white/80 hover:text-white underline text-sm"
                    >
                      Tap to call
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email Us</h4>
                    <p className="text-white/90">info@emprisestudy.com</p>
                    <a 
                      href="mailto:info@emprisestudy.com" 
                      className="inline-block mt-1 text-white/80 hover:text-white underline text-sm"
                    >
                      Send an email
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Visit Us</h4>
                    <p className="text-white/90">Emprise Study Abroad, Kolhapur, Maharashtra, India</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-1 text-white/80 hover:text-white underline text-sm"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
