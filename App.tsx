
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

// Function to inject Meta Pixel dynamically from config
const injectMetaPixel = (pixelId: string) => {
  if (typeof window === 'undefined' || !pixelId) return;

  // Check if pixel already loaded
  if ((window as any).fbq) return;

  // Inject the Meta Pixel script
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  // Inject noscript fallback
  const noscriptContainer = document.getElementById('pixel-noscript');
  if (noscriptContainer) {
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    noscriptContainer.appendChild(noscript);
  }
};

function App() {
  useEffect(() => {
    // Inject Meta Pixel dynamically from config
    if (CONFIG.metaPixelId) {
      injectMetaPixel(CONFIG.metaPixelId);
    }
    
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
