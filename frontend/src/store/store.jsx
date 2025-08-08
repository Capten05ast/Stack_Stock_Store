

// INSTALLING REDUX :-
// > Go to official website of redux toolkit
// > get started -> Quick start -> copy cmds


import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./reducers/userSlice"
import productSlice from "./reducers/productSlice"
import cartSlice from "./reducers/cartSlice"

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: productSlice,
    cartReducer: cartSlice
  },
})


// userReducer, userSlice, userCart are used to put data inside store.
// And now we need to show the data which is stored inside the store
