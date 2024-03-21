import React from 'react'
import { useNavigate } from 'react-router-dom'

function StoryCircle() {
  let navigate = useNavigate();
  let handleNavigate = () => {
    navigate("/story")
  }
  return (
    <div onClick={handleNavigate} className='cursor-pointer flex flex-col items-center'>
      <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/08/08/26/tit-8620213_640.jpg" alt="storyPic" />
      <p>UserName</p>
    </div>
  )
}

export default StoryCircle
