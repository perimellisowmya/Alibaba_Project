import React from "react";
import { Carousel } from "@material-tailwind/react";



function CarouselSlider() {
 

  return (
    <div className="relative ">
      <Carousel
        className="h-42-rem overflow-hidden"
        autoplay={true}
        autoplayDelay={6000}
        loop={true}
        arrows={false}
        nextArrow={false}
        prevArrow={false}
      >
        <div className="relative">
          <div className="absolute inset-0 flex flex-col justify-center md:flex-row md:items-center md:justify-between text-white text-sm p-10 md:p-20">
            <h2>first</h2>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col justify-center md:flex-row md:items-center md:justify-between text-white text-sm p-10 md:p-20">
            <h2>first</h2>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col justify-center md:flex-row md:items-center md:justify-between text-white text-sm p-10 md:p-20">
            <h2>first</h2>
          </div>
        </div>


       
       
           
        
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
