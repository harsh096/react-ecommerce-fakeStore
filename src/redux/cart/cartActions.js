import { ADD_TO_CART, EMPTY_CART } from "./cartTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product: product,
    },
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
