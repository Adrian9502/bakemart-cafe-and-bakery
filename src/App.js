import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import React from "react";
import { CartProvider } from "./context/cartContext";
const App = () => {
  return React.createElement(
    CartProvider,
    null,
    React.createElement(
      "main",
      { className: "min-h-screen hero-pattern" },
      React.createElement(Header, null),
      React.createElement(Hero, null),
      React.createElement(About, null),
      React.createElement(Menu, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)
    )
  );
};
export default App;
