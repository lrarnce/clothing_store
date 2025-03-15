import { useState } from "react"
import { signup } from "../services/api"

function Signup(){

    const [formData,setFormData]=useState({
        // first_name:'',
        // last_name:'',
        username:'',
        email:'',
        password:''
    })

    const[message,setMessage]=useState('') 
    const[error,setError]=useState('') 

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
        console.log(name,value)

    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const response = await (signup(formData))
            setFormData({ username: "", email: "", password: "" });
            setError("");
            console.log("success")
        }
        catch(err){
            setError(err.message);
            console.log(err.message)
        }
        
    }



    return(
        <div className="div">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="first_name"  id="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name} required/>
                <input type="text" name="last_name"  id="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} required/> */}
                <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} value={formData.username} required/>
                <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} value={formData.email} required/>
                <input type="password" name="password"  id="password" placeholder="Password" onChange={handleChange} value={formData.password} required/>
                <button className="sign-up-btn" type="submit">Signup</button>
                
                {error&& <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    )
}

export default Signup