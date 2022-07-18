import React, { useState } from 'react'
import style from './style.module.css'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

function Home() {

  const [email , setEmail] = useState("");
  const [pass , setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response)=>{
      response.data.forEach((user) => {
        if(user.email === email && user.password === pass){
          navigate("/success");
        }
      });

    }).catch((err) => {
      console.log(err);
    })
  }

  const handleUsername = (event) => {
    setEmail(event.target.value);
  }
  const handlePass = (event) =>{
    setPass(event.target.value);
  }
  return (
    <>
        <form className={style.container}>
        <span>
            <i class="fa-solid fa-user"></i>
        </span>
        <label>Email</label>
        <input type="text" name='email' onChange={handleUsername} />
        <label>Password</label>
        <input type="text" name='password' onChange={handlePass}/>

        <Link className={style.login} to="/">
            <button type='submit' className={style.loginText} onClick={handleLogin}>Log in</button>
        </Link>
        </form>

        <Link className={style.create} to="/signup">Create an account</Link>
    </>
  )
}

export default Home