import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
