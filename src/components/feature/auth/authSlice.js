import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data:JSON.parse(localStorage.getItem("authState"))|| false
}
export const authSlice =createSlice ({
    name:"auth",
    initialState,
    reducers:{
        setAuth : (state,action)=>{
            //console.log(action.payload);
            state.data=action.payload;
        }
    }
})
export const {setAuth}= authSlice.actions
export default authSlice.reducer;