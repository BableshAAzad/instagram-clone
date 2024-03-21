import {
    Button, Modal, ModalBody, ModalCloseButton, ModalContent,
    ModalFooter, ModalHeader, ModalOverlay
} from '@chakra-ui/react';
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa';
import "./CreatePostModal.css"

function CreatePostModal({ onClose, isOpen }) {
    let [isDragOver, setIsDragOver] = useState(false);
    let [file, setFile] = useState(null);
    let [caption, setCaption] = useState("")
    let handleDrop = (event) => {
        event.preventDefault()
        let droppedFile = event.dataTransfer.file[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            setFile(droppedFile)
        }
    }
    let handleDragOver = (event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
        setIsDragOver(true)
    }
    let handleDragLeave = () => {
        setIsDragOver(false)
    }
    let handleOnChange = (e) => {
        let file = e.target.files[0]
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file)
        } else {
            setFile(null)
            alert("Please select an image or video")
        }
    }
    let handleCaptionChange = ({ target: { value } }) => {
        setCaption(value)
    }
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    {/* <ModalCloseButton className='border text-red-600' onClose={onClose} /> */}
                    <div className='flex justify-between py-1 px-10 items-center'>
                        <p>Create New Post</p>
                        <Button variant={"ghost"} size="sm" colorScheme={'blue'}>Share</Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div className='h-[70vh] justify-between pb-5 flex'>
                            <div className='w-[50%]'>
                                {!file && <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}
                                    className='drag-drop h-full' >
                                    <div className=''>
                                        <FaPhotoVideo className='text-3xl' />
                                        <p>Drage photos or videos here</p>
                                    </div>
                                    <label htmlFor="file-upload" className='custom-file-upload'>Select From Computer</label>
                                    <input type="file" id='file-upload' accept='image/*, video/*' onChange={handleOnChange} />
                                </div>}
                                {file && <img className='max-h-full' src={URL.createObjectURL(file)} alt="uploadedFile" />}
                            </div>
                            <div className='w-[1px] border h-full'>

                            </div>
                            <div className='w-[50%]'>
                                <div className='flex items-center px-2'>
                                    <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2024/03/05/19/26/duck-8615153_640.jpg" alt="birdPic" />
                                    <p className='font-semibold ml-4'>UserName</p>
                                </div>
                                <div className='px-2'>
                                    <textarea className='captionInput' name="caption" id=""
                                        cols="" rows="8" placeholder="Write a caption" onChange={handleCaptionChange}></textarea>
                                </div>
                                <div className='flex justify-between px-2'>
                                    <GrEmoji />
                                    <p className='opacity-60'>{caption.length}/2200</p>
                                </div>
                                <hr />
                                <div className='p-2 flex justify-between items-center'>
                                    <input type="text" placeholder='Location' name='location' className='locationInput' />
                                    <GoLocation />
                                </div>
                                <hr />
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModal
