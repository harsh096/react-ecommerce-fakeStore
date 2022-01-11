import { ADD_TO_CART, EMPTY_CART } from "./cartTypes";

const initialState = {
  cartProducts: [],
  quantity: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload.product],
        quantity: state.quantity + 1,
        total: state.total + action.payload.product.price,
      };
    case EMPTY_CART:
      return {
        // ...state,
        cartProducts: [],
        quantity: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
