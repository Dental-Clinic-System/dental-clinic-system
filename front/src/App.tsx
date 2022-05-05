import { useRoutes } from "react-router-dom";
import { router, registerRouter } from "./router";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Theme } from "./theme";
import { MainLayout } from "./layout/MainLayout";
import { PatientProvider, AuthProvider } from "./providers";
import { LogIn } from "./pages";

const App = () => {
  const routerContent = useRoutes(router);
  const registerContent = useRoutes(registerRouter);
  let userToken = window.sessionStorage.getItem("username");

  return (
    <Theme>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <PatientProvider>
          <AuthProvider>
            {userToken ? <MainLayout>{routerContent}</MainLayout> : <LogIn />}
          </AuthProvider>
        </PatientProvider>
      </LocalizationProvider>
    </Theme>
  );
};
export default App;
