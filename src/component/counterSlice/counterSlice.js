const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    countValue: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.countValue = state.countValue + 1
        },
        decrement: (state) => {
            state.countValue = state.countValue - 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;