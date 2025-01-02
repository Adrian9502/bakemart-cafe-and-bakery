import React, { useState } from 'react';
import { ChevronRight, Clock, MapPin, Phone, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

const products = [
  { name: 'Artisan Sourdough', price: '$6.99', description: 'Freshly baked traditional sourdough' },
  { name: 'Chocolate Croissant', price: '$4.50', description: 'Buttery croissant with dark chocolate' },
  { name: 'Blueberry Muffin', price: '$3.99', description: 'Made with fresh wild blueberries' },
  { name: 'Apple Danish', price: '$4.99', description: 'Flaky pastry with caramelized apples' }
];

const specialties = [
  { name: 'Wedding Cakes', description: 'Custom designed for your special day' },
  { name: 'Birthday Cakes', description: 'Personalized celebrations' },
  { name: 'Seasonal Specials', description: 'Limited time offerings' },
  { name: 'Catering', description: 'Perfect for any event' },
];

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="bg-amber-900 text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">BakeMart</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-amber-300">Home</a>
              <a href="#about" className="hover:text-amber-300">About</a>
              <a href="#products" className="hover:text-amber-300">Products</a>
              <a href="#specialties" className="hover:text-amber-300">Specialties</a>
              <a href="#contact" className="hover:text-amber-300">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 hover:bg-amber-800">Home</a>
                <a href="#about" className="block px-3 py-2 hover:bg-amber-800">About</a>
                <a href="#products" className="block px-3 py-2 hover:bg-amber-800">Products</a>
                <a href="#specialties" className="block px-3 py-2 hover:bg-amber-800">Specialties</a>
                <a href="#contact" className="block px-3 py-2 hover:bg-amber-800">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative h-96 bg-amber-900">
        <img 
          src="/api/placeholder/1200/400" 
          alt="Fresh bakery items" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">BakeMart Cafe & Bakery</h1>
          <p className="text-xl mb-8">Artisanal breads and pastries baked fresh daily</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full flex items-center">
            Order Now <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/api/placeholder/500/300" 
                alt="Our bakery" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since 1995, BakeMart has been serving our community with the finest artisanal breads and pastries. 
                Our passion for baking is reflected in every item we create, using only the highest quality ingredients 
                and time-honored techniques passed down through generations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every morning, our master bakers arrive before dawn to begin their craft, ensuring that you start 
                your day with the freshest baked goods possible. From crusty artisan breads to delicate French pastries, 
                each item is crafted with care and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="products" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={`/api/placeholder/300/200`} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-amber-600 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialties Section */}
      <div id="specialties" className="bg-amber-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src={`/api/placeholder/200/200`} 
                  alt={specialty.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="font-bold text-lg mb-2 text-amber-900">{specialty.name}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">Visit Us Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-amber-700 mr-4" />
              <div>
                <h3 className="font-bold mb-1">Hours</h3>
                <p>Mon-Sat: 7am - 8pm</p>
                <p>Sun: 8am - 6pm</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-amber-700 mr-4" />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p>123 Bakery Street</p>
                <p>Cityville, ST 12345</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-amber-700 mr-4" />
              <div>
                <h3 className="font-bold mb-1">Contact</h3>
                <p>(555) 123-4567</p>
                <p>hello@bakemartcafe.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BakeMart</h3>
              <p className="text-amber-200">Bringing fresh baked goodness to your table every day.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-amber-300">About Us</a></li>
                <li><a href="#products" className="hover:text-amber-300">Products</a></li>
                <li><a href="#specialties" className="hover:text-amber-300">Specialties</a></li>
                <li><a href="#contact" className="hover:text-amber-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>Catering</li>
                <li>Custom Orders</li>
                <li>Corporate Events</li>
                <li>Wedding Cakes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-300"><Facebook /></a>
                <a href="#" className="hover:text-amber-300"><Instagram /></a>
                <a href="#" className="hover:text-amber-300"><Twitter /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center">
            <p>&copy; 2025 BakeMart Cafe & Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;