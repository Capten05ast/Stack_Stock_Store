








import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../store/actions/userActions';

const UserProfile = () => {

  // Retriving products and user from store 
  const { 
    userReducer: { users },
  } = useSelector((state) => state)

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    }
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // CAUTION :
  // user = object of react hook form
  // users = retrived from store using useSelector()
  const updateUserHandler = (user) => {
    // We got this id from useParams and not from products
    dispatch(asyncupdateuser(users.id, user))
    console.log(user)
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(users.id))
    navigate("/login")
  }

  const LogoutUserHandler = () => {
    dispatch(asynclogoutuser())
    navigate("/login")
  }

  return users ? (
    <div className="w-[90%] max-w-2xl mx-auto mt-10 p-8 rounded-xl shadow-lg bg-[#1f2937] border-l-4 border-orange-500 mb-5">
      
      <h2 className="text-3xl font-bold text-orange-400 mb-2 flex items-center gap-2">
        <span className='relative bottom-1'>🪪</span> <span>{users.username}</span>
      </h2>

      <h2 className="text-xl font-medium text-orange-300 mb-6 flex items-center gap-2">
        📩 <span>{users.email}</span>
      </h2>

      <form 
        onSubmit={handleSubmit(updateUserHandler)} 
        className="flex flex-col gap-4">

        <input 
          {...register("username")}
          className="mt-7 rounded-md p-3 text-xl bg-[#2d3748] text-white placeholder-orange-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition" 
          type="text" 
          placeholder="John Doe" 
        />

        <input 
          {...register("email")}
          className="rounded-md p-3 text-xl bg-[#2d3748] text-white placeholder-orange-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition" 
          type="email" 
          placeholder="john@doe.com" 
        />

        <input 
          {...register("password")}
          className="rounded-md p-3 text-xl bg-[#2d3748] text-white placeholder-orange-300 focus:ring-2 focus:ring-orange-400 focus:outline-none transition" 
          type="password" 
          placeholder="*********" 
        />

        <button 
          type="submit"
          className="mt-7 text-lg w-fit bg-gradient-to-r from-orange-500 to-red-500 hover:brightness-110 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300"
        > 
          🔄 Update User
        </button>

        <button 
          type="button"
          onClick={LogoutUserHandler} 
          className="text-lg w-fit bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300"
        > 
          🚪 Logout
        </button>


        <button 
          // We did type = "button", because a form cant have two 
          // submit buttons, so when we set type = "button", its no 
          // more a submit type button
          type="button"
          onClick={DeleteHandler} 
          className="text-lg w-fit bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition duration-300"
        > 
          ❌ Delete Account
        </button>

      </form>

    </div>
  ) : "Loading...";
}

export default UserProfile
