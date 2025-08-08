

import React from 'react'
import axios from './api/axiosconfig'
import { useEffect } from 'react'
import { asynccurrentuser, asyncregisteruser } from './store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
// import { asyncloadproducts } from './store/actions/productActions';


const App = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer)
  const { products } = useSelector((state) => state.productReducer)


  // AVOID MANUAL REFRESHING :-
  useEffect(() => {
    // whenever users is refreshed useEffect must run
    !users && dispatch(asynccurrentuser())
  }, [users])




  // useEffect(() => {
  //   // whenever products is refreshed useEffect must run
  //   // dispatch(asyncregisteruser());
  //   // This will enter empty fields in email, password except id, thats why commented 
  //   products.length == 0 && dispatch(asyncloadproducts());
  // }, [products])




  // INFINITE SCROLLING LOADING ISSUE :-
  // If you wanna avoid slow loading issue then remove overflow from the return div
  return (
    <div className='text-white font-thin w-screen h-screen bg-gray-800 p-3 scrollbar-hide'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App




// FAKESTORE API :-
// This is a website for getting APIs for different purpose


// NPM JSON SERVER :-
// From this we can create our own apis
// search its website on google
// How to setup json server is fully given on website


// BACKEND :-
// Command for hosting backend on local host 
// npx json-server db.json
// Or go to the github repo typicode json server




// LAZY LOADING AND PAGINATION :-
// > Install npm infinite scroll component from its website
// > All installation instructions are given 
// > get the api for products from free api and put 20 products in backend
// > Open npm json-server also




// CUSTOM HOOK v/s COMPONENT :-
// Custom hook returns functionality (login, logout)
// Component returns UI (h1, div)




// SEARCH PRODUCT FEATURE :-
// use useState and binding for it and input 




// PROJECT TOPICS COVERED (+features) :-
// 1. Redux-Toolkit
// 2. Bancend (JSON-server + typicode github + FakeStore API)
// 3. AuthWrapper
// 4. Pagination and infinite scroll
// 5. Add to cart functionality
// 6. Register Login User
// 7. Rendering of products
// 5. suspense
// 6. loadlazy product
// 7. Admin account and user account
