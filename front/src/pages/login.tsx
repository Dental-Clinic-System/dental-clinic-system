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
import { useLazyQuery } from "@apollo/client";
import { IError, ILogin } from "../interfaces/ILogin";
import { LOGIN } from "../graphql";
import { useAuth } from "../providers/AuthProvider";
import { LegendToggleTwoTone } from "@mui/icons-material";

const useStyles = makeStyles({
  paperContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
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
  let { id } = useParams();
  if (!id) id = window.location.pathname.substring(1);
  const styles = useStyles();
  const navigate = useNavigate();

  const [error, setError] = useState<IError>({
    emailError: false,
    passwordError: false,
  });
  const [info, setInfo] = useState<ILogin>({
    email: "test@gmail.com",
    password: "123456",
  });

  const [login] = useLazyQuery(LOGIN);

  const handleSubmit = async () => {
    const { data, error: loginError } = await login({
      variables: {
        clinicId: (info.email !== 'superadmin@gmail.com') ? id : "999fca30c1cf951c042bd5ec",
        email: info.email,
        password: info.password,
      },
    });

    if (!loginError) {
      const { loginStaff } = data || {};
      const { clinicId, username, clinic } = loginStaff || {};

      if (!loginStaff) alert("user not found");
      else {
        window.sessionStorage.setItem("clinicId", clinicId);
        window.sessionStorage.setItem("username", username);
        window.sessionStorage.setItem("clinicTitle", clinic?.title);
        navigate("/625fca30c1cf951c042bd5ec");
      }
    }
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

        <Box sx={{ mt: 1 }}>
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
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            className={styles.submitButton}
          >
            Нэвтрэх
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Нууц үгээ мартсан?
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
