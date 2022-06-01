import HomePage from './components/ProductHomePage';
import CreateProduct from './components/CreateProduct';
import './App.css';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
            
            <Route index element={<HomePage />} />        
            {/* <Route path="/view-product" element={<CreateProduct />} /> */}

        </Routes>
    </>
  );
}


export default App;
