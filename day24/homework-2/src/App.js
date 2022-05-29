import Login from './components/login';
import Warehouse from './components/warehouse';
import Dashboard from './components/dashboard';
import Stock from './components/stock';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        
          <Route index element={<Login />} />        
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="*" element={<NoMatch />} />
       
      </Routes>
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
