import { createSlice } from "@reduxjs/toolkit";



export const addCartReducer = createSlice({
    name : 'cart',
    initialState : {
        productList: [],
        number: 0
    },
    reducers : {
        addToCart : (state,action,data) => {
            let product = data.payload
            let check = false;      //ยังไม่มีสินค้าในตะกร้า
            // console.log('product',product)
            console.log('length',state.productList.length);
            // product.quantity = 1;

            //กำหนดตัวแปรใหม่มารับค่าหลังจากที่กดเพิ่ม
            let pd1 = {
                id: product.id,
                img: product.img,
                name: product.name,
                normalPrice : product.normalPrice,
                sellPrice : product.sellPrice,
                quantity : 1
            }
            for(let i=0; i< state.productList.length; i++) {
                if (state.productList[i].id == action.payload) {
                    console.log(state.productList[i][0]);
                    check = true;
                    let pd = state.productList[i]
                    pd.quantity += 1
                    state.productList[i] = pd;
                    break;
                }
            }
            if (!check){
                state.productList.push(pd1);
                
            }
            console.log("fist", state.productList[0].quantity);
        }
    }
})

export default addCartReducer.reducer;
export const { addToCart } = addCartReducer.actions;