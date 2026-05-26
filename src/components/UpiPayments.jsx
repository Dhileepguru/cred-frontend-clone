import React from 'react';
// Importing asset images cleanly for background layout context
import qrImg from '../assets/qr.png';
import creditImg from '../assets/credit.png';
import payOnCreditImg from '../assets/payoncredit.png';

export default function UpiPayments() {
  const paymentCards = [
    {
      badge: "scan & pay",
      title: "scan & pay any UPI QR",
      desc: "scan any QR code code directly from the app to unlock immediate cashback and premium rewards instantly.",
      bgImg: qrImg,
    },
    {
      badge: "upi on credit",
      title: "UPI payments. on credit.",
      desc: "link your credit cards to UPI and scan seamlessly without worrying about your bank account balance.",
      bgImg: creditImg,
    },
    {
      badge: "tap to pay",
      title: "tap your phone. pay on credit.",
      desc: "just tap your NFC enabled phone on any merchant terminal for super fast, secure wireless card payments.",
      bgImg: payOnCreditImg,
    }
  ];

  return (
    <section className="w-full bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-900/40 select-none overflow-hidden">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        
        {/* 📋 Section Main Header */}
        <div className="w-full text-left space-y-4">
          <h2 className="text-[32px] sm:text-[52px] lg:text-[68px] font-serif font-bold tracking-tight text-white leading-[1.05] lowercase">
            upgrade your life. <br />
            <span className="text-neutral-200">bit by bit.</span>
          </h2>
        </div>

        {/* 🛠️ 🎛️ STRICT SIDE-BY-SIDE ROW: Forces containers onto a single line without wrapping down */}
        <div className="w-full flex flex-row items-stretch justify-between gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          {paymentCards.map((card, index) => (
            <div 
              key={index} 
              className="w-[32%] min-w-[120px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[340px] min-h-[460px] sm:min-h-[520px] bg-[#09090a] border border-neutral-900/60 p-4 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden rounded-none group shrink-0 transition-all duration-500 hover:border-neutral-800"
            >
              
              {/* 📸 Full Embedded Container Background Blending Layer */}
              <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <img 
                  src={card.bgImg} 
                  alt={card.title} 
                  className="w-full h-full object-cover object-center opacity-[0.55] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Gradient Shield mask overlay for crystal clear text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10"></div>
              </div>

              {/* Top Meta Details Block (Safely resting above image graphics) */}
              <div className="space-y-3 sm:space-y-4 text-left relative z-20">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono font-semibold opacity-80">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold font-sans text-white tracking-tight leading-snug lowercase max-w-[240px]">
                  {card.title}
                </h3>
              </div>

              {/* Bottom Metadata & Trigger Action Button Line */}
              <div className="space-y-4 sm:space-y-6 text-left relative z-20 pt-16">
                <p className="text-[10px] sm:text-xs text-neutral-300 font-sans tracking-wide leading-relaxed max-w-xs opacity-90 hidden sm:block">
                  {card.desc}
                </p>

                {/* Minimalist Signature Button Label */}
                <button className="flex items-center gap-1.5 text-[9px] sm:text-[11px] uppercase tracking-[0.25em] font-mono font-bold text-white group-hover:text-neutral-300 transition-colors bg-transparent border-none outline-none p-0 cursor-pointer pt-1">
                  know more —
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}