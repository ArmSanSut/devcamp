import { Routes, Route, Outlet, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import HomePage from "./components/HomePage";
import CountryDetails from "./components/CountryDetails";

function App() {
  
  return (
   <Routes>
     <Route index element={<HomePage />} />
     <Route path="/:name" element={<CountryDetails />} />


   </Routes> 
  )
}

export default App;
