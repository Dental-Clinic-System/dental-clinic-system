import { Box, Modal, SxProps, Theme } from '@mui/material';

type CreateModalType = {
    open: boolean;
    setOpen: Function;
    sx?: SxProps<Theme>;
}

const style = {
    zIndex: 1,
    background: 'white',
    p: 4,
    borderRadius: 1
};

export const DefaultModal: React.FC<CreateModalType> = (params) => {
    const { open, setOpen, sx = [], children } = params;
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box sx={[style, ...(Array.isArray(sx) ? sx : [sx]),]}>
                {children}
            </Box>

        </Modal>
    );
}