import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';

const StickyBottomCTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-emerald-900 border-t border-emerald-800 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] animate-slide-up">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Timer Section */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
          <div className="text-emerald-100 text-sm font-semibold hidden sm:block">
            Promo Berakhir Dalam:
          </div>
          <div className="flex gap-2 text-white">
            <div className="bg-emerald-800 rounded-lg p-2 min-w-[3rem] text-center border border-emerald-700">
              <span className="font-bold text-lg leading-none block">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="text-[9px] text-emerald-300 uppercase block mt-1">Jam</span>
            </div>
            <div className="bg-emerald-800 rounded-lg p-2 min-w-[3rem] text-center border border-emerald-700">
              <span className="font-bold text-lg leading-none block">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="text-[9px] text-emerald-300 uppercase block mt-1">Min</span>
            </div>
            <div className="bg-emerald-800 rounded-lg p-2 min-w-[3rem] text-center border border-emerald-700">
              <span className="font-bold text-lg leading-none block">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="text-[9px] text-emerald-300 uppercase block mt-1">Det</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://jawaradigital.myscalev.com/orderramadhansuperkidsapps"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full md:w-auto px-8 py-3 bg-yellow-400 text-emerald-950 font-black text-lg rounded-xl hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-400/20 whitespace-nowrap flex items-center justify-center gap-2 no-underline"
        >
          <span>AMBIL PROMO</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
