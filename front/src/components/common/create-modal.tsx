import { Box, Modal, Button } from '@mui/material';

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
    alignItems: "center"
};

type CreateModalType = {
    open: boolean;
    setOpen: Function;
    createFunction: Function;
    addButtonName: String;
}

export const CreateModal: React.FC<CreateModalType> = (params) => {
    const { open, setOpen, children, createFunction, addButtonName } = params;
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                {children}
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Button onClick={handleClose} variant='outlined' color='error'>Буцах</Button>
                    <Button onClick={() => createFunction()} variant='outlined'>{addButtonName}</Button>
                </Box>
            </Box>

        </Modal>
    );
}