import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = { isCartOpen, setIsCartOpen, cartToggle };

  return (
    <CartContext.Provider
      value={value}
    >
      {children}
    </CartContext.Provider>
  );
};
