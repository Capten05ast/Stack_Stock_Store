

import { ToastContainer } from "react-toastify"
import { toast } from "react-toastify"
import axios from "../../api/axiosconfig"
import { loadproduct } from "../reducers/productSlice";


export const asyncloadproducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");

    // This will put all the ojects from /products json file into store
    dispatch(loadproduct(data))
  } catch (error) {
    console.log(error)
  }
}


export const asynccreateproduct = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product)
    dispatch(asyncloadproducts())
  } catch (error) {
    console.log(error)
  }
}


export const asyncupdateproduct = (id, product) => async (dispatch, getState) => {
  try {
    await axios.patch("/products/" + id, product)
    dispatch(asyncloadproducts())
  } catch (error) {
    console.log(error)
  }

  // PATCH v/s PUT :-
  // Patch only updates those areas which have been changed
  // Put replaces the whole data 
}


export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
  try {

    // DELETION :-
    // http://localhost:3000/products/1
    // This gives us only first product from the products api

    await axios.delete("/products/" + id)
    dispatch(asyncloadproducts())
  } catch (error) {
    console.log(error)
  }


  // PATCH v/s PUT :-
  // Patch only updates those areas which have been changed
  // Put replaces the whole data 
}


