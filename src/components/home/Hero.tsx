import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 pt-32 pb-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className={`w-full md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Handcrafted{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500">
              Artistry
            </span>{' '}
            For Your Unique Style
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover our collection of exquisite handmade jewelry pieces, each
            telling a story of craftsmanship and elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Shop Collection</Button>
            <Button variant="outline">Our Story</Button>
          </div>
        </div>
        <div className={`w-full md:w-1/2 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-200 to-pink-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1974&auto=format&fit=crop" alt="Elegant handcrafted necklace" className="relative z-10 rounded-xl object-cover w-full h-full shadow-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center shadow-lg p-2 animate-float">
              <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                <span className="text-amber-800 text-sm font-medium">
                  Handcrafted with love
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-10 h-10 border-2 border-amber-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;