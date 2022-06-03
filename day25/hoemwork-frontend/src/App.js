import './App.css';
import HomePage from './HomePage';
import ProfileUser from './ProfilePage';
import ProductList from './ProductListPage';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
            
            <Route index element={<HomePage />} />        
            <Route path="/profile" element={<ProfileUser />} />
            <Route path="/product" element={<ProductList />} />
        </Routes>
    </>
  );
}

export default App;
