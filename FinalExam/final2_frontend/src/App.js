import 'antd/dist/antd.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import ProfileComponent from './components/profile';

function App() {

  
  return (
    <>
      <Routes>
       <Route path="/" element={<RegisterForm />}></Route>
       <Route path="/login" element={<LoginForm />}></Route>
       <Route path="/profile" element={<ProfileComponent />}></Route>
       
     </Routes>
    </>
  );
}

export default App;
