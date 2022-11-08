import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router'
import axios from "axios"

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path]);
    

  return (
    <div className='flex-9 mt-5'>
        <div>
        
                <img src={post.photo}
                alt=""
                className='w-[1000px] h-[600px] flex justify-center ml-[30%]'/>
              
        <div className='text-center mt-3'>
            <h1 className='text-[30px] m-auto ml[350px]'>
                {post.title} </h1>           
        </div>
        <div className='flex mb-[20px] ml-[20%]'>
            <span className='pl-1 pr-1'>{post.username}</span>-<span className='pl-1'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div>
            <p className='text-gray-800 ml-[10%] text-[18px] leading-[28px] first-letter:ml-20 first-letter:text-[30px] first-letter:font-bold'>
                {post.content}
            </p>
        </div>
        <div className='flex justify-center pt-5'>
        <button className='py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Like Post</button>
            <button className=' ml-[0.5%] py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Comment</button>
        </div>
        <div className='text-center'>
            <span>Post has 5 Likes</span>
        </div>
        <br />
        <div className='text-center text-[30px] font-bold'>
            <h1>Comments</h1>
        </div>
        <div className='border-solid border-[1px] border-gray-600 rounded-md ml-[20%] mr-[20%] cursor-pointer mb-4'>
    
            <div>
                <span className='pl-1 pr-1'>{post.username}</span>-<span className='pl-1'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <div className='m-2'>
                <p>{post.content}</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default SinglePost