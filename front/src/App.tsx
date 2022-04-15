import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { router, registerRouter } from 'router';
import { Sidebar } from 'layout/SideBar';
import { Theme } from './theme';

const App = () => {
  const routerContent = useRoutes(router);
  const registerContent = useRoutes(registerRouter);
  const userToken = window.sessionStorage.getItem('username');

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
