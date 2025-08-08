
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loaduser: (state, action) => {
            console.log(action)
            state.users = action.payload;
        },
        removeuser: (state, action) => {
            state.users = null
        }
    }
})

export const { loaduser, removeuser } = userSlice.actions
export default userSlice.reducer;


// USERSLICE :-
// UserSlice provides two things :
// 1. reducers
// 2. actions


// STATE AND ACTION :-
// state = intial state
// action = data recieved from api
//          whatever comes in action is passed to state
//          when load user is called then this will take place


// FUNCTIONS v/s ACTIONS :-
// > Functions are called and actions are dispatched
// > Therefore asyncgetuser and loaduser is an action that why extracting loadUser from userSlice.action


// USER REMOVER :-
// state.users = null just clears the user data from Redux store.
// It’s usually called during logout or when you want to reset the user state.


// EXAMPLE USER REMOVER :-
// When a user logs in:
// dispatch(loaduser({ name: "Aditya", isAdmin: true }));
// Now, state.users = { name: "Aditya", isAdmin: true }.

// When a user logs out:
// dispatch(removeuser());
// Now, state.users = null (it’s empty, meaning no one is logged in).

