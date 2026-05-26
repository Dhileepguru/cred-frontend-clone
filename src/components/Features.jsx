import React, { useEffect, useRef, useState } from 'react';
import featureImg1 from '../assets/FeatureImg-1.png';

export default function Features() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Track interactive entry and exit thresholds natively
      const totalHeight = rect.height + windowHeight;
      const currentProgress = (windowHeight - rect.top) / totalHeight;
      
      const clampedProgress = Math.max(0, Math.min(1, currentProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial view pass calculations

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateY = Math.max(-40, Math.min(40, (scrollProgress - 0.5) * -120));
  const scale = Math.max(0.96, Math.min(1.04, 1 + (scrollProgress - 0.5) * 0.1));

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[110vh] bg-black w-full flex flex-col items-center justify-center px-6 md:px-16 py-24 overflow-hidden select-none"
    >
      {/* Core Visual Asset Component Importer Wrapper Node */}
      <div className="relative z-10 w-1/2 h-auto flex items-center justify-center">
        <img 
          src={featureImg1} 
          alt="CRED Product Mobile UI Experience Showcase" 
          className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
          loading="eager"
        />
      </div>

      <div className="w-full max-w-5xl mx-auto text-center mt-12 md:mt-16 z-10 space-y-6">
        
        {/* Main Serif Display Title Headlines */}
        <h1 className="text-[96px] w-full md:text-[68px] font-serif font-bold tracking-tight text-white leading-tight lowercase">
          all that you deserve. <br /> and some more.
        </h1>

        {/* Brand Descriptive Paragraph Notes */}
        <p className="text-zinc-400 text-xs md:text-[16px] max-w-3xl mx-auto tracking-wide font-normal leading-relaxed font-sans opacity-90 pt-2">
          if you're a CRED member, you're already a step ahead. everyone
          <br/>experience you unlock takes you higher up the pedestal.
        </p>

      </div>
    </section>
  );
}