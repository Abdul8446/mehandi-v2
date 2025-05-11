'use client';

import Image from 'next/image';
import Button from './ui/Button';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/10574055/pexels-photo-10574055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mehandi background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/70 to-brown-800/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Artistry in Every<br />Application
          </h1>
          <p className="text-lg md:text-xl mb-8 text-brown-100">
            Premium henna products and professional artists for your most beautiful moments.
            Crafted with care, designed with passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Shop Collections
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Book an Artist
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFFFFF"
            d="M41.3,-69.8C53.4,-63.5,63.1,-51.8,70.4,-38.2C77.7,-24.5,82.5,-9,80.2,5.4C77.9,19.7,68.5,33,57.8,44.2C47.1,55.4,35,64.5,21.3,68.8C7.6,73.1,-7.6,72.5,-21.2,67.7C-34.9,62.9,-47,53.8,-57.1,42.5C-67.3,31.1,-75.6,17.4,-77.8,2.2C-80,-13,-76.1,-29.4,-67.7,-42.7C-59.2,-56,-46.2,-66.1,-32.5,-71.7C-18.8,-77.3,-4.7,-78.4,8.5,-73.1C21.6,-67.9,43.3,-56.3,41.3,-69.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
