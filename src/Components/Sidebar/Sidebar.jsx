import React, { useState } from 'react'
import "./Sidebar.css"
import { IoReorderThreeOutline } from "react-icons/io5";
import { mainu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  let [activeTab, setActiveTab] = useState("");
  let navigate = useNavigate();
  let handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile")
      navigate("/username")
    else if (title === "Home")
      navigate('/')

  }
  return (
    <div className='sticky top-0 h-[100vh] '>
      <div className='flex flex-col justify-between h-full px-10'>
        <div>
          <div className='pt-10'>
            <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt="logo" />
          </div>
          <div className='mt-10'>
            {mainu.map((item) => {
              return <div key={item.title} onClick={() => handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p className={`${activeTab === item.title ? 'font-bold' : 'font-semibold'}`}>{item.title}</p>
              </div>
            })}
          </div>
        </div>
        <div className='flex items-center cursor-pointer pb-10'>
          <IoReorderThreeOutline className='text-2xl' />
          <p className='ml-5'>More</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
