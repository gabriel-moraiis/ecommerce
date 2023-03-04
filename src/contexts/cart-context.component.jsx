import {
  createContext, useReducer,
} from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

export const CartContext = createContext();

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  total: 0,
  isCartOpen: false,
};

export const CART_ACTIONS_TYPES = {
  UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [
    {
      cartItems, cartCount, total, isCartOpen,
    },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);

    const newTotal = newCartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.quantity * cartItem.price);
    }, 0);

    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      total: newTotal,
    };

    dispatch(createAction(CART_ACTIONS_TYPES.UPDATE_CART_ITEMS, payload));
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, bool));
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
      updateCartItemsReducer([...cartItems, { ...item, quantity: 1 }]);
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
    updateCartItemsReducer([]);
  };

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
