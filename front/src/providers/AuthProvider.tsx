import { createContext, useState, useContext, FC, useEffect } from "react";
import { LogIn } from "../pages";
// import { auth } from '../firebase';
// import type { User } from "firebase/auth";
// import { Loader } from '../components';
// import { useAlert } from './AlertProvider';

interface AuthContextInterface {
  user?: any;
  signin: (email: string, password: string) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: FC = (props) => {
  const { children } = props;
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState();

  const signin = (email: string, password: string): void => {
    setChecking(true);
    LogIn()
  };

  const signout = (): void => {
    console.log("signout clicked");
    setChecking(true);
    sessionStorage.clear();
    window.location.replace("http://localhost:3000/625fca30c1cf951c042bd5ec");
    // signOut(auth).catch((error: Error) => alert.error(error.message));
  };
  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {/* {checking && <Loader />}
      {!checking && !user && <AuthModal />} */}
      {/* {!checking && user && children} */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextInterface => useContext(AuthContext);
