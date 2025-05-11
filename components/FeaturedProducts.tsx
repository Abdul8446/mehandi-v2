'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Natural Rajasthani Henna Powder',
    price: 12.99,
    image: 'https://images.pexels.com/photos/6635192/pexels-photo-6635192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Henna Powders',
    description: 'Premium quality natural henna powder sourced from Rajasthan, known for its rich color and cooling properties.',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Ready-to-Use Bridal Henna Cones (Pack of 3)',
    price: 24.99,
    image: 'https://images.pexels.com/photos/10117090/pexels-photo-10117090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Ready-to-use Cones',
    description: 'Pre-mixed henna cones perfect for intricate bridal designs. Long-lasting color guaranteed.',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Complete Mehandi Kit for Beginners',
    price: 34.99,
    image: 'https://images.pexels.com/photos/8472874/pexels-photo-8472874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Gift Kits',
    description: 'Everything a beginner needs to start their mehandi journey. Includes powders, applicators, and design book.',
    isNew: true,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Organic Eucalyptus Aftercare Oil',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Accessories',
    description: 'Organic oil blend to enhance and preserve your mehandi design, promoting rich color development.',
    isFeatured: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-amber-900 mb-4">Our Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-selected premium henna products, crafted with the finest natural ingredients
            for the most beautiful and long-lasting designs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/shop" 
            className="inline-block px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
