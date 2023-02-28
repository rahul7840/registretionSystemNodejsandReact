
import React, {useState} from 'react'
import './login.css' 
import axios from 'axios'
import { useHistory} from "react-router-dom"
 const Loginpage = ({ setLoginUser }) =>{

    const history = useHistory()

    const [user, setUser] = useState({

        email:"",
        password: "",
   
        })

        const hendleChange= e =>{
            const {name, value }= e.target
            setUser({
                ...user,
                [name]:value
            })
           
        }
       
    const login = () => { 
        axios.post("http://localhost:9000/login", user)  
            // .then(res => alert(res.data.message))
            .then(res => {
                console.log(res)
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })
    }
    return(
     
        <div className="login">
        <h1 className='rrr'>Login</h1>
        {console.log(user)}
        <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={hendleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter your Password"  onChange={hendleChange}></input>
        <div className="button" onClick={login}>Login</div>
        <div className='rrr'>or</div>
        <div className="button" onClick={()=>history.push("/register")}>Register</div>
        </div>
   
    )
 }
 export default Loginpage