import { ADD_TO_CART } from "./cartTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product: product,
    },
  };
};
