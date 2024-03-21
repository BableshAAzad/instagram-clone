import React from 'react'

function SearchUserCard() {
    return (
        <div className='py-2 cursor-pointer'>
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2024/02/16/19/22/green-parrot-8578205_640.jpg" alt="contactImg" />
                <div className='ml-2'>
                    <p>Full Name</p>
                    <p className='opacity-70'>UserName</p>
                </div>
            </div>
        </div>
    )
}

export default SearchUserCard
