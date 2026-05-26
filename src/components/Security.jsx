import React from 'react';
// 📸 Importing the exact shield vector logo from your assets folder
import securityShield from '../assets/Security.png'; 

export default function Security() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-16 lg:px-24 py-32 border-t border-neutral-900/40 select-none overflow-hidden text-center flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto space-y-10 flex flex-col items-center">
        
        {/* 🛡️ 1. Exact Shield Lock Logo Asset From Your Screenshot */}
        <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-500 hover:scale-105">
          <img 
            src={securityShield} 
            alt="CRED Security Shield Verification" 
            className="w-full h-full object-contain invert block"
          />
        </div>

        {/* 💬 2. Strict Sub-Header Title Line */}
        <p className="text-[20px] sm:text-sm uppercase tracking-[0.3em] font-mono font-bold text-white max-w-3xl leading-relaxed opacity-95">
          your data isn't our business. keeping it safe is.
        </p>

        {/* ⚡ 3. CRED Signature High-Contrast Text Showcase */}
        {/* The word "personal" is given full white contrast highlighting just like your official screenshot */}
        <h2 className="text-[32px] sm:text-[48px] md:text-[62px] lg:text-[76px] font-sans font-bold tracking-tight text-neutral-800 leading-[1.15] max-w-4xl lowercase mix-blend-screen">
          all your personal data and transactions are encrypted and secured. there's no room for mistakes because we didn't leave any.
        </h2>

      </div>
    </section>
  );
}