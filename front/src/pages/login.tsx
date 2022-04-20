import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useNavigate, useParams } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useMutation } from "@apollo/client";
import { AUTH_TOKEN } from "../helper/constants";
import { IError, ILogin } from "../interfaces/ILogin";

const useStyles = makeStyles({
  paperContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "red",
  },
  container: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submitButton: {
    mt: 3,
    mb: 2,
    backgroundColor: "#00d0cf",
  },
});

export const LogIn = () => {
  const { id } = useParams();
  const styles = useStyles();
  console.log(id);
  const navigate = useNavigate();

  const [error, setError] = useState<IError>({
    emailError: false,
    passwordError: false,
  });
  const [info, setInfo] = useState<ILogin>({
    email: "",
    password: "",
  });
  //   const [login] = useMutation(LOGIN);

  const handleSubmit = () => {
    alert(`successfully logged in by: ${info.email}`);
    // login({
    //   variables: {
    //     email: info.email,
    //     password: info.password,
    //   },
    //   onCompleted: ({ login }) => {
    //     window.sessionStorage.setItem(AUTH_TOKEN, login.token);
    //     navigate("/");
    //   },
    // });
  };

  return (
    <Container component="main" maxWidth="xs" className={styles.paperContainer}>
      <CssBaseline />
      <Box className={styles.container}>
        <Avatar sx={{ m: 1, bgcolor: "#00d0cf" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Нэвтрэх
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            error={error.emailError}
            required
            fullWidth
            id="email"
            label="Мэйл"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
          <TextField
            error={error.passwordError}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Нууц үг"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={styles.submitButton}
          >
            Нэвтрэх
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                нууц үгээ мартсан?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Бүртгүүлэх
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
