import React, { createContext, useState, useContext } from 'react';

interface CartContextType {
  cartItems: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  isInCart: (item: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setCartItems(prev => [...prev, item]);
  };

  const removeFromCart = (item: string) => {
    setCartItems(prev => prev.filter(i => i !== item));
  };

  const isInCart = (item: string) => {
    return cartItems.includes(item);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};