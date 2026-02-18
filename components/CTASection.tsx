
import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';

const CTASection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
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
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offer" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-emerald-900 rounded-[48px] overflow-hidden shadow-2xl relative border-4 border-emerald-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="p-6 md:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 text-yellow-950 font-bold text-xs md:text-sm rounded-full mb-4 md:mb-6">
                <span className="animate-pulse">●</span> PENAWARAN TERBATAS {CONFIG.promoLabel}
              </div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                Mulai Perjalanan Ibadah Si Kecil Sekarang!
              </h2>
              <p className="text-emerald-100 text-sm md:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                Ramadhan cuma datang setahun sekali. Jangan biarkan momen emas menanamkan cinta ibadah ke hati si kecil terlewat begitu saja tanpa panduan yang seru.
              </p>
              
              <div className="flex gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-10">
                <div className="text-center">
                  <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-bold border border-white/20">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <span className="text-emerald-300 text-[10px] uppercase font-bold mt-1 block">Jam</span>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-bold border border-white/20">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <span className="text-emerald-300 text-[10px] uppercase font-bold mt-1 block">Menit</span>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white text-lg md:text-2xl font-bold border border-white/20">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <span className="text-emerald-300 text-[10px] uppercase font-bold mt-1 block">Detik</span>
                </div>
              </div>

              <div className="mb-8 md:mb-10 p-6 md:p-8 bg-white/5 rounded-[24px] md:rounded-[32px] border border-white/10 inline-block text-center lg:text-left w-full md:w-auto">
                <div className="text-emerald-400 text-sm md:text-lg font-medium line-through mb-1">{CONFIG.priceBefore}</div>
                <div className="flex items-end justify-center lg:justify-start gap-2">
                  <div className="text-white text-3xl md:text-6xl font-black">{CONFIG.priceAfter}</div>
                  <div className="text-emerald-300 text-xs md:text-sm font-bold pb-1 md:pb-2">/ Akses Selamanya</div>
                </div>
                <div className="text-yellow-400 text-xs md:text-sm font-bold mt-3 md:mt-4 flex items-center gap-2 justify-center lg:justify-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                  Hemat {CONFIG.priceBefore.replace(/\D/g, '') ? (parseInt(CONFIG.priceBefore.replace(/\D/g, '')) - parseInt(CONFIG.priceAfter.replace(/\D/g, ''))).toLocaleString('id-ID') : '350.000'}-an hari ini!
                </div>
              </div>
              
              <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0 w-full">
                <a 
                  href={CONFIG.checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 md:py-6 bg-yellow-400 text-emerald-950 font-black text-xl md:text-2xl rounded-xl md:rounded-2xl hover:bg-yellow-300 hover:scale-105 transition-all text-center shadow-2xl shadow-yellow-400/40"
                >
                  AMBIL PROMO SEKARANG
                </a>
                <div className="flex items-center justify-center gap-4 text-white/50 text-[10px] md:text-xs">
                   <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg> Pembayaran Aman</span>
                   <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg> Akses Instan</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 hidden md:block w-full max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-[40px] rotate-3 blur-sm"></div>
                <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black">R</div>
                      <span className="font-bold text-slate-900">{CONFIG.brandName}</span>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">SUPER KIDS APPS</div>
                  </div>
                  
                  <div className="space-y-5 mb-8">
                    {[
                      'Semua Fitur Tracker Ibadah',
                      'Full Akses Ramadhan Kids Story',
                      'Jurnal Ramadhan Ceria (Editable)',
                      'Kuis Seru Sekeluarga',
                      'Update Fitur Gratis Selamanya'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <img key={i} src={`https://picsum.photos/40/40?random=${i+20}`} className="w-8 h-8 rounded-full border-2 border-white" />
                        ))}
                      </div>
                      <div className="text-[10px] font-medium text-slate-500">
                        <span className="text-slate-900 font-bold block">127 Bunda</span>
                        Membeli dalam 24 jam terakhir
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
