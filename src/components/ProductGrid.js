import React from 'react';

const ProductGrid = () => {
  return (
    <div className="bg-white">
      {/* iPhone Air Section */}
      <section className="bg-apple-light-gray product-section">
        <div className="relative z-10">
          <h2 className="product-title text-black">
            iPhone Air
          </h2>
          <p className="product-subtitle text-gray-600">
            The thinnest iPhone ever.<br />
            With the power of pro inside.
          </p>
          <div className="product-buttons">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary">
              Buy
            </button>
          </div>
        </div>
        
        {/* iPhone Air Image */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gray-200 rounded-lg h-4 w-full max-w-md mx-auto shadow-lg">
              <div className="absolute -top-1 -bottom-1 left-4 right-4 bg-gray-300 rounded-lg"></div>
            </div>
            {/* Hand holding the phone */}
            <div className="absolute -right-20 top-0 w-40 h-20 bg-gradient-to-l from-amber-100 to-amber-200 rounded-full transform rotate-12 opacity-80"></div>
          </div>
        </div>
      </section>

      {/* MacBook Pro Section */}
      <section className="bg-black text-white product-section">
        <div className="relative z-10">
          <h2 className="product-title text-white">
            MacBook Pro 14"
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Supercharged by M5.
          </p>
          <div className="product-buttons">
            <button className="apple-button-primary">
              Learn more
            </button>
            <button className="apple-button-secondary">
              Buy
            </button>
          </div>
        </div>
        
        {/* MacBook Image */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="relative">
            <div className="bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg h-64 w-80 mx-auto transform perspective-1000 rotate-x-12">
              <div className="bg-black rounded-lg h-48 w-72 mx-auto mt-4"></div>
            </div>
            <div className="bg-gradient-to-b from-gray-400 to-gray-600 h-4 w-80 mx-auto rounded-b-lg"></div>
          </div>
        </div>
      </section>

      {/* Product Grid - 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Apple Watch */}
        <section className="bg-apple-light-gray product-section min-h-[60vh]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              WATCH SERIES 11
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              The ultimate way to watch your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
          
          {/* Watch Image */}
          <div className="relative w-full max-w-xs mx-auto">
            <div className="bg-blue-600 rounded-2xl w-32 h-40 mx-auto relative">
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-black rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-400 rounded-full"></div>
            </div>
            <div className="bg-pink-200 rounded-full w-40 h-8 mx-auto mt-2"></div>
          </div>
        </section>

        {/* iPad Pro */}
        <section className="bg-black text-white product-section min-h-[60vh]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
              iPad Pro
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Advanced AI performance.<br />
              All game-changing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
          
          {/* iPad Image */}
          <div className="relative w-full max-w-xs mx-auto">
            <div className="bg-gray-800 rounded-lg w-48 h-64 mx-auto relative">
              <div className="absolute inset-2 bg-black rounded-lg"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-400 rounded-full"></div>
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* AirPods Pro 3 */}
        <section className="bg-apple-light-gray product-section min-h-[60vh]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              AirPods Pro 3
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              The world's best in-ear<br />
              Active Noise Cancellation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* MacBook Air */}
        <section className="bg-apple-light-gray product-section min-h-[60vh]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              MacBook Air
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Sky high performance with M4.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* Trade In */}
        <section className="bg-apple-light-gray product-section min-h-[60vh]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              Trade In
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Get $180-$800 in credit when you trade in<br />
              iPhone 12 or higher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Get your estimate
              </button>
            </div>
          </div>
        </section>

        {/* Apple Card */}
        <section className="bg-apple-light-gray product-section min-h-[60vh]">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2">
              Card
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Get up to 3% Daily Cash back<br />
              with every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Apply now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductGrid;