
import React from 'react';
import { CONFIG } from '../config';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider">
              Solusi Ramadhan Paling Berkesan
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Bantu Si Kecil <span className="text-emerald-600">Cintai Ibadah</span> di Ramadhan Kali Ini!
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Halo Bunda! Temani tumbuh kembang spiritual buah hati dengan aplikasi interaktif yang bikin mereka semangat mengejar pahala tanpa perlu sering diingatkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => (window as any).safeScrollTo('offer')}
                className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-200 cursor-pointer"
              >
                Lihat Penawaran Spesial
              </button>
              <button 
                onClick={() => (window as any).safeScrollTo('video')}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all cursor-pointer relative group overflow-hidden"
              >
                <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[34px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <span className="relative">Lihat Fitur Dulu</span>
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              <img 
                src={CONFIG.images.hero} 
                alt="Happy Moms and Kids" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square md:aspect-video lg:aspect-square"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-3 border border-slate-50">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">❤️</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">37+ Bunda</div>
                  <div className="text-xs text-slate-500">Sudah Bergabung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
