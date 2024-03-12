import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import "./PostCard.css"
import CommentModel from '../Comment/CommentModel';

function PostCard() {
    let [showDropDown, setShowDropDown] = useState(false);
    let [isPostLiked, setIsPostLiked] = useState(false);
    let [isSaved, setIsSaved] = useState(false)
    let handleClick = () => {
        setShowDropDown(!showDropDown)
    }
    let handlePostLike = () => {
        setIsPostLiked(!isPostLiked)
    }
    let handleSavePost = () => {
        setIsSaved(!isSaved)
    }
    return (
        <div >
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex text-center'>
                        <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2019/12/16/10/49/building-4699096_640.jpg" alt="PostProfile" />
                        <div className='pl-2'>
                            <p className='font-semibold text-sm'>UserName</p>
                            <p className='font-thin text-sm'>Location</p>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img className='w-full' src="https://cdn.pixabay.com/photo/2023/03/06/16/17/narcissus-7833840_1280.jpg" alt="PostPic" />
                </div>
                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {isPostLiked ? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-600' onClick={handlePostLike} /> :
                            <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike} />}
                        <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>
                    <div>
                        {isSaved ? <BsBookmarkFill onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer' /> :
                            <BsBookmark onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer' />}
                    </div>
                </div>
                <div className='w-full py-2 px-5'>
                    <p>10 Likes</p>
                    <p className='opacity-50 py-2 cursor-pointer'>View all 20 comments</p>
                </div>
                <div className='border border-t w-full'>
                    <div className='flex w-full items-center px-5'>
                        <BsEmojiSmile/>
                        <input type="text" className='commentInput' placeholder='Add a comment...' />
                    </div>
                </div>
            </div>
            <CommentModel/>
        </div>
    )
}

export default PostCard
