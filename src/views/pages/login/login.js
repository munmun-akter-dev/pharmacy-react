import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import { Config } from "../../../model/config";
import { Cookie } from '../../../model/Cookie';
import './login.css'



const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    let data={
      email: username,
      password: password     
    }
   
    let token=Cookie.get("token");

    fetch(`${Config.baseUrlCI}/login`, {
      method: 'POST',        
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      },
      body: new URLSearchParams(data).toString()
    })
      .then(response => response.json())
      .then(data => {
        
        console.log(data)
        //window.location="/home"
        Cookie.set("token",data.token);

        navigate("/dashboard");
      
      })
      .catch(error => console.error(error));   

  }

    return (
       <div className="container">
       <form onSubmit={handleSubmit}>
            <div>
              Username<br/>
              <input type="text"  onChange={e=>setUsername(e.target.value)} />
            </div>
            <div>
              Password<br/>
              <input type="password"  onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>              
              <input type="submit" name="Login" />
            </div>

       </form>      
       
       </div>
    );
};
  
  export default Login;
