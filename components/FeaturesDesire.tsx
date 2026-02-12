
import React from 'react';
import { CONFIG } from '../config';
import { features } from '../constants';

const FeaturesDesire: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Kenalan Sama <span className="text-emerald-600">Pahlawan Ramadhan</span> Bunda!
          </h2>
          <p className="text-lg text-slate-600">
            Satu aplikasi, sejuta manfaat. Kami desain khusus untuk memudahkan hidup Bunda dan membahagiakan si buah hati.
          </p>
        </div>

        <div className="grid gap-24">
          {features.map((feature, idx) => (
            <div 
              key={feature.id} 
              className={`flex flex-col lg:items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-emerald-200/50 rounded-[40px] blur-2xl group-hover:bg-emerald-300/50 transition-all"></div>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="relative rounded-[32px] shadow-2xl w-full aspect-video lg:aspect-square object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-emerald-600 font-bold mb-2">Fitur Unggulan #{idx + 1}</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">{feature.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {feature.description}
                </p>
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium italic">"Anak jadi lebih mandiri dan antusias tanpa perlu drama setiap hari, Bun!"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 relative rounded-[48px] overflow-hidden">
          <img 
            src={CONFIG.images.desire} 
            alt="Product usage lifestyle" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-emerald-900/60 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Siap Jadikan Ramadhan Kali Ini Tak Terlupakan?
            </h2>
            <p className="text-emerald-50 text-xl max-w-2xl mb-8">
              Beri mereka memori indah tentang ibadah sejak dini. Investasi terbaik untuk masa depan akhirat mereka.
            </p>
            <button 
              onClick={() => (window as any).safeScrollTo('offer')}
              className="px-10 py-5 bg-white text-emerald-900 font-bold text-xl rounded-2xl hover:bg-emerald-50 transition-all scale-100 hover:scale-105 cursor-pointer"
            >
              Ambil Promonya Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDesire;
