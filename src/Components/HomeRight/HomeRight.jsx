import React from 'react'
import SuggetionCard from './SuggetionCard'

function HomeRight() {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_640.jpg" alt="UsersOnlinePic" />
            </div>
            <div className='ml-3'>
              <p>FullName</p>
              <p className='opacity-70 '>UserName</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold'>Switch</p>
          </div>
        </div>
        <div className='space-y-5 mt-7'>
          {[1, 2, 3, 4, 5, 6].map((val) => <SuggetionCard key={val} />)}
        </div>
      </div>
    </div>
  )
}

export default HomeRight
