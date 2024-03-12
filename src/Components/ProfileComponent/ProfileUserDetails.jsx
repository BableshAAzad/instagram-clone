import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

function ProfileUserDetails() {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg" alt="profilePic" />
                </div>
                <div className='space-y-5'>
                    <div className='flex space-x-10 items-center'>
                        <p>Username</p>
                        <button>Edit Profile</button>
                        <IoSettingsOutline />
                    </div>
                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>posts</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>5</span>
                            <span>follower</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>22</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold'>Full Name</p>
                        <p className='font-thin text-sm'>💪🧠😜 Strong, Smart & Silly</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails
