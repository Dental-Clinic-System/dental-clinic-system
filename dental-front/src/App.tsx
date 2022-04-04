import { useRoutes } from 'react-router-dom';
import routes from './router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './contexts/authenticationContext';

const App = () => {

  const content = useRoutes(routes);

  return (
    <ThemeProvider>
      <AuthProvider>  
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {content}
        </LocalizationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
