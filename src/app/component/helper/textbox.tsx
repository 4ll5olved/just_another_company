import React from "react";

type IBox = {
    children: React.ReactNode;
};

export default function TextBox({ children }: IBox) {
    return (
        <div>
            <h1 className="border-2 px-4 w-fit rounded-lg bg-gray-100 text-[#f68967] font-bold">{children}s</h1>
        </div>
    )
}