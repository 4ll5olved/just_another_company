import Image from "next/image";
import React from "react";
import TextBox from "../helper/textbox";

export default function About() {
    return (
        <div className="pt-16 pb-16 ">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* image content */}
                <div>
                    <Image
                        src = "/images/about.jpg"
                        alt="about"
                        width = {900}
                        height = {900}
                    />
                </div>
                {/* text content */}
                <div>
                    <TextBox>about</TextBox>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mt-3 leading-[2.5rem] sm:leading-[3rem]">Grow it Faster, Scale it Better</h1>
                    <p className="mt-3 leading-relaxed text-sm sm:text-base text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit tempora distinctio, eligendi laborum est?</p>
                    <button className="mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967]">Learn more &#8594;</button>
                    <div className="mt-8 border-l-2 border-slate-600">
                        <div className="ml-6 ">
                        <p className="text-slate-500 font-medium">&quot; If you stop when you&apos;re not good at it, then when you&apos;ll be good at it? &quot;</p>
                            <div className="flex items-center space-x-6 mt-6">
                                <Image
                                src="/images/profile.jpg"
                                alt="profile"
                                width={40}
                                height={40}
                                className="rounded-full"
                                />
                                <div>
                                    <p className="font-medium">Jono Sujono</p>
                                    <p className="text-slate-500 text-sm">Founder, CEO, and OB @Oralith</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}