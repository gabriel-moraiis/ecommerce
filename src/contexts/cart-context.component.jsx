import {
 createContext, useEffect, useReducer,
} from 'react';

export const CartContext = createContext();

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  total: 0,
  isCartOpen: false,
};

export const CART_ACTIONS_TYPES = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  CALCULATE_TOTAL_CART: 'CALCULATE_TOTAL_CART',
  CALCULATE_TOTAL_ITEMS: 'CALCULATE_TOTAL_ITEMS',
  TOGGLE_CART_DROPDOWN: 'TOGGLE_CART_DROPDOWN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: payload,
      };
      case CART_ACTIONS_TYPES.CALCULATE_TOTAL_CART:
        return {
          ...state,
          total: payload,
        };
        case CART_ACTIONS_TYPES.CALCULATE_TOTAL_ITEMS:
          return {
            ...state,
            cartCount: payload,
          };
        case CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN:
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
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [total, setTotal] = useState(0);

    const setCartItems = (items) => {
      dispatch({
        type: CART_ACTIONS_TYPES.ADD_ITEM_TO_CART,
        payload: items,
      });
    };

    const setTotal = (priceTotal) => {
      dispatch({
        type: CART_ACTIONS_TYPES.CALCULATE_TOTAL_CART,
        payload: priceTotal,
      });
    };

    const setCartCount = (itemsTotal) => {
      dispatch({
        type: CART_ACTIONS_TYPES.CALCULATE_TOTAL_ITEMS,
        payload: itemsTotal,
      });
    };

    const setIsCartOpen = (toggleIsCartOpen) => {
      dispatch({
        type: CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN,
        payload: toggleIsCartOpen,
      });
    };

    const addItemToCart = (item) => {
        const itemExists = cartItems.find((product) => product.id === item.id);
        if (itemExists) {
            const cartItemsMap = cartItems.map((product) => {
                if (product.id === itemExists.id) product.quantity += 1;
                return product;
            });
            setCartItems(cartItemsMap);
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
        if (item.quantity === 1) {
        removeItemToCart(item);
        return;
        }
        const cartItemsMapped = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) cartItem.quantity -= 1;
            return cartItem;
        });

        setCartItems(cartItemsMapped);
    };

    const countItemsCart = () => {
        const itemsTotal = cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity;
        }, 0);

        setCartCount(itemsTotal);
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        countItemsCart();
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
