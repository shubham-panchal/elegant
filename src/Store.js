import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartReducer";
import wishlistReducer from "./reducers/WishlishtReducer";
import AuthReducer from "./reducers/AuthReducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    wishlist: wishlistReducer,
    auth: AuthReducer,
  },
});

// store?.getState((s) => console.log(s))
