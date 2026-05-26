import React, { useEffect, useRef, useState } from 'react';

export default function Trust() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height + windowHeight;
      const currentProgress = (windowHeight - rect.top) / totalHeight;
      
      const clampedProgress = Math.max(0, Math.min(1, currentProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLineOpacity = (progress, minRange, maxRange) => {
    if (progress < minRange) return 'text-neutral-800 opacity-20';
    if (progress > maxRange) return 'text-white opacity-100';      
    return 'text-white/90 opacity-90 transition-all duration-300';
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[125vh] bg-black flex flex-col justify-between px-6 md:px-20 pt-32 pb-16 overflow-hidden select-none"
    >
      
      <div className="h-4 w-full"></div>

      <main className="w-full max-w-7xl mx-auto flex flex-col items-start justify-end mt-auto mb-16 pl-2 md:pl-12">
        
        <p className="text-xs md:text-[14px] font-sans font-bold tracking-[0.38em] text-white uppercase mb-16 md:mb-20">
          not everyone makes it in.
        </p>

        <h1 className="text-[60px] md:text-[58px] font-serif font-bold tracking-tight text-left lowercase max-w-[90rem] space-y-4 md:space-y-5">
          
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.15, 0.32)
          }`}>
            the story of CRED begins with trust.
          </span>

          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.32, 0.48)
          }`}>
            we believe individuals who've proven their trustworthiness
          </span>

          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.48, 0.64)
          }`}>
            deserve better: better experiences, better rewards,
          </span>
          
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.53, 0.64)
          }`}>
            better rules.
          </span>
          
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.53, 0.66)
          }`}>
            this is the status quo we're building.
          </span>
          
          <span className={`block leading-[1.1] transition-colors duration-500 ${
            getLineOpacity(scrollProgress, 0.53, 0.70)
          }`}>
            make it to the club, and experience the ascension yourself.
          </span>
        </h1>

      </main>

      {/* Footer is kept clean to let the fixed global QR overlap natively */}
      <footer className="w-full max-w-7xl mx-auto flex items-center justify-end pt-4">
        <div className="h-4"></div>
      </footer>

    </section>
  );
}