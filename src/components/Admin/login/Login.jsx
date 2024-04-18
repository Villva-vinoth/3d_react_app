import React, { useEffect, useRef, useState } from 'react'
import "./login.css"
import Logo from "../../Assets/home/552a38989f2e80bd92ac5934449d1d7e 2.png"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

import { FaEye, FaEyeSlash } from "react-icons/fa"
import { CiUser } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { LOGIN_ADMIN } from '../../../apiServices'


const Login = ({set}) => {

    const [loginData,setLoginData]=useState({
        email:"",
        password:"",
    })

    const nav = useNavigate()

    useEffect(()=>{
        set(true)
    },[]) 

    const handleValidation = () =>{
        const {email, password} =loginData;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/

        if(email =="")
        {
            toast.error(" Please enter a valid email address")
            return false;
        }
    
        if ((emailRegex.test(email)) == false) {
            toast.error("Invalid email Format")
            return false;

        }


        if(password =="")
        {
            toast.error(" Please enter a password ")
            return false;
        }
       return true;
    }
    const handleLogin = async() => {

        if(handleValidation())
        {
            await axios.post(LOGIN_ADMIN,loginData).then((response) => {
                if(response.data.success)
                {
                    console.log(response.data)
                    localStorage.setItem('Token',response.data.token);
                    nav("/admin")
                }
            }).catch((error) => {
                if (error.code === "ERR_NETWORK")
                {
                    toast.error("Please connected to Internet")
                }
                if(error.response.data.message)
                {
                    console.log(error)
                toast.error(error.response.data.message)
                }
            });
        }
       
       
    }

 
    return (
        <div className='login'>
            <ToastContainer/>
          <div className='wrapper-container-login'>
          <div className='login-form'>
            <span className='login-logo'><CiUser/></span>
            <div>
                 <span><FaUserAlt/></span>
                <input  type="email" 
                placeholder='Email' 
                name='email'
                onChange={(e)=>{setLoginData({...loginData,[e.target.name]:e.target.value})}}/>
            </div>

            <div>
                <span><FaLock/></span>
                <input  type="password" placeholder='Password'
                name='password'
                onChange={(e)=>{setLoginData({...loginData,[e.target.name]:e.target.value})}}
                />
            </div>
            <div>
                <input type='submit' value="Login" onClick={handleLogin}/>
            </div>
          </div>
          </div>
         
        </div>
    )
}

export default Login