import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import SinglePost from './SinglePost'

const Post = () => {
  return (
   <div className='border-solid border-[1px] border-gray-600 rounded-md ml-[20%] mr-[20%] cursor-pointer mb-4'>
    
    <div>
        <img src="" alt="" className='w-[40px] h-[40px] rounded object-cover ml'/>
        <span className='pl-1 pr-1'>Gholt29</span>-<span className='pl-1'>November 3, 2022</span>
    </div>
    <div>
        <span className='text-[20px] font-bold flex pl-[5%]'>My Trip to Paris</span>
    </div>
    <div className='m-2'>
        <p>kdajfdsljfldsjlkfjlsa</p>
    </div>

   </div>
  )
}

export default Post