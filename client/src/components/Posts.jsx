import React, {useState} from 'react'
import Post from './Post'

const Posts = ({posts}) => {

  const [search, setSearch] = useState("");
  return (
    <div>
      <div className='mt-5 pb-5'>
        <input placeholder='Enter title of post' className='border-[1px] border-gray-800 w-[300px] ml-[65%] rounded-md' onChange={e => setSearch(e.target.value)}/>
      </div>
      {
        posts.filter(post => {
          if (search === '') {
            return post;
          } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
            return post
          }
        }).map((post, index) =>(
        <div key={index}>
          <Post post={post}/>
        </div>
      ))}     
      </div>

  )
}

export default Posts