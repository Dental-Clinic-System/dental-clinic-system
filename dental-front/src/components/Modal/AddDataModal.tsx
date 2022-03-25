import { Box, Button, Modal, Typography, TextField } from '@mui/material';
import { ADDCLINIC } from 'src/hooks/mutations';
import { useMutation } from "@apollo/client";
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
};

export const AddDataModal = ({ openAdd }) => {

    const [AddClinic] = useMutation(ADDCLINIC);

    const [open, setOpen] = useState(openAdd);
    const [clinicData, setClinicData] = useState<any>({});

    const handleClose = () => setOpen(false);

    const addData = async () => {
        try {
            await AddClinic({ variables: clinicData });
        } catch (error) {
            console.log(error);
        }
    }

    const addButton = () => {
        setOpen(true);
    }

    const addChangeData = (key: string, data: string) => {
        setClinicData({
            ...clinicData,
            [key]: data,
        });
    };

    return (
        <>
            <Button variant='contained' onClick={addButton}>Эмнэлэг нэмэх</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Эмнэлэг нэмэх
                    </Typography>
                    <TextField id="outlined-basic" label="Эмнэлгийн нэр" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('clinicName', e.target.value)} />
                    <TextField id="outlined-basic" label="Холбоо барих дугаар" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('phone', e.target.value)} />
                    <TextField id="outlined-basic" label="Имэйл хаяг" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('email', e.target.value)} />
                    <Button variant='contained' sx={{ mt: 2 }} onClick={addData}>Хадгалах</Button>
                </Box>
            </Modal>
        </>
    )
}