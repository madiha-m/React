import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
    //object.freeze is used no onw will change value of onbj, or make as readonly obj
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: { //reducers call sync not async , we can't call api in reducers, solution is THUK Middleware
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.data = action.payload;
        },
    },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

