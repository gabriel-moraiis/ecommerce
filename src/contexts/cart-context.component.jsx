import {
    useReducer, createContext, useEffect, useState,
} from 'react';

export const CartContext = createContext();

const USER_ACTIONS_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    TOGGLE_CART: 'TOGGLE_CART',
};

const INITIAL_VALUES_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    total: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTIONS_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case USER_ACTIONS_TYPES.TOGGLE_CART:
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

export const CartProvider = ({ children }) => {
    const [{
        isCartOpen, cartItems, cartCount, total,
    }, dispatch] = useReducer(cartReducer, INITIAL_VALUES_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newItemsTotal = newCartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        }, 0);

        const newTotalCart = newCartItems.reduce((acc, cartItem) => {
            return acc + (cartItem.quantity * cartItem.price);
        }, 0);

        dispatch({
            type: USER_ACTIONS_TYPES.SET_CART_ITEMS,
            payload: { cartItems: newCartItems, total: newTotalCart, cartCount: newItemsTotal },
        });
    };

    const addItemToCart = (item) => {
        const itemExists = cartItems.find((product) => product.id === item.id);
        if (itemExists) {
            const cartItemsMap = cartItems.map((product) => {
                if (product.id === itemExists.id) product.quantity += 1;
                return product;
            });
            updateCartItemsReducer(cartItemsMap);
        } else {
            const newCartItems = [...cartItems, { ...item, quantity: 1 }];
            updateCartItemsReducer(newCartItems);
        }
    };

    const removeItemToCart = (item) => {
        const cartItemsFiltered = cartItems.filter((cartItem) => {
            return cartItem.id !== item.id;
        });

        updateCartItemsReducer(cartItemsFiltered);
    };

    const decrementItemToCart = (item) => {
        if (item.quantity === 1) {
            removeItemToCart(item);
            return;
        }
        const cartItemsMapped = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) cartItem.quantity -= 1;
            return cartItem;
        });
        updateCartItemsReducer(cartItemsMapped);
    };

    const emptyCart = () => {
        const newCartItems = [];
        updateCartItemsReducer(newCartItems);
    };

    const cartToggle = () => {
        dispatch({ type: USER_ACTIONS_TYPES.TOGGLE_CART });
    };

    const value = {
        isCartOpen,
        cartToggle,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemToCart,
        total,
        decrementItemToCart,
        emptyCart,
    };

    return (
      <CartContext.Provider
        value={value}
      >
        {children}
      </CartContext.Provider>
    );
};
