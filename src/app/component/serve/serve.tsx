import React from "react";
import { IconType } from "react-icons";


interface ICard {
    icon: IconType
    heading: string
    description: string
}

export default function ServiceCard({ icon: Icon, heading, description }: ICard) {
    return (
        <div className="flex items-center space-x-5">
            {/* icon box */}
            <div className=" w-24 h-14 rounded-md flex items-center justify-center flex-col">
                    <Icon className="w-10 h-10 text-purple-300"/>
            </div> 
            <div>
                <p className="text-lg font-bold text-slate-800">
                    {heading}
                </p>
                <p className="text-slate-600 text-sm">{description}</p>
            </div>
        </div>
    )
}