import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center flex-col">
          <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* text content */}
            <div>
                <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
                    Realize your Ideas
                </p>
                <h1 className="text-2xl md:text-3xl mt-6 mb-6 font-bold text-blue-900 leading-[2.5rem] md:leading-[3.5rem]">
                    Scale and Thrive Swifter with {" "}
                    <span className="text-orange-600">Oralith</span>
                </h1>
                <p className=" text-xs sm:text-sm md:text-base font-medium text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam, quae numquam nam vel aliquid magnam officia ipsum consequuntur quaerat?</p>

                {/* ratings */}
                <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6" >
                    <div className="flex items-center space-x-4">
                        <Image
                            src = "/images/google.png"
                            alt = "google"
                            width = {40}
                            height = {40}
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-lg sm:text-xl md:text-2xl text-slate-800 font-bold">
                            4.8
                        </h1>
                        <div className=" flex items-center">
                            <FaStar className=" w-4 h-4 text-yellow-600"/>
                            <FaStar className=" w-4 h-4 text-yellow-600"/>
                            <FaStar className=" w-4 h-4 text-yellow-600"/>
                            <FaStar className=" w-4 h-4 text-yellow-600"/>
                            <BsStarHalf className=" w-4 h-4 text-yellow-600"/>
                        </div>
                        <p>Our ratings in google</p>
                    </div>
                </div>

                {/* buttons */}

                <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-slate-800 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-slate-800 group-hover:bg-slate-800"></span>
                    <span className="relative text-slate-800 group-hover:text-white">Get Free Trial</span>
                </a>

                <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-orange-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-orange-700 group-hover:bg-orange-700"></span>
                    <span className="relative text-orange-700 group-hover:text-white">Create Account</span>
                </a>
                </div>
            </div>

                 {/* image content */}

            <div className="mx-auto hidden xl:block">
                    <Image
                        src="/images/hero.jpg" 
                        alt="hero"
                        width={900}
                        height={900}
                    />
                </div>
          </div>
        </div>
    )
}
