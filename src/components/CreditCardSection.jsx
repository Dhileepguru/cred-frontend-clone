import React from 'react';
import creditCardVideo from '../assets/Video/CreditCard.mp4';

export default function CreditCardSection() {
  return (
    <section className="w-full bg-black flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden select-none">
      
      {/* 🛠️ Using direct 'flex' instead of conditional responsive row to force side-by-side positioning */}
      <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 md:gap-12">
        
        {/* 📋 Left Segment: Text Content Module (Forced 55% Width) */}
        <div className="w-[55%] space-y-4 md:space-y-6 text-left flex flex-col justify-center shrink-0">
          
          <h2 className="text-[58px] sm:text-[42px] md:text-[62px] lg:text-[72px] font-serif font-bold tracking-tight text-white leading-[1.05] lowercase">
            do more with <br /> your credit cards
          </h2>

          <p className="text-zinc-400 text-[11px] sm:text-xs md:text-[15px] lg:text-[16px] max-w-xl tracking-wide font-normal leading-relaxed font-sans opacity-90">
            manage your credit cards better and improve your credit score: 
            receive payment reminders, uncover hidden fees, get spending 
            insights, and discover ways to maximize card benefits.
          </p>

        </div>

        {/* 📺 Right Segment: Video Container Frame (Forced 45% Width) */}
        <div className="w-[75%] flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[480px] aspect-square flex items-center justify-center">
            
            {/* Background Ambient Depth layers */}
            <div className="absolute inset-0 bg-neutral-950/40 rounded-full blur-xl scale-90 z-0"></div>

            <video
              src={creditCardVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain mix-blend-screen opacity-95 relative z-10 scale-110"
            />

          </div>
        </div>

      </div>

    </section>
  );
}