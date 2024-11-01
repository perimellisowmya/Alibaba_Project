

import React from "react";
import IconTextCarousel from "./Carousel";

function Explore() {
  return (
    <div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl  mx-auto md:mx-0">
          Explore millions of offerings tailored to your business needs
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 md:ml-14 lg:ml-56 gap-4 mt-8 md:mt-1 mx-auto">
          <div className="grid grid-rows-2   gap-4">
            <div className="flex items-center">
              <div className="w-1 h-10 md:h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-orange-600">
                  200M+
                </h1>
                <p className="text-base sm:text-lg">products</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-10 md:h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-orange-600">
                  5,900
                </h1>
                <p className="text-base sm:text-lg">product categories</p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="flex items-center">
              <div className="w-1 h-10 md:h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-orange-600">
                  200K+
                </h1>
                <p className="text-base sm:text-lg">suppliers</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-10 md:h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-orange-600">
                  200+
                </h1>
                <p className="text-base sm:text-lg">countries and regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[-70px] md:mt-70 px-4 sm:px-6 md:px-8 lg:px-16">
        <IconTextCarousel />
      </div>
    </div>
  );
}

export default Explore;
