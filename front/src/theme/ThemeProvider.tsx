import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const changeThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={changeThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
