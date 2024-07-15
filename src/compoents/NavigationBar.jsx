import React from 'react';

const NavigationBar = () => {
    return (
        <>
            <div className="fixed  mb-10 top-0 w-full left-0 z-10   ">
                {/* Blue Bar with Promotion Text */}
                <div className="bg-teal-600 text-white text-center py-2">
                    Buy 2 Get 1 Plain Milk Kefir Free
                </div>
                {/* Navigation Bar */}
                <nav className="bg-white shadow-md">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0 ml-40">
                                <a href="#" className="text-white font-bold text-xl">
                                    <img src="images/logo.png" alt="Logo" className="h-14 w-auto"/>
                                </a>
                            </div>
                            {/* Navigation Links */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                    <a href="https://www.dishajolly.com/pages/about-us" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
                                    <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Consultation</a>
                                    <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Shop</a>
                                    <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Under 500</a>
                                    <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Combos</a>
                                    <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Best Seller</a>
                                    <a href="#" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Book A Consult</a>
                                </div>
                            </div>
                            {/* Icons */}
                            <div className="ml-4 flex items-center md:ml-6">
                                <button className="text-white hover:text-gray-300 p-1 rounded-full focus:outline-none bg-black">
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C18.19 14.623 18 13.836 18 13V10a6 6 0 00-5-5.917V4a2 2 0 10-4 0v.083A6 6 0 004 10v3c0 .836-.19 1.623-.595 2.595L2 17h5m5 0v2a2 2 0 11-4 0v-2m4 0H9"></path>
                                    </svg>
                                </button>
                                <button className="text-white hover:text-gray-300 p-1 rounded-full focus:outline-none ml-4 bg-black">
                                    <span className="sr-only">View profile</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 19.779A10 10 0 1112 22a10.003 10.003 0 01-6.879-2.221zM15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </button>
                            </div>
                            {/* Mobile Menu Button */}
                            <div className="-mr-2 flex md:hidden">
                                <button className="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavigationBar;
