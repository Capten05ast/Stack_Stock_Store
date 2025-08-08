

import React from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncregisteruser } from '../../store/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { asynccreateproduct } from '../../store/actions/productActions';

const CreateProduct = () => {

  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProductHandler = (product) => {
      product.id = nanoid();
      product.isAdmin = false;
      console.log(product);
      dispatch(asynccreateproduct(product))
      navigate("/products")
  }

  return (
    <div>
    <form 
      onSubmit={handleSubmit(createProductHandler)} 
      className="flex flex-col gap-5 sm:w-[90%] w-[96%] max-w-2xl mx-auto mt-10 sm:p-8 p-3 rounded-xl shadow-lg bg-gray-900 border-[2.5px] border-amber-100 ">

      <h2 className="text-3xl font-bold text-orange-400 mb-4 text-center tracking-wide">
        ✨ Create New Product
      </h2>

      <input 
        {...register("image")}
        className="rounded-md sm:p-3 p-2 text-xl bg-[#2d3748] text-white focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-200" 
        type="url" 
        placeholder="Image URL" 
      />

      <input 
        {...register("title")}
        className="rounded-md sm:p-3 p-2 text-xl bg-[#2d3748] text-white  focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-200" 
        type="text" 
        placeholder="Product Title" 
      />

      <input 
        {...register("price")}
        className="rounded-md sm:p-3 p-2 text-xl bg-[#2d3748] text-white  focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-200" 
        type="number" 
        placeholder="0.00 $" 
      />

      <textarea 
        {...register("description")}
        className="sm:my-3 my-5 rounded-md sm:p-3 p-2 text-xl bg-[#2d3748] text-white  focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none transition duration-200" 
        placeholder="Enter description here..." 
        rows={8}
      />

      <input 
        {...register("category")}
        className="rounded-md sm:p-3 p-2 text-xl bg-[#2d3748] text-white  focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-200" 
        type="text" 
        placeholder="Category Name" 
      />

      <button 
        type="submit"
        className="sm:text-lg text-xl sm:my-3 my-5 self-center bg-red-600 hover:bg-red-700 text-white font-bold tracking-wide px-6 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300">
        🔥 Create Product
      </button>

    </form>
    <br />
    <br />
    </div>
  )
}

export default CreateProduct
