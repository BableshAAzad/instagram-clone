import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button } from '@chakra-ui/react'
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import CommentCard from './CommentCard';
import "./CommentModel.css"

function CommentModel({ onClose, isOpen, isSaved, isPostLiked, handlePostLike, handleSavePost }) {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered >
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    <ModalCloseButton className='border text-red-600' onClose={onClose} />
                    <ModalBody>
                        <div className='flex h-[70vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2023/11/08/21/11/crab-8375791_640.jpg" alt="ModalImg" />
                            </div>
                            <div className='w-[55%] pl-10 relative'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2024/01/15/04/30/woman-8509281_640.jpg" alt="commentPost" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>UserName</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                {/* <br /> */}
                                <div className='comment'>
                                    {[1, 2, 3, 4, 5].map((val) => {
                                        return <CommentCard key={val} />
                                    })}
                                </div>

                                <div className='absolte bottom-0 w-[100%]'>
                                    <div className='flex justify-between items-center w-full py-1'>
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

                                    <div className='w-full'>
                                        <p>10 Likes</p>
                                        <p className='opacity-50 text-sm'>1 day ago</p>
                                    </div>

                                    <div className='flex w-full items-center border'>
                                        <BsEmojiSmile />
                                        <input type="text" className='commentInputs' placeholder='Add a comment...' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModel
