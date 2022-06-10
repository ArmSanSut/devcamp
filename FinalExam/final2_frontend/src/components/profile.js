import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function ProfileComponent() {
 let navigate = useNavigate();
 const [cart, setCart] = useState([]);
 const [name, setName] = useState(null);
 const onLogout = ()=> {
        localStorage.removeItem('token');
        window.location.href = '/login'
    
 }

 useEffect(() => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);

    const name = decoded.firstname;
    setName(name);

    console.log(name);

 })

 useEffect(() => {
   const token = localStorage.getItem('token');
   if (token) {
     axios
       .get('http://localhost:3000/api/user/mycart', {
         headers: {
           Authorization: `Bearer ${token}`, // JWT in Authorization header
         },
       })
       .then((res) => {
         setCart(res.data);
       })
       .catch((err) => {
         if (err.response.status === 401) {
           // token expired - remove and redirect to login
           localStorage.removeItem('token');
           navigate('/login');
         }
       });
   } else {
     navigate('/login');
   }
 }, []);

 return (
   <>
     <h2>My profile page</h2>
     <h3>My shopping cart items</h3>
     <ul>{cart && cart.map((c, i) => <li key={i}>{c.item}</li>)}</ul>
     <button onClick={onLogout}>LOG OUT</button>
   </>
 );
}

export default ProfileComponent;

