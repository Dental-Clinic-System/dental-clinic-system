import React from 'react';
import { Snackbar as MuiSnackBar, Button, Alert } from '@mui/material';

export type SnackBatTypeParam = {
  open: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
};

type snackBarType = {
  open: boolean;
  handleClose: () => void;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
};

export const SnackBar = ({ open, handleClose, message, severity }: snackBarType) => {
  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        Understood
      </Button>
    </React.Fragment>
  );
  return (
    <MuiSnackBar open={open} autoHideDuration={6000} onClose={handleClose} action={action}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackBar>
  );
};
