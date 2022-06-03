import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userProfile";
import  addCartReducer  from "./addCart";

const store = configureStore({
    reducer: {
        profile : userReducer,
        product : addCartReducer
    }
})

export default store;