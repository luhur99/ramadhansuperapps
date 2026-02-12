
import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';

const VideoDemo: React.FC = () => {
  // Fungsi pembantu untuk mengekstrak ID YouTube jika Bunda memasukkan link lengkap
  const getYouTubeId = (input: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = input.match(regExp);
    return (match && match[2].length === 11) ? match[2] : input;
  };

  const videoId = getYouTubeId(CONFIG.youtubeVideoId || 'QE2Fn9eOX7Y');
  
  // State untuk menyimpan URL embed agar origin di-set di client-side
  const [embedUrl, setEmbedUrl] = useState(
    `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&controls=1`
  );

  useEffect(() => {
    // Set origin setelah component mount (di client-side)
    const origin = window.location.origin;
    setEmbedUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&controls=1&enablejsapi=1&origin=${origin}`
    );
  }, [videoId]);

  return (
    <section id="demo" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            Video Demo Aplikasi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Intip Dulu Yuk Bun, Gimana <span className="text-emerald-600">Serunya</span> Aplikasi Ini!
          </h2>
          <p className="text-lg text-slate-600">
            Bunda penasaran gimana tampilan dalamnya? Tonton video singkat ini untuk melihat betapa mudah dan asyiknya si kecil saat menggunakan Ramadhan Super Kids Apps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-60 -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-60 -z-10"></div>

          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-[34px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            {/* Main Player Frame */}
            <div className="relative bg-white p-2 md:p-4 rounded-[32px] shadow-2xl border border-slate-100">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner relative">
                {/* Iframe with state-managed URL for maximum compatibility */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={embedUrl}
                  title="Ramadhan Super Kids Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button 
              onClick={() => (window as any).safeScrollTo('offer')}
              className="inline-flex items-center gap-4 p-5 bg-emerald-50 hover:bg-emerald-100 transition-colors rounded-2xl border border-emerald-100 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-emerald-800">
                  Gimana Bun? Menarik banget kan?
                </p>
                <p className="text-xs text-emerald-600 font-medium">
                  Klik di sini untuk langsung ambil promonya!
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
