import HomePage from './components/ProductHomePage';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import ViewProduct from './components/viewProduct';
import Register from './components/register';
import Login from './components/login';
import './App.css';

import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
        <Routes>
            
            <Route index element={<Login />} />        
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view-product" element={<CreateProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/display/:id" element={<ViewProduct />} />

        </Routes>
    </>
  );
}


export default App;
