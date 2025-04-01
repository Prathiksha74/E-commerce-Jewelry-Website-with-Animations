import React, { useEffect, useState } from 'react';
const categories = [{
  id: 'rings',
  name: 'Rings',
  image: 'https://images.unsplash.com/photo-1598560917505-59c5a65db959?q=80&w=1780&auto=format&fit=crop',
  count: 42
}, {
  id: 'necklaces',
  name: 'Necklaces',
  image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1770&auto=format&fit=crop',
  count: 38
}, {
  id: 'earrings',
  name: 'Earrings',
  image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964&auto=format&fit=crop',
  count: 56
}];
const CategorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    const element = document.getElementById('category-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <section id="category-section" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our diverse collection of handmade jewelry categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => <div key={category.id} className={`transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="group relative h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
                <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-80">{category.count} pieces</p>
                  <div className="mt-4 overflow-hidden h-0.5">
                    <div className="w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CategorySection;