import React, { useEffect, useState } from 'react';

export default function Ratings() {
  // Animated counters state engines
  const [memberCount, setMemberCount] = useState(0);
  const [appRating, setAppRating] = useState(0.0);
  const [playRating, setPlayRating] = useState(0.0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setMemberCount(Math.floor((15 * currentStep) / steps));
      setAppRating(((4.8 * currentStep) / steps).toFixed(1));
      setPlayRating(((4.8 * currentStep) / steps).toFixed(1));

      if (currentStep >= steps) {
        clearInterval(timer);
        setMemberCount(15);
        setAppRating('4.8');
        setPlayRating('4.8');
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-20 md:py-32 select-none overflow-hidden">
      
      {/* 🛠️ Main Row Wrapper: Forces Title on Left and Ratings Grid on Right */}
      <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 md:gap-12">
        
        {/* 📋 Left Segment: Brand Text Module (Forced 45% Width) */}
        <div className="w-[45%] space-y-3 text-left flex flex-col justify-center shrink-0">
          <p className="text-[15px] sm:text-[11px] font-sans font-black tracking-[0.25em] sm:tracking-[0.35em] text-neutral-500 uppercase">
            trusted by {memberCount}m members
          </p>
          <h2 className="text-[80px] sm:text-[42px] md:text-[56px] lg:text-[72px] font-serif font-bold tracking-tight leading-[1.05] lowercase">
            the proof <br /> writes itself
          </h2>
        </div>

        {/* 📊 Right Segment: Dual Store Sub-Row Framework (Forced 55% Width) */}
        <div className="w-[55%] flex flex-row items-center justify-center gap-6 sm:gap-16 md:gap-24">
          
          {/* App Store Stats Column */}
          <div className="space-y-2 text-left flex flex-col justify-center shrink-0">
            <div className="text-white text-sm sm:text-xl md:text-2xl tracking-tighter tracking-widest">
              ★★★★★
            </div>
            <div className="flex items-baseline font-sans tracking-tighter">
              <span className="text-[32px] sm:text-[52px] md:text-[76px] font-black leading-none">{appRating}</span>
              <span className="text-sm sm:text-xl md:text-3xl font-light text-neutral-500 ml-0.5">/5</span>
            </div>
            <p className="text-[9px] sm:text-[11px] font-sans font-black tracking-[0.15em] sm:tracking-[0.25em] text-neutral-500 uppercase">
              app store
            </p>
          </div>

          {/* Play Store Stats Column */}
          <div className="space-y-2 text-left flex flex-col justify-center shrink-0">
            <div className="text-white text-sm sm:text-xl md:text-2xl tracking-tighter tracking-widest">
              ★★★★★
            </div>
            <div className="flex items-baseline font-sans tracking-tighter">
              <span className="text-[32px] sm:text-[52px] md:text-[76px] font-black leading-none">{playRating}</span>
              <span className="text-sm sm:text-xl md:text-3xl font-light text-neutral-500 ml-0.5">/5</span>
            </div>
            <p className="text-[9px] sm:text-[11px] font-sans font-black tracking-[0.15em] sm:tracking-[0.25em] text-neutral-500 uppercase">
              play store
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}