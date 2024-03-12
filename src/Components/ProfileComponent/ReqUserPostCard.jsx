import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css"

function ReqUserPostCard() {
    return (
        <div className='p-2'>
            <div className='post w-60 h-60'>
                <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2023/10/26/13/19/coffee-8342636_640.jpg" alt="cophyPic" />
                <div className='overlay'>
                    <div className='overlay-text flex justify-between'>
                        <div>
                            <AiFillHeart /> <span>12</span>
                        </div>
                        <div>
                            <FaComment /> <span>4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostCard
