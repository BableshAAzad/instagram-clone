import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

function CreatePostModal({ onClose, isOpen }) {
    return (
        <div>
            <Modal onClose={onClose} isOpen={true} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <h1>Hello</h1>
                    </ModalBody>
                    {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreatePostModal
