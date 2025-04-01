import React, { useEffect, useState } from 'react';
const testimonials = [{
  id: '1',
  text: 'The craftsmanship of these pieces is absolutely stunning. I receive compliments every time I wear my necklace!',
  author: 'Sarah Johnson',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
  rating: 5
}, {
  id: '2',
  text: 'I bought earrings as a gift for my wife, and she absolutely loves them. The attention to detail is remarkable.',
  author: 'Michael Chen',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
  rating: 5
}, {
  id: '3',
  text: "The quality is exceptional and worth every penny. These are pieces you'll treasure for a lifetime.",
  author: 'Emma Roberts',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
  rating: 4
}];
const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    const element = document.getElementById('testimonial-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section id="testimonial-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-400 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}>
              {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-amber-50 rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>)}
                    </div>
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center">
                      <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                      <span className="font-medium text-gray-800">
                        {testimonial.author}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-amber-500' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;