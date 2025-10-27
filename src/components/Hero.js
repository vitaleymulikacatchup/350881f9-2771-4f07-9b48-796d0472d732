import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white product-section relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="product-title text-white mb-2">
          iPhone 17 Pro
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          All out Pro.
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
      
      {/* iPhone Image */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-orange-600 rounded-3xl transform rotate-12 scale-75">
            {/* Camera module */}
            <div className="absolute top-8 left-8 right-8">
              <div className="bg-black bg-opacity-20 rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black rounded-full aspect-square"></div>
                  <div className="bg-black rounded-full aspect-square"></div>
                  <div className="bg-black rounded-full aspect-square"></div>
                  <div className="bg-white bg-opacity-30 rounded-full aspect-square"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;