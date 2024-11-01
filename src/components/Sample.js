import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import playstore from "./assets/app store.png";
import googleplay from "./assets/google play.png";
import qr from "./assets/Screenshot (160).png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <h1 className="text-3xl text-white px-7">Alibaba.com</h1>

        <div
          className="lg:hidden px-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="text-white text-3xl" />
          ) : (
            <HiMenu className="text-white text-3xl" />
          )}
        </div>

        <div
          className={`lg:flex items-center space-x-6 text-xl mb-3 lg:mb-0 ${
            isOpen ? "block" : "hidden"
          } w-72 z-50 shadow-lg  justify-center  lg:w-auto lg:static absolute top-16 right-7 lg:top-0 bg-blue-950 lg:bg-transparent p-5 lg:p-0`}
        >
          <h1 className="lg:hidden text-white">All Categories</h1>
          <div className=" lg:hidden relative group z-50">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white"
            >
              Featured selection
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform  absolute  h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6   z-50 translate-x-0 transition-transform group-hover:translate-x-[-10rem] duration-500 ease-in-out"
            >
              <div className="grid grid-cols-5 items-center  p-8 text-lg z-50">
                {/* Column 1 with a box */}
                <div className="flex items-center flex-col justify-center border border-gray-300 w-64 h-40 rounded-lg">
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

                <div className="flex items-center flex-col justify-center border border-gray-300 w-64 h-40 rounded-lg">
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

                <div className="flex items-center flex-col justify-center border border-gray-300 w-64 h-40 rounded-lg">
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
                <div className="h-36 border-l border-gray-300 "></div>

                <div>
                  <ul className="space-y-4 mt-9">
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

          <div className="lg:hidden relative group z-50">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white"
            >
              Trade Assurance
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform  absolute  h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6 z-0  z-50 translate-x-0 transition-transform group-hover:translate-x-[-20rem] duration-500 ease-in-out"
            >
              <div className="grid grid-cols-2 p-9 items-center text-lg">
                <div className="flex flex-col items-start justify-center">
                  <p className="text-4xl">
                    Enjoy protection from payment to delivery.
                  </p>
                  <button className="bg-orange-500 rounded-3xl h-8 w-40 mt-9">
                    Learn more
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-row gap-7 bg-gray-300 items-center justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14  bg-orange-300 rounded-full bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">safe and Easy payments</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-7 bg-gray-300 justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14 rounded-full  bg-orange-300 bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">Money back policy</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-7 bg-gray-300 justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14 rounded-full bg-orange-300  bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">
                      Shippng & logistics services
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-7 bg-gray-300 justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14 rounded-full bg-orange-300 bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">After sales protection</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-white">Deliver to</p>
          <p className="text-lg text-white">English USD</p>
          <p className="text-lg text-white">Sign in</p>
          <button className="bg-orange-500 text-white py-1 px-4 rounded-full hover:bg-green-600 transition duration-300">
            Sign up
          </button>
          <div className="relative hidden group">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white "
            >
              Buyer Central
            </button>
            <div
              id="mega-menu-full-cta-dropdown-button"
              className=" hidden group-hover:block w-screen transform   absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6  z-50 translate-x-0  group-hover:translate-x-[27rem]  transition-all duration-200 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            >
              <div className="grid grid-cols-5 gap-6 p-9 text-lg">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 text-black font-bold text-base"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 pb-9"
                    >
                      Why Alibaba.com
                    </a>
                  </li>
                </ul>

                <div>
                  <ul className="space-y-4">
                    <li className="font-bold ">Why Alibaba.com</li>
                    <li>How sourcing works</li>
                    <li>Membership program</li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-4  z-50">
                    <li className="font-bold ">Trade services</li>
                    <li>Trade Assurance</li>
                    <li>Logistics services</li>
                    <li>Letter of credit</li>
                    <li className="z-50">
                      Production monitoring & inspection services
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <ul className="space-y-4">
                    <li className="font-bold ">Resources</li>
                    <li>Success stories</li>
                    <li>Blogs</li>
                    <li>Industry reports</li>
                    <li>Help Center</li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div>
                  <ul className="space-y-4">
                    <li className="font-bold ">Webinars</li>
                    <li>Overview</li>
                    <li>Meet the peers</li>
                    <li>Ecommerce Academy</li>
                    <li>How to source on Alibaba.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

         
          <div className="relative group hidden ">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white text-1xl"
            >
              Help Center
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6 z-5 translate-x-0  group-hover:translate-x-[20rem] duration-300 ease-in-out  translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:transform6 z-50 transition-all "
            >
              <div className="grid grid-cols-4 place-items-center  justify-items-center p-10 text-lg ">
                <div className="flex items-center justify-center border border-gray-300 w-64 h-32 rounded-lg ml-9">
                  <h1 className="text-center">For Buyers</h1>
                </div>

                <div className="flex items-center justify-center border border-gray-300 w-64 h-32 rounded-lg">
                  <h1 className="text-center">For Suppliers</h1>
                </div>

                <div className="h-32 border-l border-gray-300 mx-4"></div>

                <div>
                  <ul className="space-y-4">
                    <li>open a dispute</li>
                    <li>Report IPR Infringement</li>
                    <li>Report Abuse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group hidden ">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white text-1xl"
            >
              Get the app
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform  absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6  z-5 translate-x-0  group-hover:translate-x-[13rem] 6 z-50 transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            >
              <div className="grid grid-cols-3   place-items-center  justify-items-center items-center p-10 text-lg">
                <div className="flex flex-col items-start ml-2 -mr-2">
                  <h1 className=" font-bold text-3xl mr-20">
                    Get the Alibaba.com APP
                  </h1>
                  <p className="mt-2">
                    Find products, communicate with suppliers, and manage and
                    pay for your orders with the Alibaba.com app anytime,
                    anywhere.
                  </p>
                  <p className="mt-2 hover:text-blue-600 cursor-pointer">
                    Learn more
                  </p>
                </div>

                <div className="flex justify-center items-center ml-2 -mr-2">
                  <div className="flex flex-col space-y-5 ">
                    <img
                      src={playstore}
                      alt="App Store"
                      className="h-16 w-48 ml-5"
                    />
                    <img
                      src={googleplay}
                      alt="Google Play"
                      className="h-16 w-48 ml-4"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center ml-2 -mr-2">
                  <img src={qr} alt="Sample QR Code" className="h-auto" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="relative lg:hidden text-lg text-white group-hover:bg-gray-900">
              <span className="hover:text-white">Become a Supplier</span>
              <span className="block h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-white flex flex-row px-9 space-x-4 py-3">
          <h1 className="hidden  text-white lg:block">All Categories</h1>
          <div className="hidden lg:block relative group z-50">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white"
            >
              Featured selection
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform  absolute  h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6   z-50 translate-x-0 transition-transform group-hover:translate-x-[-10rem] duration-500 ease-in-out"
            >
              <div className="grid grid-cols-5 items-center  p-8 text-lg z-50">
               
                <div className="flex items-center flex-col justify-center border border-gray-300 w-64 h-40 rounded-lg">
                  <svg
                    className="w-8 h-8 mb-2 text-gray-500" 
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

                <div className="flex items-center flex-col justify-center border border-gray-300 w-64 h-40 rounded-lg">
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

                <div className="flex items-center flex-col justify-center border border-gray-300 w-64 h-40 rounded-lg">
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
                <div className="h-36 border-l border-gray-300 "></div>

                <div>
                  <ul className="space-y-4 mt-9">
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

          <div className="hidden lg:block relative group z-50">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white"
            >
              Trade Assurance
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform  absolute  h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6 z-0  z-50 translate-x-0 transition-transform group-hover:translate-x-[-20rem] duration-500 ease-in-out"
            >
              <div className="grid grid-cols-2 p-9 items-center text-lg">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-center">Trade Assurance</h1>
                  <p className="text-4xl">
                    Enjoy protection from payment to delivery.
                  </p>
                  <button className="bg-orange-500 rounded-3xl h-8 w-40 mt-9">
                    Learn more
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-row gap-7 bg-gray-300 items-center justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14  bg-orange-300 rounded-full bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">safe and Easy payments</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-7 bg-gray-300 justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14 rounded-full  bg-orange-300 bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">Money back policy</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-7 bg-gray-300 justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14 rounded-full bg-orange-300  bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">
                      Shippng & logistics services
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-7 bg-gray-300 justify-center border border-gray-300 h-32 rounded-lg">
                    <svg
                      class="h-14 w-14 rounded-full bg-orange-300 bg-[rgba(255,255,255,0.05)] shadow-2xl p-2 hover:text-orange-500 transition-colors duration-300 "
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
                    <h2 className="text-center">After sales protection</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-6 relative">
          <div className="relative hidden lg:block group">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white "
            >
              Buyer Central
            </button>
            <div
              id="mega-menu-full-cta-dropdown-button"
              className=" hidden group-hover:block w-screen transform   absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6  z-50 translate-x-0  group-hover:translate-x-[27rem]  transition-all duration-200 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            >
              <div className="grid grid-cols-5 gap-6 p-9 text-lg">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 text-black font-bold text-base"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:text-blue-600 pb-9"
                    >
                      Why Alibaba.com
                    </a>
                  </li>
                </ul>

                <div>
                  <ul className="space-y-4">
                    <li className="font-bold ">Why Alibaba.com</li>
                    <li>How sourcing works</li>
                    <li>Membership program</li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-4  z-50">
                    <li className="font-bold ">Trade services</li>
                    <li>Trade Assurance</li>
                    <li>Logistics services</li>
                    <li>Letter of credit</li>
                    <li className="z-50">
                      Production monitoring & inspection services
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div>
                  <ul className="space-y-4">
                    <li className="font-bold ">Resources</li>
                    <li>Success stories</li>
                    <li>Blogs</li>
                    <li>Industry reports</li>
                    <li>Help Center</li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div>
                  <ul className="space-y-4">
                    <li className="font-bold ">Webinars</li>
                    <li>Overview</li>
                    <li>Meet the peers</li>
                    <li>Ecommerce Academy</li>
                    <li>How to source on Alibaba.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

         
          <div className="relative group hidden lg:block">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white text-1xl"
            >
              Help Center
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6 z-5 translate-x-0  group-hover:translate-x-[20rem] duration-300 ease-in-out  translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:transform6 z-50 transition-all "
            >
              <div className="grid grid-cols-4 place-items-center  justify-items-center p-10 text-lg ">
                <div className="flex items-center justify-center border border-gray-300 w-64 h-32 rounded-lg ml-9">
                  <h1 className="text-center">For Buyers</h1>
                </div>

                <div className="flex items-center justify-center border border-gray-300 w-64 h-32 rounded-lg">
                  <h1 className="text-center">For Suppliers</h1>
                </div>

                <div className="h-32 border-l border-gray-300 mx-4"></div>

                <div>
                  <ul className="space-y-4">
                    <li>open a dispute</li>
                    <li>Report IPR Infringement</li>
                    <li>Report Abuse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group hidden lg:block">
            <button
              id="mega-menu-full-cta-dropdown-button"
              className="text-white text-1xl"
            >
              Get the app
            </button>
            <div
              id="mega-menu-full-cta-dropdown"
              className="hidden group-hover:block w-screen transform  absolute right-0 h-auto bg-white text-black border border-gray-200 shadow-lg dark:border-gray-600 rounded-lg p-6  z-5 translate-x-0  group-hover:translate-x-[13rem] 6 z-50 transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            >
              <div className="grid grid-cols-3   place-items-center  justify-items-center items-center p-10 text-lg">
                <div className="flex flex-col items-start ml-2 -mr-2">
                  <h1 className=" font-bold text-3xl mr-20">
                    Get the Alibaba.com APP
                  </h1>
                  <p className="mt-2">
                    Find products, communicate with suppliers, and manage and
                    pay for your orders with the Alibaba.com app anytime,
                    anywhere.
                  </p>
                  <p className="mt-2 hover:text-blue-600 cursor-pointer">
                    Learn more
                  </p>
                </div>

                <div className="flex justify-center items-center ml-2 -mr-2">
                  <div className="flex flex-col space-y-5 ">
                    <img
                      src={playstore}
                      alt="App Store"
                      className="h-16 w-48 ml-5"
                    />
                    <img
                      src={googleplay}
                      alt="Google Play"
                      className="h-16 w-48 ml-4"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center ml-2 -mr-2">
                  <img src={qr} alt="Sample QR Code" className="h-auto" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="relative hidden lg:block text-lg text-white group-hover:bg-gray-900">
              <span className="hover:text-white">Become a Supplier</span>
              <span className="block h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
