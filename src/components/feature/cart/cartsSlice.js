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
      //console.log(updatedCarts, updatedItemIndex);
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
    decrementCart:(state,action)=>{
     const updatedCarts = [...state.carts]
     const updatedItemIndex =  updatedCarts.findIndex((c)=>c.id ===action.payload.id)
     const selectedCart = {...updatedCarts[updatedItemIndex]}
     if(action.payload.quantity > 1){
       selectedCart.quantity--
       updatedCarts[updatedItemIndex] =selectedCart
      }
      else{
       console.log(selectedCart,updatedCarts);
        updatedCarts.splice(updatedItemIndex,1)
     }
     return{...state,carts:updatedCarts,total:state.total-action.payload.price}
    }
  },
});

export const { addToCarts,decrementCart } = cartsSlice.actions;
export default cartsSlice.reducer;
