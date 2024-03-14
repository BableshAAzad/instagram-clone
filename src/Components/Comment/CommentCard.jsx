import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function CommentCard() {
    let [isCommentLike, setIsCommentLike] = useState(false);
    let handleCommentLike = () => {
        setIsCommentLike(!isCommentLike);
    }
    return (
        <div>
            <div className='flex items-center justify-between py-3'>
                <div className='flex items-center'>
                    <div>
                        <img className='h-9 w-9 rounded-full' src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" alt="commentCard" />
                    </div>
                    <div className='ml-3'>
                        <p>
                            <span className='font-semibold'>UserName</span>
                            <span className='ml-2'>Nice Post</span>
                        </p>
                        <div className='flex items-center space-x-3 text-xs opacity-70 pt-1'>
                            <span>1 min ago</span>
                            <span>23 Likes</span>
                        </div>
                    </div>
                </div>
                {isCommentLike ? <AiFillHeart className='text-xs hover:opacity-50 cursor-pointer text-red-600' onClick={handleCommentLike} /> :
                    <AiOutlineHeart className='text-xs hover:opacity-50 cursor-pointer' onClick={handleCommentLike} />}
            </div>
        </div>
    )
}

export default CommentCard
