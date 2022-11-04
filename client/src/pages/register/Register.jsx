import React from 'react'
import Login from '../login/Login'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='m-auto mt-[10%] w-[500px] h-[350px] border-[1px] border-gray-600 rounded-sm'>
        <div className="text-center">
            <span className='text-[30px] font-bold'>Register</span>
            <form>
                <input type="text" placeholder='Create Username' required className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'/>
                <br />
                <input type="password" placeholder='Create Password' required className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'/>
                <br />
                <div className='mt-5'>
                    
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload Profile Pic</label>
                    <input className="block w-[50%] ml-[25%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                </div>
                <button className='mt-7 py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Register</button>
            </form>
            <Link to={"/login"}>
              <a href="">Already have an account</a>
            </Link>
        </div>
    </div>
  )
}

export default Register