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
import { useNavigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useLazyQuery, useQuery } from "@apollo/client";
import { IError, ILogin } from "../interfaces/ILogin";
import { GET_CLINIC_BY_TITLE, LOGIN } from "../graphql";
import { useAuth } from "../providers/AuthProvider";
import { Loading } from "../components";

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
  const clinic_name = window.location.hostname.split(".")[0] || "";

  const { data, loading } = useQuery(GET_CLINIC_BY_TITLE, {
    variables: { clinic_name: clinic_name },
  });
  const { getClinicByClinicName } = data || {};

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
  // const { signin } = useAuth();

  const handleSubmit = async () => {
    console.log({
      clinicId: getClinicByClinicName._id,
      email: info.email,
      password: info.password,
    });
    const { data, error: loginError } = await login({
      variables: {
        clinicId:
          info.email !== "superadmin@gmail.com"
            ? getClinicByClinicName._id
            : "999fca30c1cf951c042bd5ec",
        email: info.email,
        password: info.password,
      },
    });

    if (!loginError) {
      const { loginStaff } = data || {};
      const { clinicId, username, clinic } = loginStaff || {};

      console.log(clinic);

      if (!loginStaff) alert("user not found");
      else {
        window.sessionStorage.setItem("clinicId", clinicId);
        window.sessionStorage.setItem("username", username);
        window.sessionStorage.setItem("clinicTitle", clinic?.title);

        alert(`successfully logged in by: ${info.email}`);
        navigate("/");
      }
    }
  };

  if (loading)
    return (
      <Container
        component="main"
        maxWidth="xs"
        className={styles.paperContainer}
      >
        <CssBaseline />
        <Box className={styles.container}>
          <Loading />
        </Box>
      </Container>
    );

  return (
    <Container component="main" maxWidth="xs" className={styles.paperContainer}>
      <CssBaseline />
      <Box className={styles.container}>
        <Avatar sx={{ m: 1, bgcolor: "#00d0cf" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {getClinicByClinicName
            ? `${getClinicByClinicName.title} -т Нэвтрэх`
            : "Бүртгэлтэй эмнэлэг олдсонгүй!!!"}
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
                нууц үгээ мартсан?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Бүртгүүлэх
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            username: teststaff1@gmail.com <br /> password: 12345678
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
