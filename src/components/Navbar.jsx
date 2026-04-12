import React from 'react';
import { Leaf, Search, ShoppingCart } from 'lucide-react';

export default function Navbar({ onSignupClick = () => {}, onLoginClick = () => {} }) {
  return (
    <nav className="fixed w-full z-50 bg-[#f9faec]/90 backdrop-blur-md border-b border-[#8b9d77]/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-2 text-[#2d5a27] cursor-pointer">
          <Leaf className="w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter">Verdant.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
          <a href="#" className="text-[#2d5a27]">Home</a>
          <a href="#" className="hover:text-[#2d5a27] transition-colors">Shop All</a>
          <a href="#" className="hover:text-[#2d5a27] transition-colors">Care Guide</a>
          <a href="#" className="hover:text-[#2d5a27] transition-colors">About Us</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-[#8b9d77]/20 rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5 text-gray-700 hover:text-[#2d5a27]" />
          </button>
          <button className="p-2 hover:bg-[#8b9d77]/20 rounded-full transition-colors relative">
            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-[#2d5a27]" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#e5b181] text-[10px] text-white rounded-full flex items-center justify-center font-bold" />
          </button>
          <button
            type="button"
            onClick={onSignupClick}
            className="rounded-full border border-[#2d5a27] bg-white px-5 py-2 text-sm font-semibold text-[#2d5a27] transition hover:bg-[#eef5e8]"
          >
            Signup
          </button>
          <button
            type="button"
            onClick={onLoginClick}
            className="rounded-full bg-[#2d5a27] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#3b6a33]"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
