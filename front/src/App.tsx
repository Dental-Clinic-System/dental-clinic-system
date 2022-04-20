import { useRoutes } from "react-router-dom";
import { router, registerRouter } from "./router";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Theme } from "./theme";
import { Grid } from "@mui/material";
import { AUTH_TOKEN } from "./helper/constants";
import { Sidebar } from "./layout/SideBar";

const App = () => {
  const routerContent = useRoutes(router);
  const registerContent = useRoutes(registerRouter);
  let userToken = window.sessionStorage.getItem(AUTH_TOKEN);

  return (
    <Theme>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {userToken ? (
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
        )}
      </LocalizationProvider>
    </Theme>
  );
};
export default App;
