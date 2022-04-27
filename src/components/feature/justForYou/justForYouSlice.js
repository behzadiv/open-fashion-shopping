import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    data:[],
    loading:false,
    error:null
}
export const getJustForYou =createAsyncThunk("justForYou",async(_,{rejectWithValue})=>{
try {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
} catch (error) {
    return rejectWithValue([],error.message)
}
})
export const justForYouSlice =createSlice({
    name:"justForYou",
    reducers:{},
    initialState,
    extraReducers:{
        [getJustForYou.fulfilled]:(state,action)=>{
            return{...state,data:action.payload,error:null,loading:false}
        },
        [getJustForYou.rejected]:(state,action)=>{
            return{...state,data:[],error:action.error,loading:false}
        },
        [getJustForYou.pending]:(state,action)=>{
            return{...state,data:[],error:null,loading:true}
        },
    }
})

export default justForYouSlice.reducer