//import "../css/loginform.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Login()
{
        const [email,setEmail]=useState("");
        const [password,setPass]=useState("");
        const navigate = useNavigate()
        const handleLogin = async(event)=>
        {
            event.preventDefault();
            const req= await axios.post("http://localhost:3001/login",
                {
                    email:email,
                    password:password
                });

            const message = req.data.message
            const islogin = req.data.isLogin
            if (islogin) {
             console.log(islogin,message)
                alert(message)
                navigate('/about')
            }
            else {
                console.log(islogin,message)
                alert(message)
                navigate('/signup')
            }

        }


    return(
        <div>
            <div class="login-edit">
                <h1>Login Page</h1>
                <form onSubmit={handleLogin}>
                <input type="email"id="email"placeholder="Email id" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <input type="password" id="password" placeholder="Password"  value={password} onChange={e=>setPass(e.target.value)}  />
                <br />
                <button type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login