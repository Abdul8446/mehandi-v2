'use client'

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

// Sample product data
// const products: Product[] = [
//   {
//     id: '1',
//     name: 'Natural Rajasthani Henna Powder',
//     price: 12.99,
//     image: 'https://images.pexels.com/photos/6635192/pexels-photo-6635192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Henna Powders',
//     description: 'Premium quality natural henna powder sourced from Rajasthan, known for its rich color and cooling properties.',
//     isFeatured: true
//   },
//   {
//     id: '2',
//     name: 'Ready-to-Use Bridal Henna Cones (Pack of 3)',
//     price: 24.99,
//     image: 'https://images.pexels.com/photos/10117090/pexels-photo-10117090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Ready-to-use Cones',
//     description: 'Pre-mixed henna cones perfect for intricate bridal designs. Long-lasting color guaranteed.',
//     isFeatured: true
//   },
//   {
//     id: '3',
//     name: 'Complete Mehandi Kit for Beginners',
//     price: 34.99,
//     image: 'https://images.pexels.com/photos/8472874/pexels-photo-8472874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Gift Kits',
//     description: 'Everything a beginner needs to start their mehandi journey. Includes powders, applicators, and design book.',
//     isNew: true,
//     isFeatured: true
//   },
//   {
//     id: '4',
//     name: 'Organic Eucalyptus Aftercare Oil',
//     price: 18.99,
//     image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Accessories',
//     description: 'Organic oil blend to enhance and preserve your mehandi design, promoting rich color development.',
//     isFeatured: true
//   },
//   {
//     id: '5',
//     name: 'Traditional Arabic Henna Powder',
//     price: 14.99,
//     image: 'https://images.pexels.com/photos/7069063/pexels-photo-7069063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Henna Powders',
//     description: 'Fine quality henna powder perfect for bold Arabic designs with deep color payoff.',
//   },
//   {
//     id: '6',
//     name: 'Designer Applicator Bottles (Set of 5)',
//     price: 15.99,
//     image: 'https://images.pexels.com/photos/12230444/pexels-photo-12230444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Accessories',
//     description: 'Precision applicator bottles for detailed work, featuring different tip sizes for varied designs.',
//   },
//   {
//     id: '7',
//     name: 'Wedding Special Mehandi Gift Box',
//     price: 49.99,
//     image: 'https://images.pexels.com/photos/6692132/pexels-photo-6692132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Gift Kits',
//     description: 'Luxury gift box with premium henna products for the bride-to-be, including special bridal designs guidebook.',
//     isNew: true
//   },
//   {
//     id: '8',
//     name: 'Ready-to-Use Black Henna Cones',
//     price: 10.99,
//     image: 'https://images.pexels.com/photos/8472869/pexels-photo-8472869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     category: 'Ready-to-use Cones',
//     description: 'Deep black henna cones for dramatic designs that stand out. Perfect for special occasions.',
//   }
//   // ... (other product data remains the same)
// ];

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Natural Henna Powder',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/7446143/pexels-photo-7446143.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Henna Powder',
    description: 'Premium quality natural henna powder for rich color',
    rating: 4.8,
    reviews: 124,
    isFeatured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Bridal Mehandi Stencil Kit',
    price: 499,
    image: 'https://images.pexels.com/photos/7446141/pexels-photo-7446141.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Stencils',
    description: 'Complete stencil kit for bridal designs',
    rating: 4.6,
    reviews: 89,
    isNew: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Organic Henna Cones (Pack of 12)',
    price: 399,
    image: 'https://images.pexels.com/photos/7446142/pexels-photo-7446142.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Henna Cones',
    description: 'Ready-to-use organic henna cones',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '4',
    name: 'Professional Mehandi Application Kit',
    price: 799,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/7446144/pexels-photo-7446144.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Kits',
    description: 'Complete professional application kit',
    rating: 4.9,
    reviews: 78,
    isFeatured: true,
    inStock: true
  },
  {
    id: '5',
    name: 'Arabic Design Henna Stencils',
    price: 349,
    image: 'https://images.pexels.com/photos/7446145/pexels-photo-7446145.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Stencils',
    description: 'Traditional Arabic design stencils',
    rating: 4.5,
    reviews: 62,
    inStock: false
  },
  {
    id: '6',
    name: 'Black Henna Cones (Pack of 6)',
    price: 299,
    image: 'https://images.pexels.com/photos/7446146/pexels-photo-7446146.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Henna Cones',
    description: 'Special black henna cones',
    rating: 4.3,
    reviews: 45,
    inStock: false
  },
  {
    id: '7',
    name: 'Mehandi Design Book - 500 Patterns',
    price: 599,
    image: 'https://images.pexels.com/photos/7446147/pexels-photo-7446147.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Books',
    description: 'Comprehensive design pattern book',
    rating: 4.8,
    reviews: 112,
    isNew: true,
    inStock: true
  },
  {
    id: '8',
    name: 'Bridal Mehandi Starter Kit',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/7446148/pexels-photo-7446148.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Kits',
    description: 'Premium bridal starter kit',
    rating: 4.9,
    reviews: 87,
    isFeatured: true,
    inStock: true
  }
];

const Shop2 = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  console.log(filteredProducts)

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    }
  });

  // Categories for filtering
  const categories = ['Henna Powders', 'Ready-to-use Cones', 'Gift Kits', 'Accessories'];

  return (
    <>
      <Head>
        <title>Mehandi Shop | Premium Henna Products</title>
        <meta name="description" content="Discover our premium range of natural henna products and accessories for beautiful designs" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {/* Hero Banner */}
          <div className="bg-amber-800 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Products</h1>
              <p className="max-w-2xl mx-auto">
                Discover our premium range of natural henna products and accessories,
                crafted with care for the most beautiful designs.
              </p>
            </div>
          </div>

          {/* Shop Section */}
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row">
              {/* Filters - Mobile Toggle */}
              <div className="md:hidden mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-md text-amber-800"
                  aria-expanded={showFilters}
                  aria-controls="filters-sidebar"
                >
                  <Filter size={18} />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>

              {/* Filters Sidebar */}
              <div 
                id="filters-sidebar"
                className={`md:w-1/4 lg:w-1/5 md:pr-8 ${showFilters ? 'block' : 'hidden md:block'}`}
              >
                <div className="sticky top-24">
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={category}
                            name="category"
                            className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                          />
                          <label htmlFor={category} className="ml-2 text-sm text-gray-700">{category}</label>
                        </div>
                      ))}
                      <div className="flex items-center mt-2">
                        <input
                          type="radio"
                          id="all-categories"
                          name="category"
                          className="h-4 w-4 text-amber-600 focus:ring-amber-500"
                          checked={selectedCategory === null}
                          onChange={() => setSelectedCategory(null)}
                        />
                        <label htmlFor="all-categories" className="ml-2 text-sm text-gray-700">Show All</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">${priceRange[0]}</span>
                        <span className="text-sm text-gray-600">${priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setPriceRange([0, 100]);
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="md:w-3/4 lg:w-4/5">
                {/* Sort Options */}
                <div className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-gray-200">
                  <p className="text-gray-600 text-sm mb-4 sm:mb-0">
                    Showing {sortedProducts.length} products
                  </p>
                  <div className="flex items-center">
                    <SlidersHorizontal size={18} className="text-gray-500 mr-2" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-amber-500"
                      aria-label="Sort products by"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Empty State */}
                {sortedProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">No products match your selected filters.</p>
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setPriceRange([0, 100]);
                      }}
                      className="text-amber-700 underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Shop2;