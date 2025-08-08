

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../store/actions/userActions';

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);


  const increaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    copyuser.cart[index] = {
      product,
      quantity: copyuser.cart[index].quantity + 1
    };
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };


  const decreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (copyuser.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        product,
        quantity: copyuser.cart[index].quantity - 1
      };
    } else {
      // Removes 1 element from copyuser.cart at position index
      copyuser.cart.splice(index, 1);
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };




  // INDEX :-
  // Advanced JS functions like map have inuilt feature of providing index
  const cartItems = users.cart.map((c, index) => {
    return (
      <div key={c.product.id}>
      <li
        key={c.product.id}
        className='flex flex-col lg:flex-row items-center gap-5 bg-gray-900 p-4 sm:p-6 rounded-xl w-full lg:w-[80%] mx-auto mb-8 border-l-[5px] border-amber-100'
      >
        <img
          className='w-[180px] h-[200px] lg:w-[220px] lg:h-[240px] object-cover rounded-lg'
          src={c.product.image}
          alt=''
        />
        <div className='flex flex-col gap-2 text-center lg:text-left'>
          <span className='text-xl lg:text-2xl font-semibold'>{c.product.title}</span>
          <span className='mt-10 lg:text-lg font-medium text-xl'>
            Rate: <small className='text-green-500 font-semibold text-2xl'>${c.product.price}</small>
          </span>
          <span className='text-xl lg:text-lg font-medium'>
            Total: <small className='text-green-500 font-semibold text-2xl'>${c.product.price * c.quantity}</small>
          </span>
          <div className='flex justify-center lg:justify-start items-center gap-4 mt-2'>
            <button
              onClick={() => decreaseQuantityHandler(index, c.product)}
              className='text-3xl text-red-500 font-extrabold w-8 h-8'
            >
              -
            </button>
            <span className='text-lg lg:text-xl font-semibold px-3 py-1 bg-gray-800 rounded-lg'>
              {c.quantity}
            </span>
            <button
              onClick={() => increaseQuantityHandler(index, c.product)}
              className='text-3xl text-green-500 font-extrabold w-8 h-8'
            >
              +
            </button>
          </div>
        </div>
      </li>
      <br />
      </div>
    );
  });

  return <ul className='p-4'>{cartItems}</ul>;
};

export default Cart;








