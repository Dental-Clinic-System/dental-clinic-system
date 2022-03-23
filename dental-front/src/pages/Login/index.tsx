import { Link as RouterLink } from 'react-router-dom';

import Logo from 'src/components/LogoSign';

import { styled } from '@mui/material/styles';
import {
    Card,
    Container,
    Typography,
    Box,
    Link,
    Stack,
} from '@mui/material';
import { LoginForm } from './LoginForm';

const RootStyle = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

const Login = () => {
    return (
        <RootStyle>
            <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Logo />
                <Typography variant="h2" sx={{ px: 5, mt: 10, mb: 5 }}>
                    Welcome to Dental Clinic System
                </Typography>
                <img src="/static/images/illustrations/illustration_login.png" alt="login" />
            </SectionStyle>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Sign in
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
                    </Stack>

                    <LoginForm />

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            mt: 3,
                            display: { sm: 'none' }
                        }}

                    >
                        Don’t have an account?&nbsp;
                        <Link variant="subtitle2" component={RouterLink} to="register" underline="hover">
                            Get started
                        </Link>
                    </Typography>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}

export default Login;
