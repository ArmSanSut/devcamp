import React from 'react'
// import 'antd/dist/antd.css'
import './App.css';
// import { Layout, Menu} from 'antd';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Employee,EmployeeDetail } from './Employee';
import { Department, DepartmentDetail } from './Department';
import Home from './Home';

// const { Header, Content, Footer } = Layout;


function App(){

  return (
    <>
      <h1>DEVCAMP Company</h1>
      <Routes>
      <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="employee" element={<Employee />} />
            <Route path="employee/detail" element={<EmployeeDetail />} />
            <Route path="department" element={<Department />} />
            <Route path="employee/:department" element={<Employee />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
      </Routes>
      
      
  
    </>
    
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul  style={{display: "flex", justifyContent:'center', alignItems:'center' }}>
          <li style={{listStyleType: 'none', marginLeft: '2rem'}}><Link to="/">Home</Link></li>
          <li style={{listStyleType: 'none', marginLeft: '2rem'}}><Link to="/employee">Employee List</Link></li>
          <li style={{listStyleType: 'none', marginLeft: '2rem'}}><Link to="/department">Department List</Link></li>
          {/* <li><Link to="/nothing-here">Wrong Process</Link></li> */}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <p><Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}

export default App;
