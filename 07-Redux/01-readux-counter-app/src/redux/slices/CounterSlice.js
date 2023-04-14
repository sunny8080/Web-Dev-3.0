import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

// any slice must have three object, {name:"", initialState:{}, reducers:{} }
export const CounterSlice = createSlice({
    name: "counterApp",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },

        decrement: (state) => {
            state.count -= 1;
        },

        reset: (state) => {
            state.count = 0;
        }
    }
})

// console.log(CounterSlice)

// export all the reducers
export const { increment, decrement, reset } = CounterSlice.actions;

// export reducer, it is used in store
export default CounterSlice.reducer;

