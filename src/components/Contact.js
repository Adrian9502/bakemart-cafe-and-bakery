import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";
export default function Contact() {
  return React.createElement(
    "div",
    { id: "contact", className: "py-16 pattern-topography" },
    React.createElement(
      "div",
      { className: "max-w-6xl mx-auto px-4" },
      React.createElement(
        "h2",
        {
          className:
            "text-4xl font-bold text-center font-serif mb-12 text-amber-700",
        },
        "Visit Us Today"
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 lg:grid-cols-5 gap-8" },
        React.createElement(
          "div",
          {
            className:
              "lg:col-span-3 bg-white rounded-lg shadow-md overflow-hidden",
          },
          React.createElement("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.7901922890696!2d121.11190241144743!3d14.207059786176636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63110c3e1df3%3A0x59207dfd5052c706!2sBakemart%20Bakeshop%20%26%20Cafe!5e0!3m2!1sen!2sph!4v1735811705352!5m2!1sen!2sph",
            className: "w-full h-96",
            style: { border: 0 },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          })
        ),
        React.createElement(
          "div",
          { className: "lg:col-span-2 space-y-6" },
          React.createElement(
            "div",
            {
              className:
                "bg-white p-6 rounded-lg shadow-md transition-transform ",
            },
            React.createElement(
              "div",
              { className: "flex items-center" },
              React.createElement(Clock, {
                className: "w-8 h-8 text-amber-600 mr-4 flex-shrink-0",
              }),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h3",
                  { className: "font-bold mb-2 text-lg" },
                  "Hours"
                ),
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "Mon-Sat: 10am - 8pm"
                ),
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "Sun: 10am - 6pm"
                )
              )
            )
          ),
          React.createElement(
            "div",
            {
              className:
                "bg-white p-6 rounded-lg shadow-md transition-transform ",
            },
            React.createElement(
              "div",
              { className: "flex items-center" },
              React.createElement(MapPin, {
                className: "w-8 h-8 text-amber-600 mr-4 flex-shrink-0",
              }),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h3",
                  { className: "font-bold mb-2 text-lg" },
                  "Location"
                ),
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "Don Bosco Street Purok 1, 0134B"
                ),
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "Calamba, 4027 Laguna"
                )
              )
            )
          ),
          React.createElement(
            "div",
            {
              className:
                "bg-white p-6 rounded-lg shadow-md transition-transform ",
            },
            React.createElement(
              "div",
              { className: "flex items-center" },
              React.createElement(Phone, {
                className: "w-8 h-8 text-amber-600 mr-4 flex-shrink-0",
              }),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "h3",
                  { className: "font-bold mb-2 text-lg" },
                  "Contact"
                ),
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "0947 322 8675"
                ),
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "bakemart.bakeshop@gmail.com"
                )
              )
            )
          )
        )
      )
    )
  );
}
