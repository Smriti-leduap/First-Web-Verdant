import React from 'react';
import { ArrowRight } from 'lucide-react';
import Plant1 from "../assets/Plant1.jpg";


export default function Hero() {
  return (
    <main className="pt-32 pb-16 px-6 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b9d77]/20 text-[#2d5a27] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#2d5a27] animate-pulse"></span>
            Spring Collection
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-[#2d5a27]">
            Bring <span className="font-bold">nature</span><br />into your home.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover our curated collection of indoor plants to purify your air and elevate your living space. Hand-delivered to your door with love and care.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#2d5a27] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a3a17] transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 group">
              Shop Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-[#2d5a27] border-2 border-[#2d5a27]/30 hover:border-[#2d5a27] hover:bg-[#2d5a27]/5 transition-all">
              Plant Care Guide
            </button>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b9d77]/30 to-[#e5b181]/30 rounded-[3rem] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6"></div>
          
          <img
            src={Plant1}
            alt="Beautiful indoor plant"
            className="relative z-10 w-full rounded-[3rem] object-cover h-[500px] lg:h-[650px] shadow-2xl"
          />
          <div className="absolute bottom-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none">
            <div className="w-12 h-12 bg-[#f9faec] rounded-full flex items-center justify-center text-xl">🌱</div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Top Quality</p>
              <p className="text-[#2d5a27] font-bold">100% Organic</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
