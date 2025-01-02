import React from 'react';
import { ChevronRight } from 'lucide-react';
const Hero = () => {
    return (React.createElement("div", { id: "home", className: "relative h-[60rem] md:h-[70rem]" },
        React.createElement("div", { className: "absolute inset-0 blur-[5px]" },
            React.createElement("img", { src: "/store-images/Screenshot_20250102-125943.jpg", alt: "BakeMart Cafe & Bakery", className: "w-full h-full object-cover" }),
            React.createElement("div", { className: "absolute inset-0 bg-black/70" })),
        React.createElement("div", { className: "relative h-full flex flex-col items-center justify-center text-center text-white px-4" },
            React.createElement("h1", { className: "text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wide text-amber-400" }, "BakeMart"),
            React.createElement("div", { className: "max-w-xl mb-8 space-y-2" },
                React.createElement("p", { className: "text-xl delius-font text-amber-100" }, "THE HOUSE OF SOURDOUGH"),
                React.createElement("p", { className: "text-lg playwrite-font text-amber-100" }, "Handcrafted Daily, Baked to Perfection")),
            React.createElement("button", { className: "bg-amber-500 delius-font hover:bg-amber-600 text-white px-8 py-3 rounded-full flex items-center transition-all duration-300 group" },
                "Order Now",
                React.createElement(ChevronRight, { className: "ml-2 group-hover:translate-x-1 transition-transform" })))));
};
export default Hero;
