
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, AwardIcon, LineChart, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with Cards */}
          <div className="relative">
            {/* Main Image - Founder */}
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-gray-100 transform transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80" 
                alt="Education Consulting" 
                className="w-full h-[400px] object-cover"
              />
              
              {/* Founder Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emprise-blue/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-medium">Avadhut Kumbhar</h3>
                <p className="text-white/80">Founder, Emprise Study Abroad</p>
              </div>
            </div>
            
            {/* Floating Achievement Card */}
            <div className="glass-card absolute top-8 -right-8 p-4 max-w-[200px] animate-float hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-emprise-pink/10 p-2">
                  <AwardIcon size={20} className="text-emprise-pink" />
                </div>
                <div>
                  <h4 className="font-medium text-emprise-blue">500+</h4>
                  <p className="text-sm text-emprise-blue/70">Successful Students</p>
                </div>
              </div>
            </div>
            
            {/* Floating Education Card */}
            <div className="glass-card absolute -bottom-8 -left-8 p-4 max-w-[200px] animate-float animation-delay-500 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-emprise-gold/10 p-2">
                  <GraduationCap size={20} className="text-emprise-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-emprise-blue">20+</h4>
                  <p className="text-sm text-emprise-blue/70">Partner Universities</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - About Text Content */}
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink">
              About Emprise Study Abroad
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Transforming Dreams Into <span className="text-gradient">Global Success Stories</span>
            </h2>
            
            <p className="text-emprise-blue/80 leading-relaxed">
              Emprise Study Abroad was founded with a vision to empower students from India to access world-class 
              education opportunities across the globe. Our consultancy specializes in personalized guidance, 
              ensuring each student finds the perfect academic path aligned with their career aspirations.
            </p>
            
            {/* Why Choose Us Points */}
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: <User size={18} />,
                  title: "Personalized Approach",
                  desc: "Tailored guidance based on your academic background and career goals"
                },
                {
                  icon: <AwardIcon size={18} />,
                  title: "Expert Counselors",
                  desc: "Team of experienced education consultants with global knowledge"
                },
                {
                  icon: <LineChart size={18} />, 
                  title: "End-to-End Support",
                  desc: "Comprehensive assistance from university selection to visa approval"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-emprise-pink/10 p-2 mt-0.5">
                    <div className="text-emprise-pink">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-emprise-blue">{item.title}</h4>
                    <p className="text-sm text-emprise-blue/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="inline-flex items-center gap-2 text-emprise-pink font-medium hover:gap-3 transition-all">
              Learn more about our journey <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
