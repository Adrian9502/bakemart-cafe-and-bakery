import React, { createContext, useState, useContext } from 'react';
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems(prev => [...prev, item]);
    };
    const removeFromCart = (item) => {
        setCartItems(prev => prev.filter(i => i !== item));
    };
    const isInCart = (item) => {
        return cartItems.includes(item);
    };
    return (React.createElement(CartContext.Provider, { value: { cartItems, addToCart, removeFromCart, isInCart } }, children));
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
