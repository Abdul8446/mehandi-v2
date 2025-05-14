'use client';

import React from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import Image from 'next/image';
import { Product } from '../types';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
  };

  const handleWishlist = () => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
  };

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      {/* Product Labels */}
      <div className="absolute top-2 left-2 z-10 flex flex-col space-y-1">
        {product.isNew && (
          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
            New
          </span>
        )}
        {product.isFeatured && (
          <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Sale
          </span>
        )}
        {/* {!product.inStock && (
          <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </span>
        )} */}
      </div>
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

         {/* Wishlist Button */}
        <button 
          onClick={handleWishlist}
          className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-amber-50 transition-colors"
        >
          <Heart 
            size={16} 
            className={isInWishlist(product._id) ? 'text-amber-600 fill-amber-600' : 'text-gray-700'} 
          />       
        </button>
      
      </div>
      <div className='flex flex-col flex-grow'>
        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center mb-1">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  fill={product.rating && star <= Math.floor(product.rating) ? "#f59e0b" : "#d1d5db"}
                  className={product.rating && star <= product.rating ? "" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
          {/* <p className="text-amber-800 font-medium">${product.price.toFixed(2)}</p> */}
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>
        <div className="flex items-center justify-between mt-auto px-4 pb-4">
          <div>
            {product.originalPrice ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-amber-700">₹{product.price}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-amber-700">₹{product.price}</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center justify-center px-3 py-2 rounded-md text-sm ${
              product.inStock
                ? 'bg-amber-600 text-white hover:bg-amber-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={16} className="mr-1" />
            {product.inStock ? 'Add' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;