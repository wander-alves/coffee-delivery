export interface OrderItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imgUrl: string;
}

interface OrderInfo {
  zipcode: string;
  address: string;
  addressNumber?: number;
  addressInfo: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

export interface Order {
  items: OrderItem[];
  orderInfo: OrderInfo;
  deliveryTax: number;
}

interface ActionsTypes {
  type: 'ADD_ON_CART' | 'REMOVE_FROM_CART';
  payload: {
    item: OrderItem;
  };
}

export function cartReducer(state: Order, actions: ActionsTypes) {
  switch (actions.type) {
    case 'ADD_ON_CART': {
      const itemOnCart = state.items.find((item) => item.id === actions.payload.item.id);
      if (itemOnCart) {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === actions.payload.item.id) {
              return {
                ...item,
                price: evaluateItemPrice(actions.payload.item.price, actions.payload.item.quantity),
                quantity: actions.payload.item.quantity,
              };
            }
            return {
              ...item,
              price: evaluateItemPrice(item.price, item.quantity),
            };
          }),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            ...actions.payload.item,
            price: evaluateItemPrice(actions.payload.item.price, actions.payload.item.quantity),
          },
        ],
      };
    }
    case 'REMOVE_FROM_CART': {
      const filteredItemsList = state.items.filter((item) => item.id !== actions.payload.item.id);
      return {
        ...state,
        items: filteredItemsList,
      };
    }
    default:
      return state;
  }
}

function evaluateItemPrice(price: number, quantity: number) {
  const itemPriceInt = price * 100;
  return (itemPriceInt * quantity) / 100;
}
