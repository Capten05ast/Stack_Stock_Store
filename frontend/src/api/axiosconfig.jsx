

import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:3000/"
})

export default instance;




// RESTFUL API :-
// An API that can give response to everything wheter its an error or normal data


// REDUX TOOLKIT v/s Context API:-
// > Remember Frontend ke liye company alag banda rakhti hai and jisko Redux toolkit
//   ata hai use ke liye alag for statemanagement
// > One category of data (e.g., just Cart or just User)? → Context API is enough.
// > Multiple categories (Cart + Product + User + Admin)? → Redux Toolkit organizes 
//   them in one central store, avoiding prop drilling and provider hell within 
//   multiple context files for each category of data (cart, user, product, admin) 



