//import "../css/loginform.css"

function Login()
{
    return(

        <div>
            <div class="login-edit">
                <h1>Login Page</h1>
                <form action="Login">
                <input type="email" placeholder="Email id" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <button type="submit">Login</button>
                </form>
                
            </div>

        </div>
    )
}

export default Login