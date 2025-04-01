import React, { useEffect, useState } from 'react';
import ProductCard from '../ui/ProductCard';
const products = [{
  id: '1',
  name: 'Celestial Diamond Ring',
  price: 1299.99,
  category: 'Rings',
  image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1770&auto=format&fit=crop',
  isNew: true,
  isFeatured: true
}, {
  id: '2',
  name: 'Pearl Cascade Earrings',
  price: 349.99,
  category: 'Earrings',
  image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964&auto=format&fit=crop',
  isFeatured: true
}, {
  id: '3',
  name: 'Emerald Teardrop Necklace',
  price: 899.99,
  category: 'Necklaces',
  image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop',
  isNew: true
}, {
  id: '4',
  name: 'Golden Twist Bracelet',
  price: 599.99,
  category: 'Bracelets',
  image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1770&auto=format&fit=crop',
  isFeatured: true
}];
const FeaturedProducts = () => {
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
    const element = document.getElementById('featured-products');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <section id="featured-products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our most sought-after pieces, handcrafted with precision
            and passion
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => <div key={product.id} className={`transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <ProductCard {...product} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;