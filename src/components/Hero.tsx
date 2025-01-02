import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-[60rem] md:h-[70rem]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 blur-[5px]">
        <img
          src="/store-images/Screenshot_20250102-125943.jpg"
          alt="BakeMart Cafe & Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" /> 
      </div>

      {/* Centered Content with Bakery Theme */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wide text-amber-400">
          BakeMart
        </h1>
        <div className="max-w-xl mb-8 space-y-2">
          <p className="text-xl delius-font text-amber-100">THE HOUSE OF SOURDOUGH</p>
          <p className="text-lg playwrite-font text-amber-100">
            Handcrafted Daily, Baked to Perfection
          </p>
        </div>
        
        <button className="bg-amber-500 delius-font hover:bg-amber-600 text-white px-8 py-3 rounded-full flex items-center transition-all duration-300 group">
          Order Now
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
