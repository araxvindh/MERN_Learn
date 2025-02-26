//import "../css/formstyle.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const navigate =useNavigate();
function Sign() {
        const [firstName,setFName]=useState("");
        const [lastName,setLName]=useState("");
        const [email,setEmail]=useState("");
        const [password,setPass]=useState("");
        const [phoneNumber,setPhoneno]=useState(0);
        const handleSignUp =async(event)=>
        {
                event.preventDefault();
                const req = await axios.post("http://localhost:3001/signup",{

                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:password,
                    phoneNumber:phoneNumber
                });
          
                const message = req.data.message;
                const isSignup =req.data.isSignUp;
                if(isSignup)
                {
                    alert(message);
                    navigate("./");
                }
                else
                {
                    alert(message);
                }

        };
    return (
        <div>
            <div>
                <h1>Sign In</h1>
                <form onSubmit={handleSignUp}>
                    <input type="text" id="firstName"placeholder="First Name" value={firstName} onChange={e=>setFName(e.target.value)}  />
                    <br />
                    <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={e=>setLName(e.target.value)} />
                    <br />
                    <input type="email" id="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                    <br />
                    <input type="password" id="password" placeholder="Password" value={password} onChange={e=>setPass(e.target.value)} />
                    <br />
                    <input type="text" id="phoneNumber"placeholder="Mobile Number" value={phoneNumber} onChange={e=>setPhoneno(e.target.value)}/>
                    <br />
                    <button type="submit">Sign In</button>
                    <br />
                    <div>
                    <h3>Already have an account?<Link to='/signup/login'>Login</Link> </h3>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Sign;
