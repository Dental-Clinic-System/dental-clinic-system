import React from 'react'
import { Box, Modal, Button } from '@mui/material'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: '10px'
};

const ButtonStyle = {
    margin: '16px'
}

type ModalType = {
    open: boolean;
}

export const ModalBox: React.FC<ModalType> = ({ open, children }) => {
    return (
        <Modal
            open={open}
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}