import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state, action){
            //mutate the state, updating state, 
            //createSlice do it like old redux do
            //return [...state, action.payload]]
            state.push(action.payload);
        },
        remove(state, action){
            // state = state.filter((item)=> item.id !== action.payload);
            // it will not work , mutation not returning new state

            return state.filter((item)=> item.id !== action.payload);
        },
    },
});

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;