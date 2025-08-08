

// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { asyncupdateuser } from '../store/actions/userActions';
// import { useNavigate } from 'react-router-dom';

// const ProductTemplate = ({ product }) => {

//   // ADD TO CART FUNCTIONALITY :-
//   const users = useSelector((state) => state.userReducer.users)
//   const dispatch = useDispatch();

//   const AddtoCartHandler = (product) => {
//     // DEEP COPY SHALLOW COPY :-
//     // Here we made the copy of users and cart array inside users
//     // Here first one is shallow copy
//     // And second one is deep copy
//     const copyuser = {...users, cart: [...users.cart]}

//     // So yes, by using .cart you're implicitly saying 
//     // I’m working with a user object that contains a cart array
//     // We are finding the index of the element inside cart array, such that 
//     // its productId = id
//     // findIndex returns -1 if theres no index
//     const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id)

//     // Indexing starts with 0 and -1 means noth
//     // ing, think smart
//     if (x == -1) {
//       copyuser.cart.push({product, quantity: 1})
//     } else {
//       copyuser.cart[x] = {
//         product, 
//         quantity: copyuser.cart[x].quantity + 1
//       }
//     }
//     console.log(copyuser)
//     dispatch(asyncupdateuser(copyuser.id, copyuser))
//   }



//   // RENDERING :-   
//   return (
//     <div key = {product.id} className='w-[30%] border-[2px] border-amber-100 m-3 rounded-lg p-3 h-[75%] overflow-auto scrollbar-hide mb-20 bg-gray-900'>

//       <div className='flex justify-center items-center'>
//         <img className="w-[48vh] h-[35vh] object-cover rounded-lg mb-3" src={product.image} alt="" />
//       </div>

//       <small className='font-semibold text-xl'>{product.title}</small>
//       <br />
//       <small className='text-base'>{product.description.slice(0, 100)}..</small>
//       <div className='p-3 mt-3 flex justify-between items-center'>
//         <p className='text-green-400 font-medium text-lg'>$ {product.price}</p>
//         <button onClick={() => AddtoCartHandler(product)} className='bg-pink-600 text-white py-0.5 px-1.5 rounded font-medium'> Add to Cart </button>
//       </div>

//       <Link className='text-base font-medium text-center block m-auto text-orange-400' to={`/product/${product.id}`}> More Info </Link>
//     </div>
//   )
// }

// export default ProductTemplate








import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateuser } from '../store/actions/userActions';

const ProductTemplate = ({ product }) => {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id === product.id);

    if (x === -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }

    console.log(copyuser);
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  return (
    <div key={product.id} className='mb-10 w-[90%] sm:w-[80%] md:w-[45%] lg:w-[30%] border-[2px] border-amber-100 m-3 rounded-lg p-3 overflow-auto scrollbar-hide bg-gray-900'>

      <div className='flex justify-center items-center'>
        <img className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-3" src={product.image} alt="" />
      </div>

      <small className='font-semibold text-2xl sm:text-lg md:text-xl'>{product.title}</small>
      <br />
      <br />
      <small className='text-xl sm:text-base'>{product.description.slice(0, 100)}...</small>

      <div className='p-3 mt-3 flex justify-between items-center'>
        <p className='text-green-400 font-medium text-2xl sm:text-xl'>$ {product.price}</p>
        <button onClick={() => AddtoCartHandler(product)} className='bg-pink-600 text-white py-1 px-3 text-xl sm:text-base rounded font-medium'>Add to Cart</button>
      </div>

      <Link className='text-sm sm:text-base font-medium text-center block m-auto text-orange-400' to={`/product/${product.id}`}>More Info</Link>
    </div>
  );
};

export default ProductTemplate;








// RESPONSIVE DESIGN :-
// ❌ Before:
// You were doing:
// className="sm:text-xs"
// That means:
// 📱 Mobile (like your phone at 412px): gets nothing
// 🧑‍💻 Tablets/laptops (640px and up): get text-xs


// ✅ After:
// I did:
// className="text-base sm:text-xs"
// That means:
// 📱 Mobile gets text-base ✔️
// 🧑‍💻 Bigger screens switch to text-xs ✔️
// ⚠️ No prefix = Mobile
// sm: = Only tablets & bigger
// That’s why your styles were missing before.










