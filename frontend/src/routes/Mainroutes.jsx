

import React, { lazy } from 'react'
import { Route, Routes } from "react-router-dom"
import { useSelector } from 'react-redux'
import Home from '../pages/Home'

const Products = lazy(() => import("../pages/Products"))
const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"))
const ProductDetails  = lazy(() => import("../pages/admin/ProductDetails"))
const UserProfile = lazy(() => import("../pages/user/UserProfile"))
const PageNotFound = lazy(() => import("../PageNotFound"))
const AuthWrapper = lazy(() => import("./AuthWrapper"))

// LAZY LOADING :-
// Now cart will load only if its needed otherwise it wont.
// We need to do this with every component being imported in main routes
const Cart = lazy(() => import("../pages/Cart"))




const Mainroutes = () => {

  // const { userReducer : {users} } = useSelector((state) => state)
  const users = useSelector((state) => state.userReducer.users)

  // If user is logged in then he will see products
  // If user is logged out then he will see home
  return (
    <Routes>
        <Route path='/' element={users? <Products /> : <Home />} />


        {/* NON - AUTHENTICATED ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* AUTHENTICATED ROUTES */}
        <Route path="/admin/create-product" element={
          <AuthWrapper> 
            <CreateProduct /> 
          </AuthWrapper> 
        } />

        <Route path="/admin/user-profile" element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper> 
        } />

        <Route path="/product/:id" element={
          <AuthWrapper>
            <ProductDetails />
          </AuthWrapper> 
        } /> 

        <Route path="/cart" element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper> 
        } /> 


        <Route path="*" element={<PageNotFound />} />    
    </Routes>
  )
}

export default Mainroutes