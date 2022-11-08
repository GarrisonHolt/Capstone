import React, {useState} from 'react'
import Login from '../login/Login'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Upload} from "upload-js"


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[profilePicture, setProfilePicture] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError();
      const res = await axios.post("/auth/register", {
        username, 
        password,
        profilePicture, 
      });
      res.data && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }
  } 

  return (
    <div className='m-auto mt-[10%] w-[500px] h-[350px] border-[1px] border-gray-600 rounded-sm'>
        <div className="text-center">
            <span className='text-[30px] font-bold'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Create Username' 
                required 
                className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'
                onChange={e => setUsername(e.target.value)}/>
                <br />

                <input type="password" 
                placeholder='Create Password' 
                required 
                className='w-[300px] mt-5 border-[1px] border-gray-600 rounded-md'
                onChange={e => setPassword(e.target.value)}/>
                <br />
                <div className='mt-5'>
                  
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload Profile Pic</label>
                    <input type="file"
                    className="block w-[50%] ml-[25%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                    id="file_input"
                   />

                </div>
                <button formAction='submit' className='mt-7 py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Register</button>
            </form>
            <Link to={"/login"}>
              <p>Already have an account</p>
            </Link>
        </div>
    </div>
  )
}

export default Register