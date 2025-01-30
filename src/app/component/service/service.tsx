import React from "react";
import TextBox from "../helper/textbox";
import { FaChartLine, FaCode, FaLightbulb, FaPencilAlt, FaRocket, FaTrophy } from "react-icons/fa";
import ServiceCard from "../serve/serve";

export default function Service() {
    return (
        <div className="pt-16 pb-16">
            <div className="w-[80%] mx-auto">
                <TextBox>Our Service</TextBox>
                <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
                    All the things that we can do
                </h1>
                <p className="mt-4 w-full sm:w-[80%] md:w-[70]  lg:e-[60%] xl:w-[50] text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati assumenda recusandae impedit, error dicta sequi tempore optio ad nulla incidunt esse harum doloribus.
                </p>
                <div className="grid grid-cols-1 mf:grid-cols-2 lg:grid-cols-3 gap-8 items-center gap-y-12 mt-16">

<ServiceCard
    icon={FaLightbulb}
    heading="Idea Generation"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati assumenda recusandae impedit, error dicta sequi tempore optio ad nulla incidunt esse harum doloribus."
/>

<ServiceCard
    icon={FaCode}
    heading="Development"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati assumenda recusandae impedit, error dicta sequi tempore optio ad nulla incidunt esse harum doloribus."
/>

<ServiceCard
    icon={FaRocket}
    heading="Launch"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati assumenda recusandae impedit, error dicta sequi tempore optio ad nulla incidunt esse harum doloribus."
/>

<ServiceCard
    icon={FaChartLine}
    heading="Growth"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati assumenda recusandae impedit, error dicta sequi tempore optio ad nulla incidunt esse harum doloribus."
/>

<ServiceCard
    icon={FaTrophy}
    heading="Success"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati assumenda recusandae impedit, error dicta sequi tempore optio ad nulla incidunt esse harum doloribus."
/>

<ServiceCard
    icon={FaPencilAlt}
    heading="Iteration"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati assumenda recusandae impedit, error dicta sequi tempore optio ad nulla incidunt esse harum doloribus."
/>
                </div>
            </div>
        </div>
    )
}