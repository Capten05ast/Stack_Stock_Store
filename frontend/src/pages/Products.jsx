

// Major topic covered :-
// 1. Pagination and infinite scroll
// 2. Add to cart functionality
// 3. Rendering of products
// 4. useState revision
// 5. suspense
// 6. loadlazy product
// 7. Search feature with event handling


import axios from "../api/axiosconfig"
import InfiniteScroll from 'react-infinite-scroll-component';
import { lazy, Suspense } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadlazyproduct } from '../store/reducers/productSlice';
import useInfiniteProducts from "../utils/useInfiniteProducts";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"))


const Products = () => {
  const {products, hasMore, fetchproducts} = useInfiniteProducts();


  // SEARCH FEATURE :-
  const [searchTerm, setsearchTerm] = useState(``)
  // Filter products based on search term
  const filterProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))




  // INFINITE SCROLL :-
  // Now to load more than 6 products while scrolling down we will use 
  // npm infinite scroll component in below code. 
  // For syntax of infinite scroll and props inside it, plz refer the website 
  // npm infinte scroll components.
  return (
  <div className='scrollbar-hide'>


    {/* Brand Heading */}
    <div className='p-6 text-center mb-[-1px]'>
      <h1 className='text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-lg tracking-wide'>
        Stack_Stock
      </h1>
      <p className='mt-2 text-gray-300 text-lg italic'>
        Your one-stop shop for premium picks
      </p>
    </div>
    

    <div className='p-4 flex justify-center items-center flex-col'>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="border sm:p-2 p-1 sm:w-[50%] w-[95%] mb-4 rounded bg-gray-800 outline-0 text-white text-xl "
        onChange={(e) => setsearchTerm(e.target.value)}
      />

      {/* Render Products */}
    </div>




    <InfiniteScroll
      className='scrollbar-hide mb-10' 
      dataLength = {products.length} 
      next = {fetchproducts}
      loader = {<h4> Loading... </h4>}
      hasMore = {hasMore}
      endMessage = {
        <p style={{textAlign:'center'}}>
          <b>Yay! you have seen it all</b>
        </p>
      }
    > 
      <div className='w-full h-screen flex flex-wrap justify-center scrollbar-hide'>
          {filterProducts.map((product) => {
            return (
              <Suspense key={product.id} fallback = { <h1 className='text-center text-3xl text-yellow-500 scrollbar-hide'> LOADING... </h1> } >
                <ProductTemplate key={product.id} product={product}/>
              </Suspense>
            )
        })}
      </div> 
    </InfiniteScroll>

    <br />

  </div>)
}
export default Products




// ADD TO CART AND RENDERING :-
// We shifted Add to card functionality and rendering to ProductTemplate.jsx


// LAZY LOADING AND PAGINATION :-
// > Install npm infinite scroll component from its website
// > All installation instructions are given 
// > get the api for products from free api and put 20 products in backend
// > Open npm json-server also


// LAZY LOADING :-
// It avoids loading of the pages which are not in use, for example if you
// are on home page then only home page shall load, but in background other
// pages should not run, this is possible by Lazy loading


// SUSPENSE :-
// Prerequisites :
// To use suspense you must use lazy loading while importing respective components
// like here we are using suspense for produtTemplate.jsx, then productTemplate.jsx must
// be lazy loaded in products.jsx
// Working :
// When Product page loads at all the products before that LOADING... LOADING... LOADING... appears 