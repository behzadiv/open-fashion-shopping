import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  total: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (c) => c.id === action.payload.id
      );
      console.log(updatedCart, updatedItemIndex);
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const selectedCart = { ...updatedCart[updatedItemIndex] };
        selectedCart.quantity++;
        updatedCart[updatedItemIndex] = selectedCart;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price,
      };
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
