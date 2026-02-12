
import React, { useEffect } from 'react';
import { CONFIG } from './config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import VideoDemo from './components/VideoDemo';
import FeaturesDesire from './components/FeaturesDesire';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SidebarNav from './components/SidebarNav';

// Neuter History API to prevent Error 153 in restricted environments
if (typeof window !== 'undefined') {
  window.history.pushState = function() { return null; };
  window.history.replaceState = function() { return null; };
}

// Global Scroll Function using standard DOM methods, avoiding any hash manipulation
(window as any).safeScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = window.innerWidth < 640 ? 64 : 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

function App() {
  useEffect(() => {
    // Meta Ads Pixel Event Tracking - Console only to avoid external script issues
    console.log(`[PIXEL] PageView: ${CONFIG.metaPixelId}`);
    
    // Preventive measure: ensure no hash changes happen via browser back/forward or accidental clicks
    const handleHashChange = (e: HashChangeEvent) => {
      e.preventDefault();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <SidebarNav />
      
      <main>
        {/* AIDA: Attention */}
        <Hero />
        
        {/* AIDA: Interest */}
        <ProblemSolution />
        
        {/* Evidence/Proof */}
        <VideoDemo />
        
        {/* AIDA: Desire */}
        <FeaturesDesire />
        <Testimonials />
        <FAQ />
        
        {/* AIDA: Action */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
