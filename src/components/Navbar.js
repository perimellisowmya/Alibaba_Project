// src/App.js
import React from "react";
import image from "./assets/image.jpg";

function Navbar() {
  return (
    <div>
      <div
        className="h-[45rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`, // Use the imported image here
        }}
      >
        {/* Navbar */}
        <nav className="fixed  top-0 left-0 w-full">
          <div className="mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-between items-start h-16">
              <div className="flex flex-col">
                <h1 className="text-3xl mb-2 text-white">Alibaba.com</h1>

                <div className="flex items-start space-x-5 ">
                  <span className="text-lg text-white">All Categories</span>
                  <div className="relative group">
                    <button
                      id="mega-menu-full-cta-dropdown-button"
                      className="flex items-center justify-between py-2 px-3 font-medium text-gray-900 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      featured selection
                    </button>
                    <div
                      id="mega-menu-full-cta-dropdown"
                      className="hidden group-hover:block absolute left-0 bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 w-[70rem] rounded-lg p-6"
                    >
                      <div className="grid grid-cols-4 items-center gap-7 text-lg">
                        {/* Column 1 with a box */}
                        <div className="flex items-center flex-col justify-center border border-gray-300 w-60 h-32 rounded-lg">
                          <svg
                            className="w-8 h-8 mb-2 text-gray-500" // Adjust size and color
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8l-6 6h12l-6-6z"
                            />
                          </svg>
                          <h1 className="text-center">Top Ranking</h1>
                        </div>

                        {/* Column 2 with a box */}
                        <div className="flex items-center flex-col justify-center border border-gray-300 w-60 h-32 rounded-lg">
                          <svg
                            className="w-8 h-8 mb-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 3v18l7-5 7 5V3H5z"
                            />
                          </svg>
                          <h1 className="text-center">New arrival</h1>
                        </div>

                        <div className="flex items-center flex-col justify-center border border-gray-300 w-60 h-32 rounded-lg">
                          <svg
                            className="w-8 h-8 mb-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 2l4 10-9-3h9l-4 10"
                            />
                          </svg>
                          <h1 className="text-center">Saving spotlight</h1>
                        </div>

                        {/* Column 3 */}
                        <div>
                          <ul className="space-y-4">
                            <li>sample centre</li>
                            <li>Online Trade show</li>
                            <li>Tips</li>
                            <li>Live</li>
                            <li>Global suppliers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <button
                      id="mega-menu-full-cta-dropdown-button"
                      className="flex items-center justify-between py-2 px-3 font-medium text-gray-900 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Trade Assurance
                    </button>
                    <div
                      id="mega-menu-full-cta-dropdown"
                      className="hidden group-hover:block absolute left-0 h-[20rem] bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 w-[70rem] rounded-lg p-6"
                    >
                      <div className="grid grid-cols-2 p-9 items-center  text-lg">
                        <div className="flex flex-col items-start  justify-center">
                          <h1 className="text-center">Trade Assurance</h1>
                          <p className="text-4xl">
                            Enjoy protection from payment to delivery.
                          </p>
                          <button className="bg-orange-500 rounded-3xl h-8 w-40 mt-9 ">
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                {/* First Row */}
                <div className="flex items-center text-xl space-x-6 mb-3">
                  <span className="text-lg text-white">Deliver to</span>
                  <span className="text-lg text-white">English USD</span>
                  <span className="text-lg text-white">Sign in</span>
                  <button className="bg-orange-500 text-white py-1 px-4 rounded-full hover:bg-green-600 transition duration-300">
                    Sign up
                  </button>
                </div>

                <div className="flex space-x-6 relative">
                  <div className="relative group">
                    <button
                      id="mega-menu-full-cta-dropdown-button"
                      className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 "
                    >
                      Buyer Central
                    </button>
                    <div
                      id="mega-menu-full-cta-dropdown"
                      className="hidden group-hover:block absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 w-[80rem] rounded-lg p-6  z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"
                    >
                      <div className="grid grid-cols-5 gap-20 text-lg">
                        {/* Column 1 */}
                        <div>
                          <ul className="space-y-4">
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600"
                              >
                                Get Started
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-blue-600"
                              >
                                Why Alibaba.com
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                          <ul className="space-y-4">
                            <li>Why Alibaba.com</li>
                            <li>How sourcing works</li>
                            <li>Membership program</li>
                          </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                          <ul className="space-y-4 ">
                            <li>Trade services</li>
                            <li>Trade Assurance</li>
                            <li>Logistics services</li>
                            <li>Letter of credit</li>
                            <li>Production monitoring & inspection services</li>
                          </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                          <ul className="space-y-4">
                            <li>Resources</li>
                            <li>Success stories</li>
                            <li>Blogs</li>
                            <li>Industry reports</li>
                            <li>Help Center</li>
                          </ul>
                        </div>

                        {/* Column 5 */}
                        <div>
                          <ul className="space-y-4">
                            <li>Webinars</li>
                            <li>Overview</li>
                            <li>Meet the peers</li>
                            <li>Ecommerce Academy</li>
                            <li>How to source on Alibaba.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Navbar Items with Hover Bar */}
                  <div className="relative group">
                    <button
                      id="mega-menu-full-cta-dropdown-button"
                      className="flex items-center justify-between py-2 px-3 font-medium text-gray-900 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Help Center
                    </button>
                    <div
                      id="mega-menu-full-cta-dropdown"
                      className="hidden group-hover:block absolute right-0 bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 w-[70rem] rounded-lg p-6"
                    >
                      <div className="grid grid-cols-3 items-center gap-7 text-lg">
                        {/* Column 1 with a box */}
                        <div className="flex items-center justify-center border border-gray-300 w-48 h-32 rounded-lg">
                          <h1 className="text-center">For Buyers</h1>
                        </div>

                        {/* Column 2 with a box */}
                        <div className="flex items-center justify-center border border-gray-300 w-48 h-32 rounded-lg">
                          <h1 className="text-center">For Suppliers</h1>
                        </div>

                        {/* Column 3 */}
                        <div>
                          <ul className="space-y-4">
                            <li>Why Alibaba.com</li>
                            <li>How sourcing works</li>
                            <li>Membership program</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <button
                      id="mega-menu-full-cta-dropdown-button"
                      className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Get the app
                    </button>
                    <div
                      id="mega-menu-full-cta-dropdown"
                      className="hidden group-hover:block absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 w-[70rem] rounded-lg p-6"
                    >
                      <div className="grid grid-cols-3 items-center gap-7 text-lg">
                        {/* First Grid: Centered Text */}
                        <div className="flex flex-col items-start">
                          <h1 className="font-semibold text-xl">
                            Get the Alibaba.com APP
                          </h1>
                          <p className="mt-2">
                            Find products, communicate with suppliers, and
                            manage and pay for your orders with the Alibaba.com
                            app anytime, anywhere.
                          </p>
                          <p className="mt-2 hover:text-blue-600 cursor-pointer">
                            Learn more
                          </p>
                        </div>

                        {/* Second Grid: App Store and Google Play Images */}
                        <div className="flex justify-center items-center">
                          <div className="flex flex-col space-y-5 space-x-4">
                            <img
                              src="https://via.placeholder.com/120x40?text=App+Store"
                              alt="App Store"
                              className="h-auto"
                            />
                            <img
                              src="https://via.placeholder.com/120x40?text=Google+Play"
                              alt="Google Play"
                              className="h-auto"
                            />
                          </div>
                        </div>

                        {/* Third Grid: Sample QR Code */}
                        <div className="flex justify-center items-center">
                          <img
                            src="https://via.placeholder.com/150"
                            alt="Sample QR Code"
                            className="h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="relative text-lg text-white group-hover:bg-gray-900">
                    <span className="hover:text-white">Become a Supplier</span>
                    <span className="block h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="absolute items-start justify-center mt-56 px-7">
          <h1 className="text-xl text-white">Learn about Alibaba.com</h1>
          <h1 className="text-5xl font-bold text-white mt-10">
            The leading B2B ecommerce platform for <br />
            global trade
          </h1>
          <div className="mt-10 w-11/12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tent pegs"
                className="w-full h-16 py-2 pl-10 pr-20 border rounded-full focus:outline-none"
                style={{ borderRadius: "50px" }} // Custom rounded corners
              />
              {/* Search Icon with Orange Background */}
              <button className="absolute right-2 top-1 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full py-1 px-10 hover:bg-green-600 transition duration-300">
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
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-row space-x-5 text-white text-xl mt-10 items-center">
            <h1 className="text-lg">Frequently searched:</h1>
            <h1 className="border h-11 text-lg border-white rounded-3xl flex items-center justify-center px-4">
              iPhone 14 Pro Max
            </h1>
            <h1 className="border text-lg border-white rounded-3xl h-11 flex items-center justify-center px-4">
              5G Smart Phone
            </h1>
            <h1 className="border text-lg  border-white rounded-3xl h-11 flex items-center justify-center px-4">
              Samsung Galaxy S24 Ultra
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-amber-950 h-[35rem] flex  items-center justify-center">
        {/* Container for boxes */}
        <div className="grid grid-cols-4 gap-7 mt-7 ">
          <div className="bg-[rgba(255,255,255,0.05)] shadow-xl  text-white p-10 w-[22rem]  h-[23rem]   rounded-3xl flex flex-col text-start  transition-colors duration-75 hover:bg-[rgba(255,255,255,0.1)]">
            <div>
              <svg
                class="h-14 w-14 rounded-full  hover:text-orange-500 transition-colors duration-300   bg-[rgba(255,255,255,0.05)] shadow-2xl p-2"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 12l2 2l4 -4" />{" "}
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              </svg>
            </div>
            <h2 className="text-3xl mt-4">Millions of business offerings</h2>
            <p className="text-lg mt-4">
              Explore products and suppliers for your business from millions of
              offerings worldwide.
            </p>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] shadow-xl   p-10 w-[22rem] text-white h-[23rem] rounded-3xl  flex flex-col text-start transition-colors duration-75 hover:bg-[rgba(255,255,255,0.1)]">
            <div>
              <svg
                class="h-14 w-14 rounded-full  bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 12l2 2l4 -4" />{" "}
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              </svg>
            </div>
            <h2 className="text-3xl mt-4">Assured quality and transactions</h2>
            <p className="text-lg mt-4 ">
              Ensure production quality from verified suppliers, with your
              orders protected from payment to delivery.
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] shadow-xl p-10 w-[22rem] h-[23rem] text-white rounded-3xl flex flex-col text-start transition-colors duration-75 hover:bg-[rgba(255,255,255,0.1)]">
            <div>
              <svg
                class="h-14 w-14 rounded-full  bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 12l2 2l4 -4" />{" "}
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              </svg>
            </div>
            <h2 className="text-3xl mt-4">One-stop trading solution</h2>
            <p className="text-lg mt-4">
              Order seamlessly from product/supplier search to order management,
              payment, and fulfillment.
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] shadow-xl p-10 w-[22rem] h-[23rem] rounded-3xl text-white flex flex-col text-start transition-colors duration-75 hover:bg-[rgba(255,255,255,0.1)]">
            <div>
              <svg
                class="h-14 w-14 rounded-full  bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
                width="14"
                height="14"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 12l2 2l4 -4" />{" "}
                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              </svg>
            </div>
            <h2 className="text-3xl mt-4 ">Tailored trading experience</h2>
            <p className="text-lg mt-4">
              Get curated benefits, such as exclusive discounts, and extra
              support, to help grow your business every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
