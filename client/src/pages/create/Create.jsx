import React, { useEffect, useRef, useState} from 'react'
import NavBar from '../../components/NavBar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag, Tooltip } from 'antd';



const Create = () => {
    const [text, setText] = useState('');
    const [tags, setTags] = useState(['']);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        if (inputVisible) {
          inputRef.current?.focus();
        }
      }, [inputVisible]);
      useEffect(() => {
        editInputRef.current?.focus();
      }, [inputValue]);
      const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
      };
      const showInput = () => {
        setInputVisible(true);
      };
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
      const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
          setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
      };
      const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
      };
      const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
      };

  return (
    <div>
        <NavBar />

        <div className='pt-[50px]'>
            <form >
                <div className='ml-[350px] flex align-center'>
                    <input type="text" placeholder='Title of Post' autoFocus={true} className='w-[50%] border-[1px] border-gray-800 rounded-md'/>
                    <input type="file" id='fileInput' className='display-hidden ml-[20%]' />
                </div>

                <div>
                    <ReactQuill theme="snow" value={text} onChange={setText} className='mt-[60px] mr-[350px] ml-[350px] h-[500px]'/>;
                </div>
                <div className='mt-[30px] ml-[50%]'>
                    {tags.map((tag, index) => {
                        if (editInputIndex === index) {
                            return(
                                <Input 
                                ref={editInputRef}
                                key={tag}
                                size='small'
                                className='bg-[#fff] border-dashed border-black border-[1px] mr-[550%] mt-5'
                                value={editInputValue}
                                onChange={handleEditInputChange}
                                onBlur={handleEditInputConfirm}
                                onPressEnter={handleEditInputConfirm}
                                />
                            );
                            }
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag
                              className="select-none"
                              key={tag}
                              closable={index !== 0}
                              onClose={() => handleClose(tag)}
                            >
                             <span
                                onDoubleClick={(e) => {
                                    if (index !== 0) {
                                    setEditInputIndex(index);
                                    setEditInputValue(tag);
                                    e.preventDefault();
                                    }
                                }}
                                 >
                                 {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                             </span>
                             </Tag>
                        );
                        return isLongTag ? (
                            <Tooltip title={tag} key={tag}>
                              {tagElem}
                            </Tooltip>
                          ) : (
                            tagElem
                          );
                    })}
                    {inputVisible && (
                        <Input
                        ref={inputRef}
                        type="text"
                        size="small"
                        className="w-[80px]"
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                        />
                    )}
                    {!inputVisible && (
                    <Tag className="bg-[#fff] border-dashed border-black border-[1px] mr-[50%] p-2" onClick={showInput}>
                    <PlusOutlined className='pr-3 mb-[1px]'/> New Tag
                    </Tag>
                )}
                    <button className='ml-[35%] py-2.5 px-5 mb-2 text-sm font-medium border-gray-600 border-[1px] rounded-md hover:bg-gray-600 hover:text-white'>Post Article</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create