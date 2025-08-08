

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const AuthWrapper = (props) => {
  // NO PROPS DRILLING :- 
  // props.children refers to whatever you wrap inside a component’s opening and closing tags

  const {users} = useSelector((state) => state.userReducer);  
  return users? props.children : <Navigate to="/login" />
}

export default AuthWrapper


// WHY AUTHWRAPPER :-
// Because if user puts create-product in url of website then it should not 
// open if user is not logged in, in that case authwrapper prevents every
// route to check whether user is logged in or not

