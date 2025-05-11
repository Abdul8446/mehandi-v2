'use client';

import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import Image from 'next/image';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-2">
            <button className="p-2 bg-white rounded-full text-amber-800 hover:bg-amber-800 hover:text-white transition-colors">
              <ShoppingCart size={18} />
            </button>
            <button className="p-2 bg-white rounded-full text-amber-800 hover:bg-amber-800 hover:text-white transition-colors">
              <Heart size={18} />
            </button>
            <button className="p-2 bg-white rounded-full text-amber-800 hover:bg-amber-800 hover:text-white transition-colors">
              <Eye size={18} />
            </button>
          </div>
        </div>
        
        {/* Badge */}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">New</span>
        )}
        {product.isFeatured && !product.isNew && (
          <span className="absolute top-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">Featured</span>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-amber-800 font-medium">${product.price.toFixed(2)}</p>
        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;