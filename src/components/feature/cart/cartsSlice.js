import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
  total: 0,
};
export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCarts: (state, action) => {
      const updatedCarts = [...state.carts];
      const updatedItemIndex = updatedCarts.findIndex(
        (c) => c.id === action.payload.id
      );
      console.log(updatedCarts, updatedItemIndex);
      if (updatedItemIndex < 0) {
        updatedCarts.push({ ...action.payload, quantity: 1 });
      } else {
        const selectedCart = { ...updatedCarts[updatedItemIndex] };
        selectedCart.quantity++;
        updatedCarts[updatedItemIndex] = selectedCart;
      }
      return {
        ...state,
        carts: updatedCarts,
        total: state.total + action.payload.price,
      };
    },
  },
});

export const { addToCarts } = cartsSlice.actions;
export default cartsSlice.reducer;