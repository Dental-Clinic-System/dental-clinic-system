import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

interface AuthContextType {
    username?: string;
    email?: string;
    loading: boolean;
    error?: any;
    login: (email: string, password: string) => void;
    signUp: (email: string, password: string) => void;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
)

export const AuthProvider: FC = ({ children }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingInitial, setLoadingInitial] = useState(false);

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (error) setError(null);
    }, [location.pathname])

    const login = (email: string, password: string) => {
        setLoading(true)

        // TODO: Login code

        setLoading(false)

        navigate('/')
    }

    const signUp = (email: string, password: string) => {
        setLoading(true)

        // TODO: SignUp code

        setLoading(false)

        navigate('/')
    }

    const signOut = () => {
        setLoading(true)

        // TODO: SignOut code

        setLoading(false)

        setUsername('')
        setEmail('')

        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{username, email, error, loading, login, signUp, signOut}}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}