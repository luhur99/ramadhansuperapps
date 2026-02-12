
import React from 'react';
import { CONFIG } from '../config';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Masalah', id: 'problem' },
    { label: 'Fitur', id: 'features' },
    { label: 'Testimoni', id: 'testimonials' },
    { label: 'Tanya Jawab', id: 'faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 h-16 sm:h-20 flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
          <span className="font-bold text-xl text-emerald-900 hidden sm:block">{CONFIG.brandName}</span>
        </div>
        
        <div className="flex gap-4 sm:gap-8 items-center">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => (window as any).safeScrollTo(item.id)}
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => (window as any).safeScrollTo('offer')}
            className="hidden md:block bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all cursor-pointer"
          >
            Ambil Promo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
