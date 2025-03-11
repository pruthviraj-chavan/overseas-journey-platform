
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 z-50"
          >
            <span className="font-bold text-2xl text-emprise-pink">Emprise</span>
            <span className="font-semibold text-emprise-blue">Study Abroad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "font-medium transition-all hover:text-emprise-pink relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-emprise-pink after:transition-all hover:after:w-full",
                  location.pathname === item.path 
                    ? "text-emprise-pink after:w-full" 
                    : "text-emprise-blue/90"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-emprise-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white md:hidden transition-all duration-300 transform",
          isOpen 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-xl font-medium transition-all",
                location.pathname === item.path 
                  ? "text-emprise-pink" 
                  : "text-emprise-blue hover:text-emprise-pink"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
