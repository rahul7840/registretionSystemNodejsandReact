import React, {useState} from 'react'
import './registretion.css' 
import axios from 'axios'
import { useHistory} from "react-router-dom"
 const Registerpage = () =>{
    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email:"",
        password: "",
        date:""
        // reEnterPassword:""
        })

        const hendleChange= e =>{
            const {name, value }= e.target
            setUser({
                ...user,
                [name]:value
            })   
        }
        const register = () => {
            const {name, email, password } = user
            if(name && email && password){
              axios.post("http://localhost:9000/register", user)  
              .then(res => {
                alert(res.data.message) 
                history.push("/login")
            })
            }else{
                alert("error")
            }          
            }
    return(
        <div className="register">
        <h1 className='rrr'>Registeretion</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={hendleChange}></input>
        <input type="email" name="email" value={user.email} placeholder="Enter your Email" onChange={hendleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={hendleChange} ></input>
        <input type="date" name="date" value={user.date}  onChange={hendleChange} ></input>
        {/* <input type="password" name=" reEnterPassword" value={user.reEnterPassword} placeholder="re-Enter your Password" onChange={hendleChange} ></input> */}
        <div className="button" onClick={()=>history.push("/login")}>Login</div>
        <div className='rrr'>or</div>
        <div className="button" onClick={register}>Register</div>
        </div>
    )
 }
 export default Registerpage