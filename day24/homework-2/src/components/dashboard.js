import { Outlet, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function Dashboard() {
    const onLogin = ()=> {
        console.log('login clicked')
    }
    return (
      <div>
        <nav >
          <ul style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <li style={{margin: 20}}><Link to="/dashboard">Dashboard</Link></li>
            <li style={{margin: 20}}><Link to="/stock">Stock Management</Link></li>
            <li style={{margin: 20}}><Link to="/warehouse">warehouse Management</Link></li>
            <Button 
                type="primary" 
                onClick={onLogin}
                style = {{margin: 20}}
            >
               Login
            </Button>
          </ul>         
        </nav>
        <hr />
 
        <h1> Dashboard Information</h1>
      </div>
    );
  }
  
  
  

export default Dashboard;