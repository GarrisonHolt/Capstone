import React, {useEffect, useState} from 'react'
import {BiEdit, BiTrash} from 'react-icons/bi'
import axios from "axios"

const SinglePost = () => {
  return (
    <div className='flex-9'>
        <div>
            <img src="" 
            alt=""
            className='w-[50%] h-[50%] flex justify-center ml-[25%]'/>
        </div>
        <h1 className='text-[30px] m-auto ml[350px]'>
            My Trip to Paris
            <div className='float-right flex text-16px m-auto cursor-pointer'>
                <BiEdit className='text-[20px]'/>
                <BiTrash className='text-[20px]'/>
            </div>
        </h1>
        <div className='flex mb-[20px]'>
            <span className='pl-1 pr-1'>Gholt29</span>-<span className='pl-1'>Date</span>
        </div>
        <div>
            <p className='text-gray-600 text-[18px] leading-[28px] first-letter:ml-20 first-letter:text-[30px] first-letter:font-bold'>
                djfkasjkjfkljdsklfjla
            </p>
        </div>

    </div>
  )
}

export default SinglePost