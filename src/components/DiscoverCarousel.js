import React, { useEffect, useState } from "react";
import dress from "./assets/dress.jpg"; // Main image for all slides

const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define an array of images for the carousel
  const images = [
    dress, // Slide 1
    dress, // Slide 2
    dress, // Slide 3
  ];

  // Change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative bg-white h-64 rounded shadow-md overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((imgSrc, index) => (
          <div key={index} className="w-full flex items-center justify-center">
            <img
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
