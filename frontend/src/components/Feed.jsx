import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

const Feed = () => {
  return (
    <div className=' h-full w-[50%]'>
      <CreatePost/>
      <Tweet/>
      
     
    </div>
  )
}

export default Feed