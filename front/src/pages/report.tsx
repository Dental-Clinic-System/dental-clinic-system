import React from "react";
import { Container, useTheme, makeStyles, Button } from "@material-ui/core";
import { Box, Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(5),
  },
}));

const CustomButton = ({
  value,
  onClick,
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

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" width="100%" textAlign="center">
        Тайлан гаргах
      </Typography>
      <Box className={styles.root}>
        <CustomButton value="Орлогийн тайлан" onClick={() => {}} />
        <CustomButton value="НЭМГ-ийн тайлан" onClick={() => {}} />
      </Box>
    </Container>
  );
};
