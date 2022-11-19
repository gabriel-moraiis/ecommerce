import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);

    const addItemToCart = (item) => {
        const itemExists = cartItems.find((product) => product.id === item.id);
        if (itemExists) {
            const cartItemsMap = cartItems.map((product) => {
                if (product.id === itemExists.id) product.quantity += 1;
                return product;
            });
            setCartItems([...cartItemsMap]);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const calculateTotalCart = () => {
        const totalCart = cartItems.reduce((acc, cartItem) => {
            return acc + (cartItem.quantity * cartItem.price);
        }, 0);

        setTotal(totalCart);
    };

    const removeItemToCart = (id) => {
        const cartItemsFiltered = cartItems.filter((cartItem) => {
            return cartItem.id !== id;
        });

        setCartItems(cartItemsFiltered);
    };

    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);

    useEffect(() => {
        calculateTotalCart();
    }, [cartItems]);

    const cartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartToggle,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemToCart,
        total,
    };

    return (
      <CartContext.Provider
        value={value}
      >
        {children}
      </CartContext.Provider>
    );
};
