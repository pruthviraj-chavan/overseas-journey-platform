
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, Building, DollarSign, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const countries = [
  {
    id: 'russia',
    name: 'Russia',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80',
    flagIcon: '🇷🇺',
    specializations: ['MBBS', 'Engineering', 'Arts'],
    universities: 15,
    tuitionRange: '$2,000 - $5,000 per year',
    duration: '5-6 years',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    flagIcon: '🇬🇧',
    specializations: ['MBA', 'Data Science', 'Medicine'],
    universities: 20,
    tuitionRange: '$15,000 - $35,000 per year',
    duration: '1-4 years',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'germany',
    name: 'Germany',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    flagIcon: '🇩🇪',
    specializations: ['Engineering', 'Automotive', 'Research'],
    universities: 12,
    tuitionRange: 'Mostly free (Admin fees only)',
    duration: '3-4 years',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'canada',
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1569681157440-8ac48915a979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    flagIcon: '🇨🇦',
    specializations: ['Business', 'Computer Science', 'Healthcare'],
    universities: 18,
    tuitionRange: '$10,000 - $30,000 per year',
    duration: '2-4 years',
    color: 'from-red-400 to-red-500'
  }
];

const CountriesSection = () => {
  const [activeCountry, setActiveCountry] = useState(countries[0].id);

  return (
    <section className="section-padding bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink mb-4">
            Global Destinations
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Countries We <span className="text-gradient">Cover</span>
          </h2>
          
          <p className="text-emprise-blue/80 leading-relaxed">
            Explore top study destinations with world-class universities and diverse cultural experiences. 
            Our expertise spans across these popular countries for international education.
          </p>
        </div>
        
        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {countries.map((country) => (
            <div
              key={country.id}
              onClick={() => setActiveCountry(country.id)}
              className={cn(
                "relative cursor-pointer group rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300",
                activeCountry === country.id ? "ring-4 ring-emprise-pink" : ""
              )}
            >
              <img 
                src={country.image} 
                alt={country.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div>
                  <div className="text-2xl mb-1">{country.flagIcon}</div>
                  <h3 className="text-white font-medium">{country.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Country Details */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
          {countries.map((country) => (
            <div
              key={country.id}
              className={cn(
                "transition-all duration-500",
                activeCountry === country.id 
                  ? "opacity-100 block" 
                  : "opacity-0 hidden"
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-4xl">{country.flagIcon}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-emprise-blue">{country.name}</h3>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex flex-wrap gap-2">
                      {country.specializations.map((spec, index) => (
                        <span 
                          key={index} 
                          className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium text-white",
                            `bg-gradient-to-r ${country.color}`
                          )}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-emprise-pink/10 p-2 mt-0.5">
                          <Building size={18} className="text-emprise-pink" />
                        </div>
                        <div>
                          <h4 className="font-medium text-emprise-blue">Partner Universities</h4>
                          <p className="text-emprise-blue/70">{country.universities}+ institutions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-emprise-pink/10 p-2 mt-0.5">
                          <GraduationCap size={18} className="text-emprise-pink" />
                        </div>
                        <div>
                          <h4 className="font-medium text-emprise-blue">Popular Programs</h4>
                          <p className="text-emprise-blue/70">{country.specializations.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-emprise-pink/10 p-2 mt-0.5">
                          <DollarSign size={18} className="text-emprise-pink" />
                        </div>
                        <div>
                          <h4 className="font-medium text-emprise-blue">Tuition Range</h4>
                          <p className="text-emprise-blue/70">{country.tuitionRange}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-emprise-pink/10 p-2 mt-0.5">
                          <Clock size={18} className="text-emprise-pink" />
                        </div>
                        <div>
                          <h4 className="font-medium text-emprise-blue">Program Duration</h4>
                          <p className="text-emprise-blue/70">{country.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/services" 
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-pink text-white font-medium rounded-full hover:shadow-lg transition-all"
                  >
                    Explore Programs <ChevronRight size={16} className="ml-2" />
                  </Link>
                </div>
                
                <div className="relative h-full min-h-[300px]">
                  <img 
                    src={country.image} 
                    alt={country.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
