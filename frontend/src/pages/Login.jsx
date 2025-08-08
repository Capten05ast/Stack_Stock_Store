

// LOGIN FLOW :-
// We are going to keep user logged in until his data is present in local storage
// Once the user logs out his data gets vanished from local storage 


import React from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
import { asyncloginuser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (user) => {
      console.log(user);
      dispatch(asyncloginuser(user));
      navigate("/");
  }

  return (
    <div className="flex place-items-start justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 sm:px-4 px-1">
      <form 
        onSubmit={handleSubmit(loginHandler)} 
        className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-center text-3xl font-bold text-white mb-2 font">Welcome Back!</h2>
        <p className="text-center text-gray-300 text-lg">Please enter your credentials to login</p>

        <input 
          {...register("email")}
          className="sm:text-xl text-xl p-3 rounded-md bg-gray-900 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          type="email" 
          placeholder='john@doe.com' 
        />

        <input 
          {...register("password")}
          className="sm:text-xl text-xl p-3 rounded-md bg-gray-900 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          type="password" 
          placeholder='*********' 
        />

        <button 
          type="submit"
          className="text-xl w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all"
        >
          Login
        </button>

        <p className="text-center text-gray-300 text-sm mt-4">
          Don’t have an account? 
          <Link 
            className="text-red-400 ml-1 font-semibold hover:underline" 
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login;
