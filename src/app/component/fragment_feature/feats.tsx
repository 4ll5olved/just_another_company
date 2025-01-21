import React from "react";
import { IconType } from "react-icons";


interface ICard {
    icon: IconType
    heading: string
    description: string
}

export default function FeatureCard({ icon: Icon, heading, description }: ICard) {
    return (
                    <div className="bg-white p-4 rounded-slg">
                        <div className="flex items-center space-x-3">
                            {/* icon */}
                            <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                                <Icon className=" w-6 h-6 text-purple-400"/>
                            </div>
                            {/* heading */}
                            <h1 className=" text-lg font-bold text-gray-700">{heading}</h1>
                        </div>
                        {/* description */}
                        <p className="mt-3 mb-3 text-gray-800 leading-relaxed">
                           {description}
                        </p>          
                    </div>
    )
}