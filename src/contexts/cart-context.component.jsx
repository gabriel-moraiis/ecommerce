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

    const removeItemToCart = (item) => {
        const cartItemsFiltered = cartItems.filter((cartItem) => {
            return cartItem.id !== item.id;
        });

        setCartItems(cartItemsFiltered);
    };

    const decrementItemToCart = (item) => {
        if (item.quantity === 1) removeItemToCart(item);
        const cartItemsMapped = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) cartItem.quantity -= 1;
            return cartItem;
        });

        setCartItems(cartItemsMapped);
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
        decrementItemToCart,
    };

    return (
      <CartContext.Provider
        value={value}
      >
        {children}
      </CartContext.Provider>
    );
};
