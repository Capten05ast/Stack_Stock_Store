

// ACTIONS :-
// Actions will call the API for modification of data, which is 
// Async process
import { ToastContainer } from "react-toastify"
import { toast } from "react-toastify"
import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice"
import { removeuser } from "../reducers/userSlice"


export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        console.log(error);
        toast.error("Error Occurred!");
    }
}




export const asyncloginuser = (user) => async (dispatch, getState) => {
    try {
        // const res = await axios.get(
        //     `/users?email=${user.email}&password=${user.password}`
        // )
        // console.log(res.data[0])


        // actually we are getting the data in res.data
        // so we can either write :-
        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log("This is Login Data : ",data);


        if (data.length === 0) {
          toast.error("Invalid email or password!");
          return; // stop further execution
        }


        localStorage.setItem("user", JSON.stringify(data[0]));
        // This will help to change the navbar once the user logs in
        dispatch(asynccurrentuser());
        toast.success("User Logged in Successfully!")

    } catch (error) {
        toast.error("Login Failed!")
        console.log(error);
    }
}


export const asynclogoutuser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeuser());
        console.log("User logged out");
        toast.success("User Logged Out");
    } catch (error) {
        console.log(error);
    }
}


// ASYNC CURRENT USER :-
// We are using it so that when we are refreshing the page 
// THe data shouldnt vanish, so it can be called from loacal storage
// and be stored in store (state -> userreducer -> users)
export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));

        // Storing the user object in user of store
        if(user) dispatch(loaduser(user))
        else console.log("User not logged in!");
    } catch (error) {
        console.log(error);
    }
}


export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/" + id, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asynccurrentuser());
    } catch (error) {
        console.log(error);
    }
}


export const asyncdeleteuser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/users/" + id)
        dispatch(asynclogoutuser());
        toast.success("User Deleted");
    } catch (error) {
        console.log(error);
    }
}


// LOADUSER :-
// > It updates the Redux store with the current users data
// > dispatch(loaduser(user)) will set  ->  state.user.currentUser = user
// > Without loaduser(user)?
//   Your Redux state would be empty on refresh.
//   Even if localStorage has the user, your components 
//   (using useSelector) won't know about it.


// PARAMETER = ACTION.PATLOAD :-
// Whatever you pass inside dispatch(loaduser(...)) becomes the 
// action.payload for that action.


// REDUX STATE REFRESHES :-
// Redux state resets when you refresh the page, because Redux lives in memory (RAM), not in permanent storage.
// So, if you want the user to stay logged in after refresh:
// Save the user in localStorage when they log in.
// On app reload, read that localStorage and dispatch loaduser() to restore the user data in Redux.