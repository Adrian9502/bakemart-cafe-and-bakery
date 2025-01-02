import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const About = () => {
    return (React.createElement("div", { id: "about", className: "py-16 pattern-formal-invitation bg-emerald-50" },
        React.createElement("div", { className: "max-w-6xl mx-auto px-4" },
            React.createElement("h2", { className: "text-3xl sm:text-5xl font-bold text-center mb-8 font-serif text-amber-800" }, "Our Story"),
            React.createElement("div", { className: "flex items-center flex-col sm:flex-row justify-center sm:gap-5" },
                React.createElement("div", { className: "w-full max-w-4xl overflow-hidden rounded-2xl shadow-3xl" },
                    React.createElement(Splide, { "aria-label": "Our Story Images", options: {
                            type: 'fade', // Enable fade transition between slides
                            perPage: 1, // Show one slide per page
                            arrows: true, // Show navigation arrows
                            pagination: true, // Enable pagination (dots)
                            autoplay: true, // Enable autoplay
                            interval: 3000, // Slide interval (3 seconds)
                        } },
                        React.createElement(SplideSlide, null,
                            React.createElement("img", { src: "/store-images/Screenshot_20250102-130000.jpg", alt: "store image 1", className: "w-full h-full object-cover" })),
                        React.createElement(SplideSlide, null,
                            React.createElement("img", { src: "/store-images/Screenshot_20250102-094758.jpg", alt: "store image 2", className: "w-full h-full object-cover" })),
                        React.createElement(SplideSlide, null,
                            React.createElement("img", { src: "/store-images/Screenshot_20250102-125943.jpg", alt: "store image 3", className: "w-full h-full object-cover" })),
                        React.createElement(SplideSlide, null,
                            React.createElement("img", { src: "/store-images/Screenshot_20250102-125924.jpg", alt: "store image 4", className: "w-full h-full object-cover" })),
                        React.createElement(SplideSlide, null,
                            React.createElement("img", { src: "/store-images/Screenshot_20250102-130018.jpg", alt: "store image 5", className: "w-full h-full object-cover" })))),
                React.createElement("div", { className: "w-full text-sm sm:text-lg playwrite-font max-w-4xl p-5" },
                    React.createElement("p", { className: "text-gray-700 leading-relaxed mb-4" }, "Welcome to BakeMart, where the aroma of freshly brewed coffee meets the scent of warm, just-baked bread. Since 2019, we've been crafting our Sourdough Bread with the same starter, using natural ingredients for a fruity taste and tangy aroma."),
                    React.createElement("p", { className: "text-gray-700 leading-relaxed" }, "Our commitment to quality shows in every cup of coffee we serve and every pastry we bake. Using only the finest ingredients and traditional methods, we ensure that each visit to BakeMart is a delightful experience for our valued customers."))))));
};
export default About;
