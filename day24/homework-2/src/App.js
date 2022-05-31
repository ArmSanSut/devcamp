import Warehouse from './components/warehouse';
import Dashboard from './components/dashboard';
import Stock from './components/stock';
import HomeComp from './components/homeComp';
import AuthContext from './components/authContext';
import NotAllow from './components/stock-2';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

const token = localStorage.getItem('token') || null

function App() {
  return (
    <div>
      <AuthContext.Provider value = {token} >
        <Routes>
            
            <Route index element={<HomeComp />} />        
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock-notallow" element={<NotAllow />} />
            <Route path="/warehouse" element={<Warehouse />} />
        
        </Routes>
      </AuthContext.Provider>

      <hr />
    </div>
  );
}

function NoMatch() {
  return (
    <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}



export default App;
