import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/cartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { cartItems } = useCart();

  return (
    <nav className="bg-gradient-to-r from-amber-100 to-orange-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <a href='/' className="flex items-center space-x-3">
            <div className="flex items-center w-16 space-x-2">
              <img src="/bakemart-logo.png" alt="BakeMart Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-amber-800">BakeMart</span>
              <span className="text-xs playwrite-font text-amber-600 font-medium">Café & Bakery</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden playwrite-font md:flex items-center space-x-8">
            {['Home', 'About', 'Menu', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative font-medium text-amber-900 hover:text-amber-700 transition-colors duration-200 group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
            
            {/* Cart Icon with Counter */}
            <div className="relative">
              <ShoppingCart className="text-amber-800 w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Cart Icon for Mobile */}
            <div className="relative">
              <ShoppingCart className="text-amber-800 w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-amber-800 hover:bg-amber-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="playwrite-font md:hidden border-t border-amber-100">
            <div className="py-2 space-y-1">
              {['Home', 'About', 'Menu', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-amber-900 hover:bg-amber-100 transition-colors duration-200 rounded-lg"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;