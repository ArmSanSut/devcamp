import HomePage from './components/ProductHomePage';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import ViewProduct from './components/viewProduct';
import './App.css';

import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
        <Routes>
            
            <Route index element={<HomePage />} />        
            <Route path="/view-product" element={<CreateProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/display/:id" element={<ViewProduct />} />

        </Routes>
    </>
  );
}


export default App;
