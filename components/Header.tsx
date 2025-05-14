'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import Button from './ui/Button';
import { NavigationItem } from '../types';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';

const navigation: NavigationItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Shop', href: '/shop' },
  { title: 'Book Artist', href: '/booking' },
  { title: 'Classes', href: '/classes' },
  { title: 'About Us', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTextColor = isScrolled ? 'text-gray-800' : 'text-gray-800';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-brown-800">
            Mehandi Mansion
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm font-medium hover:text-brown-700 transition-colors ${navTextColor}`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* {[Search, User].map((Icon, i) => (
              <button key={i} className={`p-1 rounded-full ${navTextColor}`}>
                <Icon size={20} />
              </button>
            ))} */}

            <div className="relative p-2 hover:bg-gray-100 rounded-full">
              {/* <button className={`p-1 rounded-full ${navTextColor}`}>
                <ShoppingCart size={20} />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brown-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )} */}
              <Link href="/cart" >
                <ShoppingCart size={20}/>
              </Link>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-1 bg-red-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
            </div>

            <Link href="/wishlist" className="p-2 hover:bg-gray-100 rounded-full">
                <Heart size={20} />
            </Link>

            <div className="hidden md:block">
              <Button variant="primary" size="sm">
                Book Mehandi Artist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className={navTextColor} /> : <Menu size={24} className={navTextColor} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-20">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 text-sm font-medium hover:text-brown-700"
              >
                {item.title}
              </a>
            ))}
            <Button variant="primary" size="sm" className="mt-4">
              Book Mehandi Artist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
