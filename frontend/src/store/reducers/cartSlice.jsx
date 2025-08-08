

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts : [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        loadcart: (state, action) => {
            // Here we cannot call api (Synchronus actions)
            // Thats why we are putting payload here, means api is being 
            // called somewhere else using dispatch for action
            state.carts = action.payload;
        }
    }
})

export default cartSlice.reducer
export const { loadcart } = cartSlice.actions


// REDUCER'S :-
// Reducers contains those synchronus actions which are going to 
// change initialState. Reducers can hold only synchronus data only


// state.carts = action.payload;
// > state is the current Redux state for this slice (for example: { carts: [] }).
// > action.payload is the data you pass when you call dispatch(loadcart(data)).
// > state.carts = action.payload means:
//   "Replace the carts array in the state with the data that I’m passing."
