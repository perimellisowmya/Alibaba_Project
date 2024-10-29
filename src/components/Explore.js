import React from "react";
import IconTextCarousel from "./Carousel";

function Explore() {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 mt-40 grid grid-cols-2 gap-4">
        <h1 className="text-5xl">
          Explore millions of offerings tailored to your business needs
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 ml-56 gap-4 mt-1">
          {" "}
          <div className="grid grid-rows-2 gap-4">
            {" "}
            <div className="flex items-center">
              <div className="w-1 h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-5xl  text-orange-600">200M+</h1>
                <p className="text-lg">products</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-5xl text-orange-600">5,900</h1>
                <p className="text-lg">product categories</p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            {" "}
            <div className="flex items-center">
              <div className="w-1 h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-5xl text-orange-600">200K+</h1>
                <p className="text-lg">suppliers</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1 h-16 bg-gray-400 mr-4"></div>
              <div>
                <h1 className="text-5xl text-orange-600">200+</h1>
                <p className="text-lg">countries and regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

                     <IconTextCarousel/>
















    </div>

  );
}

export default Explore;
