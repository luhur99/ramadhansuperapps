
import React, { useState, useEffect } from 'react';

const SidebarNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'problem', label: 'Masalah' },
    { id: 'features', label: 'Fitur' },
    { id: 'testimonials', label: 'Testimoni' },
    { id: 'faq', label: 'FAQ' },
    { id: 'offer', label: 'Promo' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
      {sections.map((section) => (
        <button 
          key={section.id}
          onClick={() => (window as any).safeScrollTo(section.id)}
          className="group flex items-center gap-3 justify-end cursor-pointer bg-transparent border-none"
        >
          <span className={`text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white px-2 py-1 rounded ${activeSection === section.id ? 'opacity-100' : ''}`}>
            {section.label}
          </span>
          <div className={`w-3 h-3 rounded-full transition-all ${activeSection === section.id ? 'bg-emerald-600 scale-125' : 'bg-slate-300 scale-100 group-hover:scale-110'}`}></div>
        </button>
      ))}
    </div>
  );
};

export default SidebarNav;
