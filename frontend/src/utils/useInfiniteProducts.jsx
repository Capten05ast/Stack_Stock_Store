

// CUSTOM HOOK 


import React from 'react'
import axios from '../api/axiosconfig'
import { loadlazyproduct } from '../store/reducers/productSlice'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'


// CUSTOM HOOKS :-
// This useInfiniteProducts is a custom hook
// Custom hook always start with use




const useInfiniteProducts = () => {

    const products = useSelector((state) => state.productReducer.products)
    const [hasMore, sethasMore] = useState(true)
    const dispatch = useDispatch();


    // CALLING LIMITED PRODUCTS (LIMIT):-
    // AS we have 20 products in backend, But at a time we just need 6 products
    // In apps like myntra and flipkart you cant show all the products from database at the same time
    // From npm json server docs we are going to use limit syntax to limit the products fetched
    // Only 6 products will be fetched 
    // To see the working of start and limit, go to network section in inspect

    const fetchproducts = async () => {
        try {
            const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`)
            if (data.length == 0) {
                sethasMore(false);
                // This will trigger to print endmessage
            } 
            else {
                sethasMore(true)
                dispatch(loadlazyproduct(data))
                // Storing the data in redux store
            }
        } 
        
        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchproducts();
    }, [])

    
    return { products, hasMore, fetchproducts }
}

export default useInfiniteProducts