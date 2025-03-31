const initialState = [];

const wishlistReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "ADD_TO_WISHLIST":
      const itemIndex = state.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex === -1) {
        return [...state, { ...action.payload }];
      } else {
        return state?.filter((st) => st?._id !== action?.payload?._id);
      }
    case "REMOVE_FROM_WISHLIST":
      return state?.filter((st) => st?._id !== action?.payload?._id);
    default:
      return state;
  }
};

export default wishlistReducer;
