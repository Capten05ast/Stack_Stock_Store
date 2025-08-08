

import React from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncregisteruser } from '../store/actions/userActions';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    console.log(user);
    dispatch(asyncregisteruser(user));
    navigate("/login");
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 sm:px-4 px-1">
      <form
        onSubmit={handleSubmit(RegisterHandler)}
        className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg flex flex-col gap-5"
      >
        <h2 className="text-center text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-center text-gray-300 text-lg">Register to get started</p>

        <input
          {...register("username")}
          className="sm:text-xl text-xl p-3 rounded-md bg-gray-900 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          type="text"
          placeholder="John-Doe"
        />

        <input
          {...register("email")}
          className="sm:text-xl text-xl p-3 rounded-md bg-gray-900 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          type="email"
          placeholder="john@doe.com"
        />

        <input
          {...register("password")}
          className="sm:text-xl text-xl p-3 rounded-md bg-gray-900 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          type="password"
          placeholder="*********"
        />

        <button
          type="submit"
          className="text-xl w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all"
        >
          Register
        </button>

        <p className="text-center text-gray-300 text-sm mt-4">
          Already have an account?
          <Link
            className="text-red-400 ml-1 font-semibold hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
