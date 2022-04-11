import { Box, Modal, Button } from '@mui/material'
import { useMutation } from '@apollo/client';
import { DELETE_PATIENT } from '../../graphql';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
};

type DeletePatientModalType = {
    open: boolean;
    setOpen: Function;
    deletingUser: Array<String>;
}

export const DeletePatientModal: React.FC<DeletePatientModalType> = ({ open, setOpen, deletingUser }) => {
    const handleClose = () => setOpen(false);
    const [deletePatient] = useMutation(DELETE_PATIENT)

    const clear = () => {
        setOpen(false)
    }

    const DeletePatients = () => {
        let variables = {
            id: deletingUser[0]
        }

        deletePatient({ variables: variables })
        clear()
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <Button variant='outlined' onClick={handleClose} size='small'>Үгүй</Button>
                    <Button 
                        variant='outlined'
                        color='error' 
                        onClick={() => DeletePatients()}
                        size='small'
                    >Өвчтөн хасахдаа итгэлтэй байна уу?</Button>
                </Box>
            </Box>

        </Modal>
    );
}
