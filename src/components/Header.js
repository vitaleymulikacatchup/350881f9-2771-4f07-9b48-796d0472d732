import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <>
      {/* Top banner */}
      <div className="bg-apple-gray text-white text-sm py-2 px-4 text-center">
        <span>Vi är stolt över att erbjuda för att vi så snabbt som möjligt ska få ut vårt innehåll online.</span>
        <button className="ml-4 text-blue-400 hover:underline">Fortsätt</button>
        <button className="ml-2 text-white hover:text-gray-300">
          <X className="w-4 h-4 inline" />
        </button>
      </div>
      
      <header className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            {/* Apple Logo */}
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-gray-300">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button 
                className="md:hidden text-white hover:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-95 absolute left-0 right-0 top-full">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-white text-lg hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;