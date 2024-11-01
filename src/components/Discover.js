

import React from "react";
import CarouselSlider from "./DiscoverCarousel";
import sweater from "./assets/sweater.jpg";
import dress from "./assets/dress.jpg";
import shoes from "./assets/pair-trainers.jpg";

function Discover() {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-left text-black">
        Discover your next business opportunity
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-1 gap-8 mt-8">
        
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-xl md:text-2xl text-black">Top rankings</h1>
            <p className="text-blue-500 cursor-pointer text-sm md:text-lg">
              view more
            </p>
          </div>
          <div className="bg-white h-32 rounded-lg shadow-md">
            <CarouselSlider />
          </div>
        </div>

        
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-xl md:text-2xl text-black">New Arrivals</h1>
            <p className="text-blue-500 cursor-pointer text-sm md:text-lg">
              view more
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h1 className="text-xl md:text-2xl">
              125,000+ products added today
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <img
                src={sweater}
                alt="Sweater"
                className="object-cover w-full h-40 md:h-48 rounded-lg shadow-md"
              />
              <img
                src={dress}
                alt="Dress"
                className="object-cover w-full h-40 md:h-48 rounded-lg shadow-md"
              />
              <img
                src={dress}
                alt="Dress"
                className="object-cover w-full h-40 md:h-48 rounded-lg shadow-md"
              />
              <img
                src={shoes}
                alt="Shoes"
                className="object-cover w-full h-40 md:h-48 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-xl md:text-2xl text-black">Top deals</h1>
            <p className="text-blue-500 cursor-pointer text-sm md:text-lg">
              view more
            </p>
          </div>
          <div className="bg-white h-32 rounded-lg shadow-md mb-4">
            <div className="flex items-center p-4">
              <img
                src={shoes}
                alt="Shoes"
                className="w-24 h-24 rounded-lg shadow-md"
              />
              <div className="ml-4">
                <h1 className="text-lg font-semibold">180-day lowest price</h1>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h1 className="text-lg md:text-2xl mb-4">Deals on best sellers</h1>
            <img
              src={dress}
              alt="Dress"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
