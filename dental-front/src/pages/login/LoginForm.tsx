import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';

import {
    Link,
    Stack,
    Checkbox,
    TextField,
    FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [remember, setRemember] = useState(true)
    const [error, setError] = useState({email: '', pass: ''})

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true
        },
        validationSchema: LoginSchema,
        onSubmit: () => {
            navigate('/dashboard', { replace: true });
        }
    });

    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    const handleShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const login = () => {
        if (!email) {
            alert('fuckass')
            setError({email: 'Email is required', pass: error.pass})
            setEmail('')
        }
        if (!pass) {
            setError({pass: 'Password is required', email: error.email})
            setPass('')
        }
        console.log(error);
    }

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Email address"
                        error={Boolean(email && error.email)}
                        helperText={error.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    

                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        {...getFieldProps('password')}
                        error={Boolean(pass && error.pass)}
                        helperText={error.pass}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <FormControlLabel
                        control={<Checkbox onChange={() => setRemember(!remember)} checked={remember}  />}
                        label="Remember me"
                    />

                    <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
                        Forgot password?
                    </Link>
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    onClick={() => login()}
                >
                    Login
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
}

export default LoginForm;