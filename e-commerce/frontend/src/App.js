import HomePage from './components/ProductHomePage';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import './App.css';

import { Route, Routes } from "react-router-dom";
// import  {useDispatch} from  'react-redux'; 
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { initData } from './Items/productItems';

function App() {

//   const display = useSelector(state => state.product);
//   const dispatch = useDispatch();

//   useEffect(async () => {
//     const fetchData = async () => {
//         const result = await axios.get('http://localhost:3000/users');
//         console.log(result.data);
//         const product = result.data;
//         // setData(product);
//         dispatch(initData(product))
//         // setData(display.productList)
//         // console.log(data);
//     }
//     await fetchData();
// }, []);

  return (
    <>
        <Routes>
            
            <Route index element={<HomePage />} />        
            <Route path="/view-product" element={<CreateProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />

        </Routes>
    </>
  );
}


export default App;
