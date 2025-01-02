import { useState, useEffect } from "react";
import { menu } from "../utils/menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useCart } from "../context/cartContext";
import { motion } from "framer-motion";
const Menu = () => {
  const [selectedSize, setSelectedSize] = useState({});
  const { addToCart, removeFromCart, isInCart } = useCart();
  useEffect(() => {
    const defaultSizes = {};
    menu.forEach((category) => {
      category.items.forEach((item) => {
        if (item.sizes && item.sizes.length > 0) {
          defaultSizes[item.name] = item.sizes[0];
        }
      });
    });
    setSelectedSize(defaultSizes);
  }, []);
  // Simple fade animation for container with stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  // Simple fade animation for individual items
  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  // Simple fade for headings
  const fadeInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const handleSizeSelect = (productName, size) => {
    setSelectedSize((prev) => ({
      ...prev,
      [productName]: size,
    }));
  };
  const handleCartAction = (item) => {
    if (isInCart(item.name)) {
      removeFromCart(item.name);
    } else {
      addToCart(item.name);
    }
  };
  const renderPrice = ({ item, selectedSize, handleCartAction, isInCart }) => {
    const renderCartButton = () =>
      React.createElement(
        "button",
        { onClick: () => handleCartAction(item) },
        isInCart(item.name)
          ? React.createElement(RemoveShoppingCartIcon, {
              size: 30,
              className: "text-red-600",
            })
          : React.createElement(ShoppingCartIcon, {
              size: 30,
              className: "text-emerald-600",
            })
      );
    if (item.prices && selectedSize[item.name]) {
      return React.createElement(
        "div",
        { className: "flex justify-between items-center p-2 rounded-md mt-2" },
        React.createElement(
          "p",
          { className: "text-amber-700 sm:text-xl font-bold" },
          "\u20B1",
          item.prices[selectedSize[item.name]]
        ),
        renderCartButton()
      );
    } else if (item.price) {
      return React.createElement(
        "div",
        { className: "flex justify-between items-center p-2 rounded-md mt-2" },
        React.createElement(
          "p",
          { className: "text-amber-700 sm:text-xl font-bold" },
          item.price === "Soon" ? "Coming Soon" : `₱${item.price}`
        ),
        item.price !== "Soon" && renderCartButton()
      );
    }
    return null;
  };
  const renderSizeOptions = (item) => {
    if (item.sizes) {
      return React.createElement(
        "div",
        { className: "mb-4" },
        React.createElement(
          "p",
          { className: "text-sm text-amber-700 font-bold delius-font mb-2" },
          "Select Size:"
        ),
        React.createElement(
          "div",
          { className: "flex flex-wrap gap-2" },
          item.sizes.map((size) =>
            React.createElement(
              "button",
              {
                key: size,
                onClick: () => handleSizeSelect(item.name, size),
                className: `px-3 py-1 delius-font text-sm rounded-md transition-colors ${
                  selectedSize[item.name] === size
                    ? "bg-amber-600 text-white"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-300"
                }`,
              },
              size
            )
          )
        )
      );
    }
    return null;
  };
  return React.createElement(
    "div",
    { id: "menu", className: "py-16 pattern-topography bg-gray-50" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-4" },
      React.createElement(
        motion.h2,
        {
          variants: fadeInVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className:
            "text-3xl sm:text-5xl font-bold text-center mb-8 font-serif text-amber-800",
        },
        "Our Menu"
      ),
      menu.map((category) =>
        React.createElement(
          "div",
          { key: category.category, className: "mb-16" },
          React.createElement(
            motion.h3,
            {
              variants: fadeInVariants,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className:
                "sm:text-3xl text-2xl delius-font font-bold mb-8 text-amber-700 border-b-2 border-amber-500 pb-2",
            },
            category.category
          ),
          React.createElement(
            motion.div,
            {
              variants: containerVariants,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-100px" },
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
            },
            category.items.map((item, itemIndex) =>
              React.createElement(
                motion.div,
                {
                  key: `${category.category}-${itemIndex}`,
                  variants: itemVariants,
                  className:
                    "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300",
                },
                React.createElement(
                  "div",
                  { className: "relative h-48" },
                  React.createElement("img", {
                    src: item.image,
                    alt: item.name,
                    className: "w-full h-full object-cover",
                  })
                ),
                React.createElement(
                  "div",
                  { className: "p-4" },
                  React.createElement(
                    "h4",
                    {
                      className:
                        "font-bold delius-font text-lg mb-2 text-gray-800",
                    },
                    item.name
                  ),
                  renderSizeOptions(item),
                  " ",
                  renderPrice({
                    item: item, // Cast item to CartItem
                    selectedSize,
                    handleCartAction,
                    isInCart,
                  })
                )
              )
            )
          )
        )
      )
    )
  );
};
export default Menu;
