import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import Home from '../home/Home'
import Register from '../register/Register'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post("/auth/login", {
        username, password
      });
      console.log(username)
      console.log((await res).status)
      window.location.replace("/")
       
    } catch (error) {
      alert("Wrong Credentials")
    }
  }
  return (
    <div className='m-auto mt-[10%] w-[500px] h-[300px] border-[1px] border-gray-600 rounded-sm'>
        <div className="text-center">
            <span className='text-[30px] font-bold'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Username' 
                required 
                className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'
                onChange={e => setUsername(e.target.value)}/>
                <br />
               
                <input type="password" 
                placeholder='Password' 
                required 
                className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'
                onChange={e => setPassword(e.target.value)}/>
                <br />
                  <button type='submit' className='mt-7 py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Login</button>
            </form>
            <Link to={"/register"}>
              <p>Create an account</p>
            </Link>
        </div>
    </div>
  )
}

export default Login