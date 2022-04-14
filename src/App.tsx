import { useRoutes } from "react-router-dom";
import routes from "./router";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Theme } from "./theme";
import { Grid } from "@mui/material";
import { Sidebar } from "./layout/SideBar";

const App = () => {
  const content = useRoutes(routes);
  return (
    <Theme>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            {content}
          </Grid>
        </Grid>
      </LocalizationProvider>
    </Theme>
  );
};
export default App;
