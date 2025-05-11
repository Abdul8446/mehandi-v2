'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, MessageCircle as WhatsApp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-brown-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Mehandi Mansion</h3>
            <p className="text-brown-200 mb-4">
              Premium henna products and professional mehandi artist services for all your special occasions.
            </p>
            <div className="flex space-x-4 text-brown-200">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-brown-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-brown-200 hover:text-white transition-colors">Shop</Link></li>
              <li><Link href="/booking" className="text-brown-200 hover:text-white transition-colors">Book Artist</Link></li>
              <li><Link href="/about" className="text-brown-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-brown-200 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-brown-200 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-brown-200 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="text-brown-200 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/track" className="text-brown-200 hover:text-white transition-colors">Track Your Order</Link></li>
              <li><Link href="/privacy" className="text-brown-200 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* WhatsApp Updates */}
          <div>
            <h4 className="text-lg font-medium mb-4">Get Updates on WhatsApp</h4>
            <p className="text-brown-200 mb-4">Stay updated with our latest products and offers.</p>
            <form className="flex flex-col space-y-2">
              <div className="flex items-center bg-brown-800 rounded-md p-2">
                <WhatsApp size={20} className="text-brown-200 mr-2" />
                <input 
                  type="tel" 
                  placeholder="Your WhatsApp number" 
                  className="bg-transparent border-none text-white placeholder-brown-300 focus:outline-none flex-1"
                />
              </div>
              <button 
                type="submit" 
                className="px-4 py-2 bg-sage-700 text-white rounded-md hover:bg-sage-600 transition-colors flex items-center justify-center"
              >
                <WhatsApp size={16} className="mr-2" />
                Subscribe for Updates
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brown-800 mt-12 pt-8 text-center text-brown-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Mehandi Mansion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
