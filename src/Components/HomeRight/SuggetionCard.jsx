import React from 'react'

function SuggetionCard() {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='h-9 w-9 rounded-full' src="https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_640.jpg" alt="SuggetionImg" />
                <div className='ml-2'>
                    <p className='text-sm font-semibold'>UserName</p>
                    <p className='text-sm font-semibold opacity-70'>Follows You</p>
                </div>
            </div>
            <p className='text-blue-700 text-sm font-semibold'>Follow</p>
        </div>
    )
}

export default SuggetionCard
