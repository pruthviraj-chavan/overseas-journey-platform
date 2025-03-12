
import React, { useEffect, useRef } from 'react';
import { Plane } from 'lucide-react';

const Globe = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  // Position planes at different points around globe
  useEffect(() => {
    const animatePlane = () => {
      if (planeRef.current) {
        planeRef.current.style.animation = 'none';
        // Trigger reflow
        void planeRef.current.offsetWidth;
        planeRef.current.style.animation = 'airplane-flight 15s linear infinite';
      }
    };

    animatePlane();
    // Add more planes if needed
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Globe */}
      <div 
        ref={globeRef}
        className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#1a73e8] to-[#0d47a1] animate-rotate-globe relative overflow-hidden"
        style={{
          boxShadow: '0 0 50px rgba(52, 172, 224, 0.15), inset 0 0 50px rgba(25, 42, 86, 0.2)',
        }}
      >
        {/* Continents */}
        <div className="absolute top-[10%] left-[20%] w-[40%] h-[25%] bg-[#80b376] opacity-90 rounded-sm transform rotate-12 z-10"
             style={{ clipPath: 'polygon(30% 0%, 70% 15%, 95% 50%, 70% 90%, 20% 100%, 5% 50%)' }}></div>
        <div className="absolute top-[60%] left-[55%] w-[25%] h-[30%] bg-[#80b376] opacity-90 rounded-sm transform -rotate-12 z-10"
             style={{ clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)' }}></div>
        <div className="absolute top-[15%] right-[15%] w-[20%] h-[15%] bg-[#80b376] opacity-90 rounded-sm z-10"
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}></div>
        <div className="absolute top-[50%] left-[5%] w-[15%] h-[25%] bg-[#80b376] opacity-90 rounded-sm z-10"
             style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)' }}></div>
        
        {/* Ice caps */}
        <div className="absolute top-0 left-[25%] w-[50%] h-[15%] bg-[#e8f4fc] opacity-80 rounded-full z-10"></div>
        <div className="absolute bottom-0 left-[25%] w-[50%] h-[15%] bg-[#e8f4fc] opacity-80 rounded-full z-10"></div>
        
        {/* Cloud layers with animation */}
        <div className="absolute inset-0 rounded-full overflow-hidden z-20 opacity-40">
          <div className="absolute w-[200%] h-[30%] top-[15%] bg-white opacity-60 blur-md animate-cloud-slow"></div>
          <div className="absolute w-[200%] h-[20%] top-[55%] bg-white opacity-60 blur-md animate-cloud-medium"></div>
        </div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 rounded-full border-2 border-[rgba(255,255,255,0.1)]"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[rgba(255,255,255,0.1)] transform rotate-[30deg]"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[rgba(255,255,255,0.1)] transform rotate-[60deg]"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[rgba(255,255,255,0.1)] transform rotate-[90deg]"></div>
        
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-[rgba(255,255,255,0.1)]"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-[rgba(255,255,255,0.1)]"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-[rgba(255,255,255,0.1)]"></div>
      </div>
      
      {/* Flying Plane */}
      <div 
        ref={planeRef} 
        className="absolute top-1/3 left-1/4 text-white z-30"
      >
        <Plane size={20} className="transform -rotate-45" />
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-[#1a73e8] opacity-10 filter blur-3xl animate-pulse-soft"></div>
    </div>
  );
};

export default Globe;
