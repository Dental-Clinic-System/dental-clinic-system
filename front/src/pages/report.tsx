import { useState } from 'react';
import { Container, useTheme, makeStyles, Button } from '@material-ui/core';
import { Box, Theme, Typography } from '@mui/material';
import { FinanceReport, HealthDepartReport } from '../components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    // height: '80vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    marginTop: theme.spacing(5),
    width: theme.spacing(50),
    height: theme.spacing(50),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(5)
  },
  secondaryButton: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(5),
    borderRadius: theme.spacing(5),
    border: '1px solid black'
  },
  center: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));

const CustomButton = ({
  value,
  onClick
}: {
  value: string;
  onClick: () => void;
}) => {
  const styles = useStyles();
  const { palette } = useTheme();

  return (
    <Button className={styles.button} onClick={onClick}>
      <Typography variant="h5" color={palette.common.white}>
        {value}
      </Typography>
    </Button>
  );
};

export const Report = () => {
  const styles = useStyles();

  const [type, setType] = useState<'finance' | 'NEMG' | null>(null);

  const download = () => {
    const file = document.querySelector(
      type === 'finance' ? '#finance' : '#healthDepart'
    );

    const iframe: Window = window.frames[0];

    iframe.document.write(file?.innerHTML || '');
    iframe.focus();
    iframe.print();

    iframe.document.close();
  };

  const navigateBack = () => setType(null);

  if (type === null)
    return (
      <Container maxWidth="lg">
        <Typography variant="h2" width="100%" textAlign="center">
          Тайлан гаргах
        </Typography>
        <Box className={styles.root}>
          <CustomButton
            value="Орлогийн тайлан"
            onClick={() => setType('finance')}
          />
          <CustomButton
            value="НЭМГ-ийн тайлан"
            onClick={() => setType('NEMG')}
          />
        </Box>
      </Container>
    );

  return (
    <Container maxWidth="lg">
      <iframe title="finance" style={{ display: 'none' }} />

      <Box className={styles.root} pt={5}>
        <Box>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Button className={styles.secondaryButton} onClick={navigateBack}>
              back
            </Button>
            <Button className={styles.secondaryButton} onClick={download}>
              Download
            </Button>
          </Box>

          {type === 'NEMG' ? <HealthDepartReport /> : <FinanceReport />}
        </Box>
      </Box>
    </Container>
  );
};
