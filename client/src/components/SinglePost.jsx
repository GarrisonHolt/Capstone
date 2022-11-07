import React, {useEffect, useState} from 'react'
import {BiEdit, BiTrash} from 'react-icons/bi'
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
    <div className='flex-9'>
        <div>
            <img src={post.photo}
            alt=""
            className='w-[50%] h-[50%] flex justify-center ml-[25%]'/>
        </div>
        <h1 className='text-[30px] m-auto ml[350px]'>
            {post.title}
            <div className='float-right flex text-16px m-auto cursor-pointer'>
                <BiEdit className='text-[20px]'/>
                <BiTrash className='text-[20px]'/>
            </div>
        </h1>
        <div className='flex mb-[20px]'>
            <span className='pl-1 pr-1'>{post.username}</span>-<span className='pl-1'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div>
            <p className='text-gray-600 text-[18px] leading-[28px] first-letter:ml-20 first-letter:text-[30px] first-letter:font-bold'>
                {post.content}
            </p>
        </div>

    </div>
  )
}

export default SinglePost