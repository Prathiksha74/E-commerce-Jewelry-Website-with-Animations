import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import TestimonialSection from '../components/home/TestimonialSection';
const Home = () => {
  return <main>
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <TestimonialSection />
    </main>;
};
export default Home;