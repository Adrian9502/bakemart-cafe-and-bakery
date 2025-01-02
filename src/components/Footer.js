import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import React from "react";
export default function Footer() {
  return React.createElement(
    "footer",
    { className: "bg-amber-800 text-white  playwrite-font py-12" },
    React.createElement(
      "div",
      { className: "max-w-6xl mx-auto px-4" },
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-4 gap-8" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "h3",
            { className: "text-xl font-bold font-serif" },
            "BakeMart"
          ),
          React.createElement(
            "p",
            { className: "text-amber-300 text-xs" },
            "Handcrafted Daily, Baked to Perfection."
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h4",
            { className: "font-bold mb-4" },
            "Quick Links"
          ),
          React.createElement(
            "ul",
            { className: "space-y-2" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                {
                  href: "#about",
                  className: "hover:text-amber-200 delius-font",
                },
                "About Us"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                {
                  href: "#products",
                  className: "hover:text-amber-200 delius-font",
                },
                "Menu"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                {
                  href: "#specialties",
                  className: "hover:text-amber-200 delius-font",
                },
                "Specialties"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                {
                  href: "#contact",
                  className: "hover:text-amber-200 delius-font",
                },
                "Contact"
              )
            )
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h4",
            { className: "font-bold mb-4" },
            "Services"
          ),
          React.createElement(
            "ul",
            { className: "space-y-2" },
            React.createElement("li", { className: "delius-font" }, "Coffee"),
            React.createElement(
              "li",
              { className: "delius-font" },
              "Fresh Pastries"
            )
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h4",
            { className: "font-bold mb-4" },
            "Connect With Us"
          ),
          React.createElement(
            "div",
            { className: "flex space-x-4" },
            React.createElement(
              "a",
              {
                href: "https://www.facebook.com/bakemartbakeshop?mibextid=ZbWKwL",
                className: "hover:text-amber-200",
              },
              React.createElement(Facebook, null)
            ),
            React.createElement(
              "a",
              { href: "#", className: "hover:text-amber-200" },
              React.createElement(Instagram, null)
            ),
            React.createElement(
              "a",
              { href: "#", className: "hover:text-amber-200" },
              React.createElement(Twitter, null)
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "border-t border-amber-700 mt-8 pt-8 text-center" },
        React.createElement(
          "p",
          null,
          "\u00A9 2025 BakeMart Cafe & Bakery. All rights reserved."
        )
      ),
      React.createElement(
        "div",
        { className: "mt-10 italic" },
        React.createElement(
          "span",
          {
            className:
              "text-amber-200 text-sm font-sans flex  items-center justify-center space-x-2",
          },
          React.createElement("span", { className: "mr-1" }, "Made with "),
          React.createElement(
            "span",
            { className: "text-lg flex items-center space-x-2" },
            React.createElement(FaReact, { color: "cyan" }),
            React.createElement(RiTailwindCssFill, { color: "cyan" })
          ),
          React.createElement(
            "span",
            { className: "ml-2" },
            "by John Adrian Bonto. See more at my "
          ),
          React.createElement(
            "a",
            {
              href: "https://github.com/Adrian9502",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-cyan-400 flex items-center space-x-1",
            },
            React.createElement(FaGithub, null),
            React.createElement("span", null, "GitHub")
          )
        )
      )
    )
  );
}
