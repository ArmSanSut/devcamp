import { createSlice } from "@reduxjs/toolkit";


export const userReducer = createSlice({
    name : 'user',
    initialState : {
        firstname : 'Stephen',
        lastname : 'Strange',
        age : 45
    },
    reducers : {
        changeName : (state, firstname) => {
            state.firstname = firstname.payload;
        },
        changeLastname : (state, lastname) => {
            state.lastname = lastname.payload;
        },
        changeAge : (state, age) => {
            state.age = age.payload;
        }
        
    }
})

export default userReducer.reducer;
export const { changeName, changeLastname } = userReducer.actions;