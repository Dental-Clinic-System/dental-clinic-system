import { Box, Modal, Button } from '@mui/material'

const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 450,
      bgcolor: "white",
      boxShadow: 24,
      p: 4,
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainer: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: 1,
        width: "100%"
    }
  };

type DeleteModalType = {
    open: boolean;
    setOpen: Function;
    deleteFunction: Function;
    fixFunction?: Function;
    deleteButtonName: String;
    fixButtonName?: String;
}

export const DeleteModal: React.FC<DeleteModalType> = (params) => {
    const { open, setOpen, deleteFunction, deleteButtonName, fixButtonName, fixFunction, children } = params;
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={styles.container}>
                {children}
                <Box sx={styles.buttonContainer}>
                    <Button variant='outlined' onClick={handleClose} size='small'>Буцах</Button>
                    <Button 
                        variant='outlined'
                        color='success' 
                        onClick={fixFunction ? () => fixFunction() : () => console.log('failed')}
                        size='small'
                    >
                        {fixButtonName}
                    </Button>
                    <Button 
                        variant='outlined'
                        color='error' 
                        onClick={() => deleteFunction()}
                        size='small'
                    >
                        {deleteButtonName}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}