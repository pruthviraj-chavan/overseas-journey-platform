
import React from 'react';
import { GraduationCap, Award, Globe, BookOpen } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Founder Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 transform transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Avadhut Kumbhar - Founder" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Experience Card */}
            <div className="glass-card absolute top-8 -right-8 p-4 max-w-[200px] hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-emprise-gold/10 p-2">
                  <Award size={20} className="text-emprise-gold" />
                </div>
                <div>
                  <h4 className="font-medium text-emprise-blue">5+ Years</h4>
                  <p className="text-sm text-emprise-blue/70">Experience</p>
                </div>
              </div>
            </div>
            
            {/* Floating Education Card */}
            <div className="glass-card absolute -bottom-8 -left-8 p-4 max-w-[220px] hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-emprise-pink/10 p-2">
                  <GraduationCap size={20} className="text-emprise-pink" />
                </div>
                <div>
                  <h4 className="font-medium text-emprise-blue">Certified</h4>
                  <p className="text-sm text-emprise-blue/70">Education Consultant</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Founder Details */}
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-emprise-pink/10 px-4 py-1.5 text-sm font-medium text-emprise-pink">
              Meet Our Founder
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Avadhut Kumbhar
            </h2>
            
            <p className="text-lg text-emprise-blue/70 italic">
              "My mission is to empower students with the right guidance and opportunities to achieve their global education dreams."
            </p>
            
            <p className="text-emprise-blue/80 leading-relaxed">
              With over 5 years of dedicated experience in overseas education consulting, Avadhut Kumbhar founded 
              Emprise Study Abroad with a vision to bridge the gap between Indian students and quality global 
              education opportunities. His expertise in international education systems, visa processes, 
              and university admissions has helped over 1000 students realize their dream of studying abroad.
            </p>
            
            <p className="text-emprise-blue/80 leading-relaxed">
              Based in Shahupuri, Kolhapur, Avadhut has built a reputation for providing honest, personalized 
              guidance to each student, understanding their unique aspirations and helping them find the perfect 
              educational pathway aligned with their career goals.
            </p>
            
            {/* Expertise Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: <BookOpen size={18} />,
                  title: "University Admissions",
                  desc: "Expert in global university application processes"
                },
                {
                  icon: <Globe size={18} />,
                  title: "Visa Consulting",
                  desc: "Specialized in student visa requirements worldwide"
                },
                {
                  icon: <Award size={18} />,
                  title: "Scholarship Guidance",
                  desc: "Helping students secure financial assistance"
                },
                {
                  icon: <GraduationCap size={18} />, 
                  title: "Career Counseling",
                  desc: "Tailored advice for academic and career planning"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
