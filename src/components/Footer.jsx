import React from 'react';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section className="bg-[#2d5a27] text-[#f9faec] py-24 relative overflow-hidden">
         <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <Leaf className="w-96 h-96 transform translate-x-1/3 -translate-y-1/4" />
         </div>
         <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-light mb-8 max-w-3xl mx-auto leading-tight">
               "Planting a garden is to believe in tomorrow."
            </h2>
            <p className="text-lg opacity-80 mb-10">— Audrey Hepburn</p>
            <button className="bg-[#e5b181] text-[#2d5a27] px-10 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-xl text-lg">
               Join our community
            </button>
         </div>
      </section>

      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                 <div className="flex items-center gap-2 text-[#2d5a27] mb-6">
                    <Leaf className="w-8 h-8" />
                    <span className="text-2xl font-bold tracking-tighter">Verdant.</span>
                 </div>
                 <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
                   We bring the outdoors in. Delivering premium, healthy plants straight from the greenhouse to your doorstep with expert care instructions.
                 </p>
                 <div className="flex gap-4 text-[#2d5a27] font-bold">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#f9faec] flex items-center justify-center hover:bg-[#2d5a27] hover:text-white transition-colors">f</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#f9faec] flex items-center justify-center hover:bg-[#2d5a27] hover:text-white transition-colors">𝕏</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#f9faec] flex items-center justify-center hover:bg-[#2d5a27] hover:text-white transition-colors">Ig</a>
                 </div>
              </div>
              
              <div>
                 <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Shop</h4>
                 <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-[#2d5a27]">Indoor Plants</a></li>
                    <li><a href="#" className="hover:text-[#2d5a27]">Outdoor Plants</a></li>
                    <li><a href="#" className="hover:text-[#2d5a27]">Pots & Planters</a></li>
                    <li><a href="#" className="hover:text-[#2d5a27]">Plant Care Tools</a></li>
                 </ul>
              </div>
              
              <div>
                 <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Help</h4>
                 <ul className="space-y-4 text-gray-500">
                    <li><a href="#" className="hover:text-[#2d5a27]">Contact Us</a></li>
                    <li><a href="#" className="hover:text-[#2d5a27]">FAQ</a></li>
                    <li><a href="#" className="hover:text-[#2d5a27]">Shipping & Returns</a></li>
                    <li><a href="#" className="hover:text-[#2d5a27]">Privacy Policy</a></li>
                 </ul>
              </div>
           </div>
           
           <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Verdant Plants Platform. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-400">
                 <span>Terms of Service</span>
                 <span>Cookie Policy</span>
              </div>
           </div>
        </div>
      </footer>
    </>
  );
}
