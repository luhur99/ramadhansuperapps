
import React from 'react';
import { CONFIG } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
           <span className="font-bold text-xl">{CONFIG.brandName}</span>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {CONFIG.brandName}. Hak Cipta Dilindungi Undang-Undang.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
