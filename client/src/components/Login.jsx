import React, {useRef} from 'react'
import {Navigate} from "react-router-dom"
import axios from "axios"

const Login = () => {
const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      
      if(res.status(200)) {
        console.log('Login Successful')
      } else {
        console.log('Unable to log in')
      }
    } catch (error) {
      return
    }
  }
  return (
    <div className='m-auto mt-[10%] w-[500px] h-[300px] border-[1px] border-gray-600 rounded-sm'>
        <div className="text-center">
            <span className='text-[30px] font-bold'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={userRef} placeholder='Username' required className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'/>
                <br />
                <input type="password" ref={passwordRef} placeholder='Password' required className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'/>
                <br />
                <button type='submit' className='mt-7 py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Login</button>
            </form>
            <a href="./Register.jsx">Create an account</a>
        </div>
    </div>
  )
}

export default Login