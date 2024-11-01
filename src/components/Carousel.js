import React, { useState, useEffect } from "react";
import carouselItems from "./carouselItems";

const itemsPerPageDesktop = 16;
const itemsPerPageTablet = 8; 
const itemsPerPageMobile = 4; 

function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageDesktop);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(itemsPerPageMobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(itemsPerPageTablet);
      } else {
        setItemsPerPage(itemsPerPageDesktop);
      }
    };

    // Set initial items per page
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(carouselItems.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return carouselItems.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full mb-24"
      data-carousel="static"
    >
      <div className="relative overflow-hidden rounded-lg mb-16 p-4">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 transition-all duration-700 ease-in-out"
          data-carousel-item
        >
          {getCurrentItems().map((item) => (
            <div
              key={item.id}
              className="border flex-col ml-7 border-slate-300 rounded-full h-20 sm:h-28 md:h-36 w-20 sm:w-28 md:w-36 flex justify-center items-center p-2 hover:border-orange-500"
            >
              <div className="text-lg sm:text-xl md:text-2xl mb-1">
                {item.icon}
              </div>
              <p className="text-center text-xs sm:text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {currentPage > 0 && (
        <button
          type="button"
          onClick={prevPage}
          className="absolute top-1/2 left-0 z-30 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none transition-all duration-300 ease-in-out"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-300 group-focus:ring-4 ">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          type="button"
          onClick={nextPage}
          className="absolute top-1/2 right-0 z-30 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none transition-all duration-300 ease-in-out"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-300 ">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      )}
    </div>
  );
}

export default Carousel;
