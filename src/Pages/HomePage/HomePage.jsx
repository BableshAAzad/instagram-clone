import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'

function HomePage() {
  return (
    <div>
      <div>
        <div>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            {[1, 2, 3, 4].map((val) => <StoryCircle key={val} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
