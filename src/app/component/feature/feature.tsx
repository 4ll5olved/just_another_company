import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";

export default function Feature() {
    return (
        <div className="pt-16 pb-16 bg-slate-100">
            <div>
                <h1 className="text-center text-2xl text-blue-950 font-bold">
                    Key Feature of Our Service
                </h1>
                <p className="mt-3 text-center font-medium text-slate-700 mx-auto w-[90%] sm:w-[70%] md:w-50%]">
                    Stand Out from the others, and stand out from the crowd. Handling Multitask with Ease.
                </p>
            </div>
            {/* container */}
            <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* 1st feature */}
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                            {/* icon */}
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                                <MdOutlineTouchApp className=" w-6 h-6 text-purple-400"/>
                            </div>
                            {/* heading */}
                            <h1 className=" text-lg font-bold text-gray-700">App Integration</h1>
                           
                        </div>
                        <p className="mt-3 mb-3 text-gray-800 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum enim hic a ab ratione architecto adipisci quo laborum ipsum eaque sed impedit eligendi illo id alias, quisquam iste voluptatem!
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}