import { Box, Modal, Button } from "@mui/material";

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
      gridTemplateColumns: "auto auto",
      gap: 1,
      width: "100%"
  }
};

type CreateModalType = {
  open: boolean;
  setOpen: Function;
  createFunction?: Function;
  addButtonName: String;
  showButton?: Boolean;
};

export const CreateModal: React.FC<CreateModalType> = (params) => {
  const {
    open,
    setOpen,
    children,
    createFunction = () => {},
    addButtonName,
    showButton = true,
  } = params;
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.container}>
        {children}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {showButton && (
            <Box sx={styles.buttonContainer}>
              <Button onClick={handleClose} variant="outlined" color="error">
                Буцах
              </Button>
              <Button onClick={() => createFunction()} variant="outlined">
                {addButtonName}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
};
