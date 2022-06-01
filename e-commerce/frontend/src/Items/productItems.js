import { createSlice } from "@reduxjs/toolkit";


export const productReducer = createSlice({
    name : 'items',
    initialState : {
        productList : [
            {
                key: 1,
                name: 'Lego-Ninja-Go',
                stock: 32,
                category: 'Toys',
                
              },
              {
                key: 2,
                name: 'Lego-Sakura',
                stock: 42,
                category: 'Toys',
                
              },
              {
                key: 3,
                name: 'Lego-Bonzai',
                stock: 32,
                category: 'Toys',    
              },
        ],
        
    },
    reducers : {
        editItems : (state, action) => {
            console.log(state);
            // state.productList[action.payload.index].name = action.payload.name;
            // state.productList[action.payload.index].stock = action.payload.stock;
            // state.productList[action.payload.index].category = action.payload.category;
        },
        createItems : (state, action) => {
            
            state.productList.push(action.payload); 
            console.log('action',action.payload.key);
        }
    }
})

export default productReducer.reducer;
export const { editItems, createItems } = productReducer.actions;