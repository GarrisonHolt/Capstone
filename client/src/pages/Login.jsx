import React from 'react'
import axios from "axios"

const Login = () => {
  return (
    <div className='m-auto mt-[10%] w-[500px] h-[300px] border-[1px] border-gray-600 rounded-sm'>
        <div className="text-center">
            <span className='text-[30px] font-bold'>Login</span>
            <form>
                <input type="text" placeholder='Username' required className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'/>
                <br />
                <input type="password" placeholder='Password' required className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'/>
                <br />
                <button className='mt-7 py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Login</button>
            </form>
            <a href="">Create an account</a>
        </div>
    </div>
  )
}

export default Login