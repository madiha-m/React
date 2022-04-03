import { createSlice } from "@reduxjs/toolkit";
import { UserData } from '../FakeData'

export const crudSlice = createSlice({
    name: 'crud',
    initialState: {
        value: UserData
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user.userName = action.payload.userName
                }
            })
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
    }
});

export const { addUser, deleteUser, updateUser } = crudSlice.actions;

export default crudSlice.reducer;
