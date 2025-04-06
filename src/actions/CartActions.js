export const CartActions = {
  addToCart: (data) => ({ type: "ADD_TO_CART", payload: data }),
  getCart: () => ({ type: "GET_CART" }),
  increaseQuantity: (data) => ({ type: "INCREASE_QUANTITY", payload: data }),
  decreaseQuantity: (data) => ({ type: "DECREASE_QUANTITY", payload: data }),
  removeFromCart: (data) => ({ type: "REMOVE_FROM_CART", payload: data }),
  toggleCart: () => ({ type: "TOGGLE_CART" }),
};
