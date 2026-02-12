
import React from 'react';
import { CONFIG } from '../config';
import { problems, solutions } from '../constants';

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Problem Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 italic">
            "Duh, kok si kecil susah banget ya diajak ibadah?"
          </h2>
          <p className="text-lg text-slate-600">
            Jujur deh Bun, sering nggak sih ngerasain hal-hal di bawah ini pas lagi puasa? Tenang, Bunda nggak sendirian kok!
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-rose-50 p-8 rounded-3xl border border-rose-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-4">{prob.icon}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prob.title}</h3>
              <p className="text-slate-600">{prob.text}</p>
            </div>
          ))}
        </div>

        {/* Image Bridge */}
        <div className="mb-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src={CONFIG.images.problem} 
              alt="Problem solving visuals" 
              className="rounded-3xl shadow-xl w-full aspect-video object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Kabar Baiknya, <span className="text-emerald-600">Bunda Bisa Mengubahnya!</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Bayangkan Ramadhan tahun ini si kecil bangun sahur tanpa merengek, semangat nunggu waktu sholat, dan bangga bisa pamer progres ngaji mereka. Kami di <span className="font-bold text-emerald-600">{CONFIG.brandName}</span> pengen bantu Bunda wujudin itu semua lewat cara yang menyenangkan.
            </p>
            
            <div className="space-y-6">
              {solutions.map((sol, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-xl">
                    {sol.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{sol.title}</h4>
                    <p className="text-slate-600 text-sm">{sol.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
