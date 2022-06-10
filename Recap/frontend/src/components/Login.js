import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
 
function Login () {
    const usernameRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();

        const loginObj = {
            username : usernameRef.current.value,
            password : passwordRef.current.value,
        }

        const result = await axios.post('http://localhost:3333/api/user/login', loginObj)
        console.log(result.status);
        if (result.status === 201){
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/dashboard');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Username or Password incorrect',
                showConfirmButton: false,
                timer: 1500
              })
        }
        console.log(loginObj)
    }
    return (
        <>
           <div style={{ marginTop: 50 }}>
            <h3>Register</h3>
            <hr />
            <form action="" style={{display: 'flex', justifyContent: 'center'}}>

                <label htmlFor="">Username : </label>
                <input type="text" ref={usernameRef} required /> 

                <label htmlFor="">Password : </label>
                <input type="text" ref={passwordRef} required /> 

                <button onClick={handleLogin}>Submit</button>
            </form>

        </div>
        </>
    )
}

export default Login;