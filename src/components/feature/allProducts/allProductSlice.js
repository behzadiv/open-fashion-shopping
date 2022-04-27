import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
  error: "",
  loading: false,
};
export const getAllProductsData = createAsyncThunk(
  "getProductData",
  async (category, { rejectWithValue }) => {
    try {
      //console.log(category);
      const response = await axios.get(!category?`https://fakestoreapi.com/products`:`https://fakestoreapi.com/products/category/${category}`);
      return response.data;
    } catch (error) {
     return rejectWithValue([], error.message);
    }
  }
);
export const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getAllProductsData.fulfilled]: (state, action) => {
      return { ...state, data: action.payload, loading: false, error: null };
    },
    [getAllProductsData.rejected]: (state, action) => {
      return { ...state, data:[], loading: false, error: action.error };
    },
    [getAllProductsData.pending]: (state, action) => {
      return { ...state, data:[], loading: true, error: null };
    },
  },
});
export default allProductsSlice.reducer;
