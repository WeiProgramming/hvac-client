import React from 'react'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {MdClose} from 'react-icons/md';

import './info.scss';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Info = ({ isOpen, handleClose }) => {
    const handleModalClose = () => {
        handleClose();
    }
    return (
        <div className="info-modal">
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="info form pop up"
                aria-describedby="info form pop up is used for clients to enter their contact nformation"
            >
                <Box sx={style}>
                    <div className="info-modal__header">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <div className="info-modal__close" onClick={() => handleModalClose()}>
                            <MdClose></MdClose>
                        </div>
                        
                    </div>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Info;