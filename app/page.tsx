
// app/page.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
// import AdBanner from '../components/AdBanner';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import ArtistShowcase from '../components/ArtistShowcase';
import TestimonialSection from '../components/TestimonialSection';
// import BlogSection from '../components/BlogSection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      <div className="bg-avocado-100 text-amber-600 p-4">Tailwind Test</div>
        {/* <AdBanner /> */}
        <CategorySection />
        <FeaturedProducts />
        <ArtistShowcase />
        <TestimonialSection />
        {/* <BlogSection /> */}
      </main>
      <Footer />
    </div>
  );
}

