import React from "react";
import image from "./assets/image1.jpg";
import Navbar from './Navbar'
import Sample from "./Sample";

function NavBarTwo() {
  return (
    <div>
      <div
        className="h-[50rem] lg:h-[45rem] md:h-[35rem] sm:h-[25rem] bg-cover w-auto bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Sample />
        <div className="absolute items-start justify-center mt-72 md:mt-40 sm:mt-40 px-4 md:px-5">
          <h1 className="text-lg sm:text-xl md:text-2xl text-white">
            Learn about Alibaba.com
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-white mt-4 sm:mt-6 md:mt-8">
            The leading B2B ecommerce platform for{" "}
            <br className="hidden lg:block" /> global trade
          </h1>

          {/* <h1 className="text-sm  sm:text-sm  md:text-lg  font-bold text-white mt-4 sm:mt-6 md:mt-8 block sm:hidden  ">
            The leading B2B ecommerce platform for global trade
          </h1> */}

          <div className="mt-6 sm:mt-8 md:mt-10 w-full md:w-10/12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tent pegs"
                className="w-full h-12 md:h-14 py-2 pl-4 md:pl-8 pr-16 md:pr-18 border rounded-full focus:outline-none"
                style={{ borderRadius: "50px" }}
              />

              <button className="absolute right-1 md:right-2 top-1 h-10 md:h-12 flex items-center justify-center bg-orange-500 text-white rounded-full py-1 px-6 md:px-8 hover:bg-green-600 transition duration-300">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>

          <div className="flex flex-row flex-wrap space-x-3 sm:space-x-5 text-white text-lg sm:text-xl mt-6 sm:mt-8 items-center">
            <h1 className="text-md sm:text-lg">Frequently searched:</h1>
            {[
              "iPhone 14 Pro Max",
              "5G Smart Phone",
              "Samsung Galaxy S24 Ultra",
            ].map((searchTerm, index) => (
              <h1
                key={index}
                className="border h-8 sm:h-10 text-md sm:text-lg md:text-base border-white rounded-3xl flex items-center justify-center px-3 sm:px-4 mt-2 sm:mt-0"
              >
                {searchTerm}
              </h1>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-amber-950 h-auto flex items-center justify-center py-4 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-7 mt-7">
          {[
            {
              title: "Millions of business offerings",
              description:
                "Explore products and suppliers for your business from millions of offerings worldwide.",
            },
            {
              title: "Assured quality and transactions",
              description:
                "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
            },
            {
              title: "One-stop trading solution",
              description:
                "Order seamlessly from product/supplier search to order management, payment, and fulfillment.",
            },
            {
              title: "Tailored trading experience",
              description:
                "Get curated benefits, such as exclusive discounts, and extra support, to help grow your business every step of the way.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.05)] md:w-[23rem] md:h-[24rem] sm:w-[20rem] shadow-xl text-white p-10 mt-7 rounded-3xl flex flex-col text-start transition-colors duration-75 hover:bg-[rgba(255,255,255,0.1)]"
            >
              <div>
                <svg
                  className="h-12 w-12 rounded-full bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 12l2 2l4 -4" />
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                </svg>
              </div>
              <h2 className="md:text-3xl mt-4">{item.title}</h2>
              <p className="mt-4 md:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBarTwo;
