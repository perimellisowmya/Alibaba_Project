import React from "react";
import image from "./assets/image.jpg";
import CarouselSlider from "./DiscoverCarousel";

function Discover() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-gray-100 min-h-screen md:px-8 lg:px-16">
      <h1 className="text-4xl text-black pt-16">
        Discover your next business opportunity
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-8 p-4">
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-2xl text-black">Top rankings</h1>
            <p className="text-blue-500 cursor-pointer text-lg">view more</p>
          </div>
          <div className=" bg-white h-32 rounded shadow-md ">
            {/* <CarouselSlider/> */}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-2xl text-black">New Arrivals</h1>
            <p className="text-blue-500 cursor-pointer text-lg">view more</p>
          </div>
          <div className="bg-white h-auto rounded-2xl shadow-md p-6">
            <h1 className="text-2xl">125,000+ products added today</h1>

            <div className="grid grid-cols-2 gap-3 mt-9">
              <div className="flex justify-center items-center ">
                <img
                  src={image}
                  alt="Image 1"
                  className="object-cover w-52 h-52 rounded rounded-2xl shadow-md"
                />
              </div>
              <div className="flex justify-center items-center ">
                <img
                  src={image}
                  alt="Image 1"
                  className="object-cover w-52 h-52 rounded rounded-2xl shadow-md"
                />
              </div>
              <div className="flex justify-center items-center h-64">
                <img
                  src={image}
                  alt="Image 1"
                  className="object-cover w-52 h-52 rounded rounded-2xl shadow-md"
                />
              </div>
              <div className="flex justify-center items-center h-64">
                <img
                  src={image}
                  alt="Image 1"
                  className="object-cover w-52 h-52 rounded rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="bg-white h-40 w-auto p-2 flex justify-between mt-6 rounded-2xl shadow-md">
            <div className="flex justify-center pl-4">
              <img
                src={image}
                alt="Image 1"
                className="w-36 h-36 rounded-2xl shadow-md "
              />
            </div>
            <div className="flex flex-col justify-center pr-4 ">
              <h1 className="text-2xl font-semibold">New this week</h1>
              <p className="text-gray-600 text-base whitespace-nowrap">
                Products from verified suppliers only
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <h1 className="text-2xl text-black">Top deals</h1>
            <p className="text-blue-500 cursor-pointer text-lg">view more</p>
          </div>

          <div className="bg-white h-32 rounded-2xl shadow-md mb-10">
            <div className="bg-white h-40 w-auto p-2 flex flex-row items-center   rounded-2xl shadow-md">
              <div className="px-6">
                <img
                  src={image}
                  alt="Image 1"
                  className="w-36 h-36 rounded-2xl shadow-md "
                />
              </div>
              <div className="flex flex-col justify-center  ">
                <h1 className="text-2xl font-semibold">180-day lowest price</h1>
              </div>
            </div>
          </div>
          <div className="bg-white h-[36rem] mt-9 rounded-2xl  items-center">
            <div className="text-2xl mb-4 p-5">
              {" "}
              {/* Added margin-bottom to create space below the heading */}
              <h1>Deals on best sellers</h1>
            </div>
            <div className="rounded-4xl">
              {" "}
              {/* Allow the image to center in the remaining space */}
              <img
                src={image}
                alt="Image 1"
                className=" p-2 w-[28rem] h- h-[28rem]  rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
