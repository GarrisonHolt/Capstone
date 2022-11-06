import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/home/Home'
import Create from '../pages/create/Create'
import Login from '../pages/login/Login'



const NavBar = () => {
  return (
    <div className='w-100 h-[60px] bg-gray-800 sticky top-0 flex items-center font-serif'>
      <div className='flex-[3] flex items-center justify-center cursor-pointer text-white'>
        OneLife Travel
      </div>
      <div className='flex-[5]'>
        <ul className='flex justify-center m-0 p-0 list-none'>
          <Link to={"/"}>
            <li className='mr-[20px] text-[18px] font-[300px] text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md cursor-pointer'>HOME</li>
          </Link>
          <Link to={"/create"}>
            <li className='mr-[20px] text-[18px] font-[300px] text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md cursor-pointer'>CREATE</li>
          </Link>
          <Link to={"/login"}>
            <li className='mr-[20px] text-[18px] font-[300px] text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md cursor-pointer'>LOGOUT</li>
          </Link>
        </ul>
      </div>
      {/* <div className='pt-2 relative ml-5 text-gray-800'>
        <input className='border-2 border-gray-300 bg-white h-10 w-20px px-5 rounded-lg text-sm focus:outline-none' type="search" name="search" placeholder="search" />
      </div> */}
      <div className='flex ml-[5%] mr-[18%] items-center justify-center'>
        <img src="" alt="" className='w-[40px] h-[40px] rounded-full object-cover cursor-pointer'/>
      </div>  
    </div>
  )
}

export default NavBar