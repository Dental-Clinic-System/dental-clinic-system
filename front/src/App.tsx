import { useRoutes } from "react-router-dom";
import { router, registerRouter } from "./router";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Theme } from "./theme";
import { Grid } from "@mui/material";
import { Sidebar } from "./layout/SideBar";
import { MainLayout } from "./layout/MainLayout";
import { AuthProvider } from "./providers/AuthProvider";
import { Login } from "@mui/icons-material";
import { LogIn } from "./pages";

const App = () => {
  const routerContent = useRoutes(router);
  const registerContent = useRoutes(registerRouter);
  let userToken = window.sessionStorage.getItem("username");

  return (
    <Theme>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          {userToken ? <MainLayout>{routerContent}</MainLayout> : <LogIn />}
          {/* {userToken ? (
          <Grid container>
            <Grid item xs={2}>
              <Sidebar />
            </Grid>
            <Grid item xs={10}>
              {routerContent}
            </Grid>
          </Grid>
        ) : (
          registerContent
        )} */}
        </AuthProvider>
      </LocalizationProvider>
    </Theme>
  );
};
export default App;
