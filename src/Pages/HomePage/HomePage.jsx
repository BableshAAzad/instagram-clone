import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import HomeRight from '../../Components/HomeRight/HomeRight'
import PostCard from '../../Components/Post/PostCard'

function HomePage() {
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            {[1, 2, 3, 4].map((val) => <StoryCircle key={val} />)}
          </div>
          <div className='space-y-10 w-full mt-10'>
            {[1, 2, 3, 4].map((val) => <PostCard key={val} />)}
          </div>
        </div>
        <div className='w-[27%]'>
          <HomeRight />
        </div>
      </div>
    </div>
  )
}

export default HomePage
