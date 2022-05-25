import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import Register from './components/register';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <Routes>
       <Route path="/" element={<Profile />}></Route>
       <Route path="/login" element={<Login />}></Route>
       <Route path="/profile" element={<Profile />}></Route>
       <Route path='/register' element={<Register />}></Route>
     </Routes>
   </div>

  );
}

export default App;
