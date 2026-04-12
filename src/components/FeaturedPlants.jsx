import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Monstera from "../assets/Monstera.jpg";
import Ficus from "../assets/Ficus.jpg";
import Snake from "../assets/Snake.jpg";
import Calathea from "../assets/Calathea.jpg";

const plants = [
  { id: 1, name: 'Monstera Deliciosa', price: '$45', image: Monstera },
  { id: 2, name: 'Ficus Lyrata', price: '$65', image: Ficus },
  { id: 3, name: 'Snake Plant', price: '$35', image: Snake },
  { id: 4, name: 'Calathea Orbifolia', price: '$50', image: Calathea }
];

export default function FeaturedPlants() {
  return (
    <>
      <section className="py-16 border-t border-[#8b9d77]/20">
         <div className="container mx-auto px-6 max-w-7xl flex flex-wrap justify-center gap-8">
            {['Flowering Plants', 'Succulents', 'Ferns', 'Cacti', 'Air Purifying'].map(category => (
               <a key={category} href="#" className="text-lg font-medium text-gray-500 hover:text-[#2d5a27] hover:underline decoration-2 underline-offset-8 transition-all">
                 {category}
               </a>
            ))}
         </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2d5a27] mb-4">Featured Plants</h2>
              <p className="text-gray-600 text-lg">Our most popular green friends perfectly suited for any indoor environment. Easy to care for and beautiful to look at.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#e5b181] font-bold hover:text-[#d49a65] transition-colors whitespace-nowrap group text-lg">
              View Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {plants.map((plant) => (
              <div key={plant.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 bg-gray-50 aspect-[3/4]">
                  <img 
                    src={plant.image} 
                    alt={plant.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-6 left-0 w-full flex justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button className="bg-white/90 backdrop-blur text-[#2d5a27] font-bold px-8 py-3 rounded-full shadow-xl hover:bg-[#2d5a27] hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1 leading-tight">{plant.name}</h3>
                    <div className="flex items-center gap-1 text-[#e5b181]">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-gray-400 text-xs ml-1">(42)</span>
                    </div>
                  </div>
                  <span className="font-bold text-[#2d5a27] text-xl">{plant.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
