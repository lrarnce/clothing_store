import { useNavigate } from "react-router-dom"

function Login(){

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/signup')
    }


    return(
        <div className="div">
            <h1>Login</h1>
            <form action="">
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <p>Forgot Password?</p>
                <button className="login-btn" type="submit">Login</button>
            </form>
            <button className="sign-up-btn" type="submit" onClick={handleClick}>Sign Up</button>
        </div>
    )
}

export default Login