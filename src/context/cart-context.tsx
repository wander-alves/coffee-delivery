import { createContext, useReducer, type ReactNode } from 'react';
import { cartReducer, type OrderItem } from './cart-reducer';

interface CartContextProps {
  items: OrderItem[];
  ordersCount: number;
  addCartItem: (item: OrderItem) => void;
  removeCartItem: (item: OrderItem) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    deliveryTax: 3.5,
  });

  function addCartItem(item: OrderItem) {
    dispatch({
      type: 'ADD_ON_CART',
      payload: {
        item,
      },
    });
  }
  function removeCartItem(item: OrderItem) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        item,
      },
    });
  }

  const { items } = cartState;
  const ordersCount = items.length;

  return (
    <CartContext.Provider
      value={{
        items,
        ordersCount,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
