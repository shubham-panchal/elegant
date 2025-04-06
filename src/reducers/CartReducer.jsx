let initialState = {
  cart: [],
  openCart: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "GET_CART":
      return state;

    case "ADD_TO_CART":
      const itemIndex = state?.cart?.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex === -1) {
        return {
          ...state,
          cart: [...state?.cart, { ...action.payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state?.cart?.map((item, index) =>
            index === itemIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state?.cart?.filter((item) => item?._id !== action?.payload?._id),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state?.cart?.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      const selectedItem = state?.cart?.find(
        (item) => item._id === action.payload._id
      );
      if (selectedItem && selectedItem?.quantity === 1) {
        return {
          ...state,
          cart: state?.cart?.filter((items) => items._id !== selectedItem._id),
        };
      } else {
        return {
          ...state,
          cart: state?.cart?.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
    case "TOGGLE_CART":
      return { ...state, openCart: !state?.openCart };
    default:
      return state;
  }
};

export default CartReducer;
