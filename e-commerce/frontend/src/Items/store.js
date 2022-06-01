import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./productItems";


const store = configureStore({
    reducer : {
        product : productReducer
    }
})

export default store;