import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as Yup from 'yup';

import {
    Link,
    Stack,
    Checkbox,
    TextField,
    FormControlLabel,
    Button
} from '@mui/material';

function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [remember, setRemember] = useState(true)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPass, setErrorPass] = useState('')

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const login = async () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (pass && email && email.match(validRegex)) {
            navigate('/')
        } else {
            if (!email.match(validRegex)) {
                setErrorEmail('Email is invalid')
            }
            if (!email) {
                setErrorEmail('Email is required')
            }
            if (!pass) {
                setErrorPass('Password is required')
            }
        }
    }

    useEffect(() => {
        if (email) {
            setErrorEmail('')
        }
        if (pass) {
            setErrorPass('')
        }
    }, [email, pass])

    return (
        <>
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="Email address"
                    error={Boolean(errorEmail)}
                    helperText={errorEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    error={Boolean(errorPass)}
                    helperText={errorPass}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <FormControlLabel
                    control={<Checkbox onChange={() => setRemember(!remember)} checked={remember} />}
                    label="Remember me"
                />

                <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
                    Forgot password?
                </Link>
            </Stack>

            <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={() => login()}
            >
                Login
            </Button>
        </>
    );
}

export default LoginForm;