import { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Register() {
    const nameRef = useRef('');
    const usernameRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = async (e) =>{
        e.preventDefault();

        const registerObj = {
            name : nameRef.current.value,
            username : usernameRef.current.value,
            password : passwordRef.current.value,
            confirmPassword : confirmPasswordRef.current.value
        }

        console.log(registerObj)

        await axios.post('http://localhost:3333/api/user/register', registerObj)
        .then (result => {
            if (result.status === 201){
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/login')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
        console.log(result);
    }
    return (
        <div style={{ marginTop: 50 }}>
            <h3>Register</h3>
            <hr />
            <form action="" style={{padding : 15}}>
                <label htmlFor="">Name :</label>
                <input type="text" ref={nameRef} required /> <br/>

                <label htmlFor="">Username : :</label>
                <input type="text" ref={usernameRef} required /> <br/>

                <label htmlFor="">Password :</label>
                <input type="text" ref={passwordRef} required /> <br/>

                <label htmlFor="">Confirm Password :</label>
                <input type="text" ref={confirmPasswordRef} required /> <br/>

                <button onClick={handleRegister}>Submit</button>
            </form>

        </div>
    )
}
export default Register;