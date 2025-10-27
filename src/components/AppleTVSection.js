import React from 'react';

const AppleTVSection = () => {
  return (
    <section className="bg-white py-12">
      {/* Apple TV+ Shows Carousel */}
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 px-4">
          {/* Show 1 - Lasso */}
          <div className="flex-shrink-0 w-80 h-48 bg-blue-400 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300">
              <div className="absolute bottom-4 left-4">
                <div className="text-white text-2xl font-bold">LASSO</div>
                <div className="bg-white text-black px-2 py-1 rounded text-sm mt-2">Watch now</div>
              </div>
            </div>
          </div>

          {/* Show 2 - The Last Frontier */}
          <div className="flex-shrink-0 w-80 h-48 bg-gray-600 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-white text-3xl font-bold mb-2">THE LAST</div>
                <div className="text-white text-3xl font-bold">FRONTIER</div>
                <div className="text-white text-sm mt-4">Action • 100 000 viewers last week</div>
                <div className="bg-white text-black px-3 py-1 rounded text-sm mt-3 inline-block">Watch now</div>
              </div>
              {/* Apple TV+ logo */}
              <div className="absolute bottom-4 right-4 text-white text-lg font-semibold">
                tv+
              </div>
            </div>
          </div>

          {/* Show 3 - The Morning Show */}
          <div className="flex-shrink-0 w-80 h-48 bg-yellow-400 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300">
              <div className="absolute bottom-4 left-4">
                <div className="text-black text-2xl font-bold">THE M</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apple TV+ Shows Grid */}
      <div className="mt-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Show thumbnails */}
          <div className="bg-green-500 aspect-video rounded-lg relative">
            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">tv+</div>
          </div>
          <div className="bg-gray-800 aspect-video rounded-lg relative">
            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">tv+</div>
          </div>
          <div className="bg-blue-600 aspect-video rounded-lg relative">
            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">tv+</div>
          </div>
          <div className="bg-purple-600 aspect-video rounded-lg relative">
            <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">tv+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleTVSection;