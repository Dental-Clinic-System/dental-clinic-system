import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IError, ILogin } from '../interfaces/ILogin';
import { LOGIN } from '../graphql';
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from "../helper/constants";

const theme = createTheme();

const styles = {
    paperContainer: {
        backgroundImage: `url(${'https://dribbble.com/shots/6518945-Dental-Software-Solution/attachments/6518945-Dental-Software-Solution?mode=media'})`,
        display: 'flex',
        justifyContent: 'center',
    }
}

const SignIn = () => {
    const navigate = useNavigate();
    const [error, setError] = React.useState<IError>({
        emailError: false,
        passwordError: false,
    });
    const [info, setInfo] = React.useState<ILogin>({
        email: '',
        password: '',
    })
    const [login] = useMutation(LOGIN);
    const handleSubmit = () => {
        alert(`successfully logged in by: ${info.email}`);
        login( {
            variables: {
                email: info.email,
                password: info.password
            },
            onCompleted: ({ login }) => {
                localStorage.setItem(AUTH_TOKEN, login.token);
                navigate('/');
            }
        })
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs' style={styles.paperContainer}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#00d0cf' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Нэвтрэх
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {
                            error.emailError == true ?
                                <TextField
                                    margin='normal'
                                    error
                                    fullWidth
                                    id="emailError"
                                    label="Error"
                                    defaultValue="Hello World"
                                    helperText="Incorrect entry."
                                    name='email'
                                    autoComplete='email'
                                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                                />
                                :
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    id='email'
                                    label='Мэйл'
                                    name='email'
                                    autoComplete='email'
                                    autoFocus
                                    onChange={(e) => setInfo({ ...info, email: e.target.value })}
                                />
                        }
                        {
                            error.passwordError == true ?
                                <TextField
                                    margin='normal'
                                    error
                                    fullWidth
                                    id="passwordError"
                                    label="Error"
                                    defaultValue="Hello World"
                                    helperText="Incorrect entry."
                                    type='password'
                                    name='password'
                                    autoComplete='current-password'
                                    onChange={(e) => setInfo({ ...info, password: e.target.value })}
                                />
                                :
                                <TextField
                                    margin='normal'
                                    required
                                    fullWidth
                                    name='password'
                                    label='Нууц үг'
                                    type='password'
                                    id='password'
                                    autoComplete='current-password'
                                    onChange={(e) => setInfo({ ...info, password: e.target.value })}
                                />
                        }
                        <Button
                            type='submit'
                            fullWidth={true}
                            variant='contained'
                            sx={{ mt: 3, mb: 2, backgroundColor: '#00d0cf' }}
                        >
                            Нэвтрэх
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    нууц үгээ мартсан?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href='#' variant='body2'>
                                    Бүртгүүлэх
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn;