import React, { useState, useEffect } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533727937484-e553c064d81a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center space-y-6">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-blue-400 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>

          {/* Title */}
          <h1 className="text-5xl font-bold">Welcome to Parking App</h1>

          {/* Subtitle */}
          <p className="text-xl">Find and reserve parking slots easily.</p>

          {/* Call-to-Action Button */}
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Select a Location</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Choose from available parking locations near you.
            </p>
          </div>

          {/* Repeat for Steps 2 and 3 */}
        </div>
      </div>
    </div>
  );
};

export default Home;