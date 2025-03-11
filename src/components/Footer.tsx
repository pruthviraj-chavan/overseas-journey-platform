
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emprise-blue text-white overflow-hidden">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl text-emprise-pink">Emprise</span>
              <span className="font-semibold text-white">Study Abroad</span>
            </div>
            
            <p className="text-white/70 mb-6">
              Emprise Study Abroad is a premier education consultancy specializing in guiding students 
              toward global educational opportunities with personalized support at every step.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-emprise-pink rounded-full"></span>
            </h3>
            
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '/' },
                { name: 'Terms of Service', path: '/' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Study Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Study Destinations
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-emprise-pink rounded-full"></span>
            </h3>
            
            <ul className="space-y-3">
              {[
                'Study in Russia',
                'Study in UK',
                'Study in Germany',
                'Study in Canada',
                'Study in Australia',
                'Study in USA'
              ].map((destination, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-emprise-pink rounded-full"></span>
            </h3>
            
            <ul className="space-y-4">
              <li>
                <div className="flex items-start space-x-3">
                  <Phone size={18} className="text-emprise-pink mt-1" />
                  <div>
                    <p className="text-white/70">Phone</p>
                    <a href="tel:+918788312094" className="text-white hover:text-emprise-pink transition-colors">
                      +91 8788312094
                    </a>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start space-x-3">
                  <Mail size={18} className="text-emprise-pink mt-1" />
                  <div>
                    <p className="text-white/70">Email</p>
                    <a href="mailto:info@emprisestudy.com" className="text-white hover:text-emprise-pink transition-colors">
                      info@emprisestudy.com
                    </a>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-emprise-pink mt-1" />
                  <div>
                    <p className="text-white/70">Address</p>
                    <address className="text-white not-italic">
                      Emprise Study Abroad,<br />
                      Kolhapur, Maharashtra,<br />
                      India
                    </address>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Emprise Study Abroad. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
            <a href="/" className="text-white/60 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
