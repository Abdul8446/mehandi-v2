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


const products: Product[] = [
  {
    _id: '1',
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
    _id: '2',
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
    _id: '3',
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
    _id: '4',
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
    _id: '5',
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
    _id: '6',
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
    _id: '7',
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
    _id: '8',
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

const Shop = () => {
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
  const categories = ['Henna Powder', 'Ready-to-use Cones', 'Gift Kits', 'Accessories'];

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
                      {[...new Set(products.map(product => product.category))].map(category => (
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
                        <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
                        <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setPriceRange([0, 10000]);
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
                    <ProductCard key={product._id} product={product} />
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
      </div>
    </>
  );
};

export default Shop;


// 'use client'

// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Filter, SlidersHorizontal, Star, Heart, ShoppingCart } from 'lucide-react';
// import { useCart } from '../../contexts/CartContext';
// import { useWishlist } from '../../contexts/WishlistContext';
// import { Product } from '@/types';

// // type Product = {
// //   id: string;
// //   name: string;
// //   price: number;
// //   originalPrice?: number;
// //   image: string;
// //   category: string;
// //   description: string;
// //   rating?: number;
// //   reviews?: number;
// //   isFeatured?: boolean;
// //   isNew?: boolean;
// //   inStock?: boolean;
// // };

// const products: Product[] = [
//   {
//     id: '1',
//     name: 'Premium Natural Henna Powder',
//     price: 299,
//     originalPrice: 399,
//     image: 'https://images.pexels.com/photos/7446143/pexels-photo-7446143.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Henna Powder',
//     description: 'Premium quality natural henna powder for rich color',
//     rating: 4.8,
//     reviews: 124,
//     isFeatured: true,
//     inStock: true
//   },
//   {
//     id: '2',
//     name: 'Bridal Mehandi Stencil Kit',
//     price: 499,
//     image: 'https://images.pexels.com/photos/7446141/pexels-photo-7446141.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Stencils',
//     description: 'Complete stencil kit for bridal designs',
//     rating: 4.6,
//     reviews: 89,
//     isNew: true,
//     inStock: true
//   },
//   {
//     id: '3',
//     name: 'Organic Henna Cones (Pack of 12)',
//     price: 399,
//     image: 'https://images.pexels.com/photos/7446142/pexels-photo-7446142.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Henna Cones',
//     description: 'Ready-to-use organic henna cones',
//     rating: 4.7,
//     reviews: 156,
//     inStock: true
//   },
//   {
//     id: '4',
//     name: 'Professional Mehandi Application Kit',
//     price: 799,
//     originalPrice: 999,
//     image: 'https://images.pexels.com/photos/7446144/pexels-photo-7446144.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Kits',
//     description: 'Complete professional application kit',
//     rating: 4.9,
//     reviews: 78,
//     isFeatured: true,
//     inStock: true
//   },
//   {
//     id: '5',
//     name: 'Arabic Design Henna Stencils',
//     price: 349,
//     image: 'https://images.pexels.com/photos/7446145/pexels-photo-7446145.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Stencils',
//     description: 'Traditional Arabic design stencils',
//     rating: 4.5,
//     reviews: 62,
//     inStock: false
//   },
//   {
//     id: '6',
//     name: 'Black Henna Cones (Pack of 6)',
//     price: 299,
//     image: 'https://images.pexels.com/photos/7446146/pexels-photo-7446146.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Henna Cones',
//     description: 'Special black henna cones',
//     rating: 4.3,
//     reviews: 45,
//     inStock: false
//   },
//   {
//     id: '7',
//     name: 'Mehandi Design Book - 500 Patterns',
//     price: 599,
//     image: 'https://images.pexels.com/photos/7446147/pexels-photo-7446147.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Books',
//     description: 'Comprehensive design pattern book',
//     rating: 4.8,
//     reviews: 112,
//     isNew: true,
//     inStock: true
//   },
//   {
//     id: '8',
//     name: 'Bridal Mehandi Starter Kit',
//     price: 1299,
//     originalPrice: 1599,
//     image: 'https://images.pexels.com/photos/7446148/pexels-photo-7446148.jpeg?auto=compress&cs=tinysrgb&w=600',
//     category: 'Kits',
//     description: 'Premium bridal starter kit',
//     rating: 4.9,
//     reviews: 87,
//     isFeatured: true,
//     inStock: true
//   }
// ];

// const categories = [
//   { id: 'all', name: 'All Products' },
//   { id: 'henna-powder', name: 'Henna Powder' },
//   { id: 'henna-cones', name: 'Henna Cones' },
//   { id: 'stencils', name: 'Stencils' },
//   { id: 'kits', name: 'Kits' },
//   { id: 'books', name: 'Books' }
// ];

// const ProductCard = ({ product }: { product: Product }) => {
//   const { addToCart } = useCart();
//   const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

//   const handleAddToCart = () => {
//     if (product.inStock) {
//       addToCart({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//         quantity: 1
//       });
//     }
//   };

//   const handleWishlist = () => {
//     if (isInWishlist(product.id)) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image
//       });
//     }
//   };

//   return (
//     <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
//       {/* Product Labels */}
//       <div className="absolute top-2 left-2 z-10 flex flex-col space-y-1">
//         {product.isNew && (
//           <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
//             New
//           </span>
//         )}
//         {product.isFeatured && (
//           <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
//             Featured
//           </span>
//         )}
//         {product.originalPrice && (
//           <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
//             Sale
//           </span>
//         )}
//         {!product.inStock && (
//           <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
//             Out of Stock
//           </span>
//         )}
//       </div>

//       {/* Wishlist Button */}
//       <button 
//         onClick={handleWishlist}
//         className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-amber-50 transition-colors"
//       >
//         <Heart 
//           size={16} 
//           className={isInWishlist(product.id) ? 'text-amber-600 fill-amber-600' : 'text-gray-700'} 
//         />
//       </button>

//       {/* Product Image */}
//       <Link href={`/product/${product.id}`} className="block relative h-48 overflow-hidden">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </Link>

//       {/* Product Info */}
//       <div className="p-4">
//         <div className="flex items-center mb-1">
//           <div className="flex text-amber-400">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Star
//                 key={star}
//                 size={14}
//                 fill={product.rating && star <= Math.floor(product.rating) ? "#f59e0b" : "#d1d5db"}
//                 className={product.rating && star <= product.rating ? "" : "text-gray-300"}
//               />
//             ))}
//           </div>
//           <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
//         </div>

//         <h3 className="font-medium text-gray-900 mb-1">
//           <Link href={`/product/${product.id}`} className="hover:text-amber-700">
//             {product.name}
//           </Link>
//         </h3>

//         <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>

//         <div className="flex items-center justify-between">
//           <div>
//             {product.originalPrice ? (
//               <div className="flex items-center">
//                 <span className="text-lg font-bold text-amber-700">₹{product.price}</span>
//                 <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
//               </div>
//             ) : (
//               <span className="text-lg font-bold text-amber-700">₹{product.price}</span>
//             )}
//           </div>

//           <button
//             onClick={handleAddToCart}
//             disabled={!product.inStock}
//             className={`flex items-center justify-center px-3 py-2 rounded-md text-sm ${
//               product.inStock
//                 ? 'bg-amber-600 text-white hover:bg-amber-700'
//                 : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//             }`}
//           >
//             <ShoppingCart size={16} className="mr-1" />
//             {product.inStock ? 'Add' : 'Sold Out'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Shop = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
//   const [sortBy, setSortBy] = useState<string>('featured');

//   // Filter products based on selected filters
//   const filteredProducts = products.filter(product => {
//     if (selectedCategory && selectedCategory !== 'all' && 
//         product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
//       return false;
//     }
//     if (product.price < priceRange[0] || product.price > priceRange[1]) {
//       return false;
//     }
//     return true;
//   });

//   // Sort products based on selected sort option
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case 'price-low':
//         return a.price - b.price;
//       case 'price-high':
//         return b.price - a.price;
//       case 'rating':
//         return (b.rating || 0) - (a.rating || 0);
//       case 'newest':
//         return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
//       default: // 'featured'
//         return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
//     }
//   });

//   return (
//     <>
//       <Head>
//         <title>Mehandi Shop | Premium Henna Products</title>
//         <meta name="description" content="Discover our premium range of natural henna products and accessories for beautiful designs" />
//       </Head>
      
//       <div className="min-h-screen flex flex-col bg-gray-50">
//         <main className="flex-grow pt-16">
//           {/* Hero Banner */}
//           <div className="bg-amber-800 text-white py-16">
//             <div className="container mx-auto px-4 text-center">
//               <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Products</h1>
//               <p className="max-w-2xl mx-auto">
//                 Discover our premium range of natural henna products and accessories,
//                 crafted with care for the most beautiful designs.
//               </p>
//             </div>
//           </div>

//           {/* Shop Section */}
//           <div className="container mx-auto px-4 py-12">
//             <div className="flex flex-col md:flex-row">
//               {/* Filters - Mobile Toggle */}
//               <div className="md:hidden mb-6">
//                 <button
//                   onClick={() => setShowFilters(!showFilters)}
//                   className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-md text-amber-800"
//                   aria-expanded={showFilters}
//                   aria-controls="filters-sidebar"
//                 >
//                   <Filter size={18} />
//                   {showFilters ? 'Hide Filters' : 'Show Filters'}
//                 </button>
//               </div>

//               {/* Filters Sidebar */}
//               <div 
//                 id="filters-sidebar"
//                 className={`md:w-1/4 lg:w-1/5 md:pr-8 ${showFilters ? 'block' : 'hidden md:block'}`}
//               >
//                 <div className="sticky top-24 bg-white p-4 rounded-lg shadow-sm">
//                   <div className="mb-8">
//                     <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
//                     <div className="space-y-2">
//                       {categories.map(category => (
//                         <div key={category.id} className="flex items-center">
//                           <input
//                             type="radio"
//                             id={category.id}
//                             name="category"
//                             className="h-4 w-4 text-amber-600 focus:ring-amber-500"
//                             checked={selectedCategory === category.id}
//                             onChange={() => setSelectedCategory(category.id)}
//                           />
//                           <label htmlFor={category.id} className="ml-2 text-sm text-gray-700">{category.name}</label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mb-8">
//                     <h3 className="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
//                         <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
//                       </div>
//                       <div className="flex items-center space-x-4">
//                         <input
//                           type="number"
//                           min="0"
//                           max="1500"
//                           value={priceRange[0]}
//                           onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
//                           className="w-20 p-1 border border-gray-300 rounded text-sm"
//                         />
//                         <span>to</span>
//                         <input
//                           type="number"
//                           min="0"
//                           max="1500"
//                           value={priceRange[1]}
//                           onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
//                           className="w-20 p-1 border border-gray-300 rounded text-sm"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => {
//                       setSelectedCategory(null);
//                       setPriceRange([0, 1500]);
//                     }}
//                     className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
//                   >
//                     Clear Filters
//                   </button>
//                 </div>
//               </div>

//               {/* Products Grid */}
//               <div className="md:w-3/4 lg:w-4/5">
//                 {/* Sort Options */}
//                 <div className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-gray-200">
//                   <p className="text-gray-600 text-sm mb-4 sm:mb-0">
//                     Showing {sortedProducts.length} products
//                   </p>
//                   <div className="flex items-center">
//                     <SlidersHorizontal size={18} className="text-gray-500 mr-2" />
//                     <select
//                       value={sortBy}
//                       onChange={(e) => setSortBy(e.target.value)}
//                       className="bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-amber-500"
//                       aria-label="Sort products by"
//                     >
//                       <option value="featured">Featured</option>
//                       <option value="newest">Newest</option>
//                       <option value="price-low">Price: Low to High</option>
//                       <option value="price-high">Price: High to Low</option>
//                       <option value="rating">Highest Rating</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Products */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                   {sortedProducts.map(product => (
//                     <ProductCard key={product.id} product={product} />
//                   ))}
//                 </div>

//                 {/* Empty State */}
//                 {sortedProducts.length === 0 && (
//                   <div className="text-center py-12">
//                     <p className="text-gray-500 mb-4">No products match your selected filters.</p>
//                     <button
//                       onClick={() => {
//                         setSelectedCategory(null);
//                         setPriceRange([0, 1500]);
//                       }}
//                       className="text-amber-700 underline"
//                     >
//                       Clear filters
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Shop;