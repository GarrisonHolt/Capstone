import React, { useContext, useEffect, useRef, useState} from 'react'
import NavBar from '../../components/NavBar'
import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag, Tooltip } from 'antd';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Context } from '../../context/Context';
import {Upload} from "upload-js"
import { Link } from 'react-router-dom';




const upload = Upload({ apiKey: "free"})

const Create = () => {
    const [tags, setTags] = useState(['']);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState('')

    const [progress, setProgress] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [error, setError] = useState(null);


    if(fileUrl !== null) return fileUrl;
    if (error !== null) return error.message;
    if (progress !== null) return <>File uploading... {progress}%</>; 
    
    
    const onFileSelected = async (e) => {
      const [file] = e.target.files;
      const {fileUrl} = await upload.uploadFile(
        file,
        {
          onBegin: ({cancel}) => console.log("File upload started"),
          onProgress: ({progress}) => console.log(`File uploading... ${progress}%`),
        }
        );
      setPhoto(fileUrl)
      console.log(`File uploaded! ${fileUrl}`)
      console.log(`Photo URL is ${photo}`)}

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        title,
        content,
        photo,
        tags,
      }
      try {
        const res = await axios.post("/posts", newPost)
        window.location.replace("/")
      } catch (error) {
        
      }
    }

  return (
    <div>
        <NavBar />

        <div className='pt-[50px]'>
            <form onSubmit={handleSubmit}>
                <div className='ml-[350px] flex align-center'>
                    <input type="text" 
                    placeholder='Title of Post' 
                    autoFocus={true} 
                    className='w-[90%] border-[1px] border-gray-800 rounded-md'
                    onChange={e => setTitle(e.target.value)}/>

                    <input type="file"
                        onChange={onFileSelected}
                        className=' ml-[5%] flex w-full text-sm text-slate-600
                        file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-gray-200 file:text-gray-700
                        hover:file:bg-gray-700 hover:file:text-white'
                     />
                </div>

                <div>
                    <textarea type="text" onChange={e => setContent (e.target.value)} placeholder="Enter your text here" cols="50" rows="10" 
                    className='mt-[60px] ml-[350px] w-[50%] h-[500px] column-[50] row-[10] flex-wrap border-[1px] border-gray-600'/>

                </div>
                
                      <button type='submit' 
                      className='ml-[60%] mt-[2%] py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>
                        Post Article
                        </button>
          
            </form>
          </div>
        </div>
  )
}

export default Create