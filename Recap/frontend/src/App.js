import React from 'react';
import { AuthContextComponent } from './AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <>
      <Router>
        <AuthContextComponent>
            <Routes>
              <Route index element = {<Login />}/>
              <Route path='/register' element = {<Register />}/>
            </Routes>
        </AuthContextComponent>
      </Router>

    </>
  )
}

export default App;
