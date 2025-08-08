import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asynclogoutuser } from '../store/actions/userActions'

const Nav = () => {

  const user = useSelector(state => state.userReducer.users)
  console.log(user);

  return (
    <nav className='text-xl flex justify-center items-center gap-x-7 p-7 mb-3 sm:text-xl font-normal'> 

      <NavLink 
        className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white"} 
        to="/"
      >
        {user ? "Products" : "Home"}
      </NavLink>

      {user ? (
        <>
          {user?.isAdmin && (
            <NavLink 
              className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white"} 
              to="/admin/create-product"
            >
              Create
            </NavLink>
          )}
          <NavLink 
            className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white"} 
            to="/admin/user-profile"
          >
            Settings
          </NavLink> 

          <NavLink 
            className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white"} 
            to="/cart"
          >
            Cart
          </NavLink>
        </>
      ) : (
        <>
          <NavLink 
            className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-white"} 
            to="/login"
          >
            Login
          </NavLink>
        </>
      )}    
    </nav>
  )
}

export default Nav








