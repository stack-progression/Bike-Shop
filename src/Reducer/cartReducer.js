export const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE: "REMOVE_ONE",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  CLEAR_CART: "CLEAR_CART",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { p } = action.payload;
      const itemCart = state.find((item) => item.id === p.id);

      return itemCart
        ? state.map((item) =>
            item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...state, { ...p, quantity: 1 }];
    }

    case CART_ACTIONS.REMOVE_ONE: {
      const itemRemove = state.find((item) => item.id === action.payload.id);

      if (!itemRemove) return state;

      return itemRemove.quantity > 1
        ? state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
        : state.filter((item) => item.id !== action.payload.id);
    }

    case CART_ACTIONS.DELETE_PRODUCT:
      return state.filter((item) => item.id !== action.payload.id);

    case CART_ACTIONS.CLEAR_CART:
      return [];

    default:
      return state;
  }
};
