import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

const Home = () => {
  return (
    <div className=' flex justify-between w-10/12 m-auto'>
        <LeftSidebar/>
        <Feed/>
        <RightSidebar/>
    </div>
  )
}

export default Home