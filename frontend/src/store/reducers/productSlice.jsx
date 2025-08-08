


import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, action) => {
            console.log(action)
            state.products = action.payload;
        },
        loadlazyproduct: (state, action) => {
            state.products = [...state.products, ...action.payload]
        }
    }
})

export const { loadproduct, loadlazyproduct } = productSlice.actions
export default productSlice.reducer;




// ✅ LOADPRODUCT VS LOAD LAZY PRODUCT
// LOADPRODUCT
// This replaces the entire product list with a new one.
// Usually used when:
// You initially load the products (first API call).
// Or you refresh the entire product list.


// LAZY LOAD PRODUCT
// This adds new products to the existing list without removing old ones.
// Why? Because lazy loading or infinite scroll works by fetching data in chunks (pages) and appending it.
// So:
// First, you load page 1 → loadproduct sets it.
// Then you scroll down, fetch page 2 → loadlazyproduct adds it to the existing list.


// ✅ Why structure is like this?
// Because:
// loadproduct = initial load (replace).
// loadlazyproduct = append new data for infinite scroll.

