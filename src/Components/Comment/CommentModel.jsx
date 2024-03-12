import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button } from '@chakra-ui/react'

function CommentModel({ onClose, isOpen }) {
    return (
        <div>
            <Modal onClose={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className='flex flex-col justify-center'>
                            <div className='w-[45%]'>
                                <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2023/11/08/21/11/crab-8375791_640.jpg" alt="ModalImg" />
                            </div>
                            <div className='border w-[55%]'>

                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CommentModel
