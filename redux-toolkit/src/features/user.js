import { createSlice } from '@reduxjs/toolkit';

//accepts initialState, obj of reducer fun , slice name, 
//it generates auto the action creators and action types of corresponding reducer and state.

const initialStateVal = { name: '', age: 0, email: '' }

export const userSlice = createSlice({  // export it so can access outside
    name: 'user', // name of slice > same as name of state
    initialState: { //initial state must have value property
        value: initialStateVal
        // {    //contains actual value of state
        //     name: '',
        //     age: 0,
        //     email: ''
        // }
    },
    reducers: { //actual redcer fun's, it alter value of app. having actions, 
        login: (
            state, //holds currend and prev values of state
            action //its obj contains payload and type. payload is obj, 
            //action has a type, and has some kind of data , this data is payload
            //action is not simple data but key value pair
        ) => {
            //here do something with state, change its value
            state.value = action.payload;
            //here above is get previous state (initial value) and change it from payload , we get new values 
        },
        logout: (
            state //no action needed there
            ) => { 
            state.value = initialStateVal
            // {
            //     name: '',
            //     age: 0,
            //     email: ''
            // }
        },
    },
});

export const { login, logout } = userSlice.actions; //access all actions we created. its fun in state

export default userSlice.reducer; //slice contais reducer
//need to export reducer , not the slice, bcaz we access reducer in index.js
