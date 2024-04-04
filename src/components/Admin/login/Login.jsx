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


const Login = ({set}) => {

    const nav = useNavigate()

    useEffect(()=>{
        set(true)
    },[]) 
    const handleLogin = () => {
        nav("/admin")
    }

 
    return (
        <div className='login'>
          <div className='wrapper-container-login'>
          <div className='login-form'>
            <span className='login-logo'><CiUser/></span>
            <div>
                 <span><FaUserAlt/></span>
                <input  type="text" placeholder='User Name'/>
            </div>

            <div>
                <span><FaLock/></span>
                <input  type="password" placeholder='Password'/>
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