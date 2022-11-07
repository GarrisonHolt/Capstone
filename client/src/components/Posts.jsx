import React from 'react'
import Post from './Post'

const Posts = ({posts}) => {
  return (
    <div className='flex-9'>
      {posts.map((p) => (
         <Post post={p}/>
      ))}
    </div>
  )
}

export default Posts