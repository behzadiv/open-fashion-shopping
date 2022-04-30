import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./allProducts/allProductSlice";
import cartsReducer from "./cart/cartsSlice";
import justForYouReducer from "./justForYou/justForYouSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductReducer,
    justForYou: justForYouReducer,
    carts: cartsReducer,
  },
});
