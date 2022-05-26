import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


export default function Profile() {
 let navigate = useNavigate();
 const [cart, setCart] = useState([]);
 const [name, setName] = useState(null);

 useEffect(() => {
   const token = localStorage.getItem('token');
   
   if (token) {
     axios
       .get('/api/profile', {
         headers: {
           Authorization: `Bearer ${token}`, // JWT in Authorization header
         },
       })
       .then((res) => {
         setCart(res.data);
         console.log('res data',res);
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

 useEffect(() => {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);

    const name = decoded.first_name;
    setName(name);

    console.log(name);

 })

 return (
   <>
     <h2 style={{display: 'flex', justifyContent: 'flex-end'}}>Hello, Mr.{name}</h2>
     <h1>My profile page</h1>
     <h3>My shopping cart items</h3>
     {console.log(typeof cart)}
     <ul>{cart && cart.map((c) => <li>{c.item}</li>)}</ul>
   </>
 );
}


