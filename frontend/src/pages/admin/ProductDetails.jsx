

import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { asyncupdateproduct, asyncdeleteproduct } from '../../store/actions/productActions'

const ProductDetails = () => {

  // const params = useParams()
  // console.log(params.id)
  // OR

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Retriving products from store 
  const products = useSelector((state) => state.productReducer.products)
  const { userReducer: { users } } = useSelector((state) => state)

  const product = products?.find((p) => p.id == id)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description
    }
  })

  const updateProductHandler = (product) => {
    // We got this id from useParams and not from products
    dispatch(asyncupdateproduct(id, product))
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id))
    navigate("/products")
  }

  return product ? (
    <div className="min-h-screen bg-gray- text-white sm:py-10 sm:px-6 px-2">
      {/* PRODUCT DISPLAY */}
      <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-900 sm:p-6 p-6 rounded-xl shadow-lg border-[1.8px] border-white">
        <img
          className="w-[300px] h-[260px] object-cover rounded-lg shadow"
          src={product.image}
          alt=""
        />
        <div className="flex-1">
          <h1 className="text-3xl sm:font-bold font-medium text-orange-400 mb-2">{product.title}</h1>
          <h2 className="sm:text-2xl text-3xl sm:font-semibold font-semibold text-green-400 mb-3 flex justify-center sm:justify-start mx-auto sm:mx-0">${product.price}</h2>
          <p className="text-gray-300 sm:text-lg text-xl mb-5">{product.description}</p>
          <button className="flex mx-auto sm:mx-0 justify-center text-xl sm:text-lg bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition">
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* ADMIN FORM */}
      {users?.isAdmin && (
        <form
          onSubmit={handleSubmit(updateProductHandler)}
          className="mt-12 bg-[#1e1e2e] border border-gray-700 rounded-xl sm:p-6 p-3 w-full md:w-2/3 mx-auto shadow-lg"
        >
          <h2 className="sm:text-3xl text-3xl sm:font-semibold font-medium text-orange-400 mb-6 flex sm:justify-start justify-center mx-auto">Admin: Edit Product</h2>

          <input
            {...register("image")}
            type="url"
            placeholder="Image URL"
            className="text-xl sm:text-lg w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
          />

          <input
            {...register("title")}
            type="text"
            placeholder="Title"
            className="text-xl sm:text-lg w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
          />

          <input
            {...register("price")}
            type="number"
            placeholder="0.00 $"
            className="text-green-500 font-bold text-2xl sm:text-lg w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-500"
          />

          <textarea
            {...register("description")}
            placeholder="Enter description here..."
            rows={8}
            className="mt-7 sm:mt-4 text-xl sm:text-lg w-full mb-7 sm:mb-4 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
          />

          <input
            {...register("category")}
            type="text"
            placeholder="Category"
            className="text-xl sm:text-lg w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
          />

          <div className="flex gap-4 sm:justify-start justify-center">
            <button
              type="submit"
              className="text-xl sm:text-xl sm:mt-0 mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold shadow transition"
            >
              Update Prod.
            </button>

            <button
              // We did type = "button", because a form cant have two 
              // submit buttons, so when we set type = "button", its no 
              // more a submit type button
              type="button"
              onClick={DeleteHandler}
              className="text-xl sm:text-xl sm:mt-0 mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold shadow transition"
            >
              Delete Prod.
            </button>
          </div>
        </form>
      )}
      <br />
    </div>
  ) : (
    <div className="text-white text-xl text-center mt-10">Loading...</div>
  )
}

export default ProductDetails




// NESTED DESTRUCTURING :-
// const {
//   userReducer: { users }
// } = useSelector((state) => state)
// This is doing:
// 1. useSelector((state) => state) gives the entire state object.
// 2. { userReducer: { users } } means:
// 3. Go inside state.userReducer.
// 4. From userReducer, take out users.
// 5. Put it in a variable called users


// NESTED DESTRUCTURING IN TWO WAYS :-
// const { userReducer } = useSelector((state) => state);
// const { users } = userReducer;

