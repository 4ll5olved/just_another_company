import React from "react";
import { MdOutlineDesignServices, MdOutlineSecurity, MdOutlineSettings, MdOutlineTouchApp } from "react-icons/md";
import FeatureCard from "../fragment_feature/feats";

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
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <FeatureCard 
                    icon={MdOutlineTouchApp} 
                    heading="App Integration" 
                    description="Integrate your favorite apps seamlessly with our system."
                />
                <FeatureCard 
                    icon={MdOutlineSettings} 
                    heading="Custom Settings" 
                    description="Easily customize your experience with advanced configuration tools."
                />
                <FeatureCard 
                    icon={MdOutlineDesignServices} 
                    heading="Creative Design" 
                    description="Unlock creative potential with intuitive design features."
                />
                <FeatureCard 
                    icon={MdOutlineSecurity} 
                    heading="Advanced Security" 
                    description="Protect your data with state-of-the-art encryption."
                />
                </div>
             </div>
        </div>
    )
}