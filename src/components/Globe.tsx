
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
        className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#34ace0] to-[#227093] animate-rotate-globe relative"
        style={{
          boxShadow: '0 0 50px rgba(52, 172, 224, 0.15), inset 0 0 50px rgba(25, 42, 86, 0.2)',
        }}
      >
        {/* Continents - Simplified shapes */}
        <div className="absolute top-[20%] left-[15%] w-[25%] h-[35%] bg-[#f5f5f5] opacity-80 rounded-full transform rotate-12"
             style={{ clipPath: 'polygon(30% 0%, 70% 15%, 90% 50%, 70% 90%, 30% 100%, 10% 50%)' }}></div>
        <div className="absolute top-[55%] left-[60%] w-[20%] h-[25%] bg-[#f5f5f5] opacity-80 rounded-full transform -rotate-12"></div>
        <div className="absolute top-[25%] right-[20%] w-[15%] h-[20%] bg-[#f5f5f5] opacity-80 rounded-full"></div>
        
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
        className="absolute top-1/3 left-1/4 text-white"
      >
        <Plane size={20} className="transform -rotate-45" />
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-[#34ace0] opacity-10 filter blur-3xl animate-pulse-soft"></div>
    </div>
  );
};

export default Globe;
