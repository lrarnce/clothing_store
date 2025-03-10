function Signup(){



    return(
        <div className="div">
            <h1>Sign Up</h1>
            <form action="">
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <button className="sign-up-btn" type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup