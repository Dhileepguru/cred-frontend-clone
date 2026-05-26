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

  // Calculate parallax translation offsets dynamically on scroll context mapping
  const translateY = Math.max(-40, Math.min(40, (scrollProgress - 0.5) * -120));
  const scale = Math.max(0.96, Math.min(1.04, 1 + (scrollProgress - 0.5) * 0.1));

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[110vh] bg-black w-full flex flex-col items-center justify-center px-6 md:px-16 py-24 overflow-hidden select-none"
    >
          {/* Core Visual Asset Component Importer Wrapper Node */}
          <div className="relative z-10 w-half h-auto flex items-center justify-center">
            <img 
              src={featureImg1} 
              alt="CRED Product Mobile UI Experience Showcase" 
              className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
              loading="eager"
            />
          </div>
    </section>
  );
}