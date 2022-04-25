import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./allProducts/allProductSlice";

export const store =configureStore({reducer:{allProducts:allProductReducer}})