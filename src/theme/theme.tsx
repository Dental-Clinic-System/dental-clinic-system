import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { ReactElement } from "react";

const customTheme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1660,
      xl: 1920,
    },
  },
  palette: {
    text: {
      primary: "#000",
      secondary: "#fff",
    },
    grey: {
      50: "#F8FAFC",
      100: "#F4F6F9",
      200: "#EBEEF5",
      300: "#E3E5EE",
      400: "#CFD1DE",
      500: "#B2B4C0",
      600: "#878C9A",
      700: "#6A6D7C",
      800: "#4E5160",
      900: "#252531",
    },
    primary: {
      main: "#96D699",
      dark: "#4F9852",
      light: "#F1FCF0",
      contrastText: "#80C67F",
      100: "#F1FCF0",
      600: "#96D699",
      700: "#80C67F",
      900: "#4F9852",
    },
    secondary: {
      main: "#7FD4CF",
      dark: "#39706D",
      light: "#DEFAF8",
      contrastText: "#6DC5BF",
      100: "#DEFAF8",
      600: "#7FD4CF",
      700: "#6DC5BF",
      900: "#39706D",
    },
    error: {
      main: "#DF3437",
      dark: "#8E5855",
      light: "#FFF5F5",
      contrastText: "#D69999",
      100: "#FFF5F5",
      600: "#DF3437",
      700: "#D69999",
      900: "#8E5855",
    },
    warning: {
      main: "#E28904",
      dark: "#D36E00",
      light: "#FFF7DB",
      //   contrastText: null,
      100: "#FFF7DB",
      600: "#E28904",
      700: "#D36E00",
    },
    info: {
      main: "#7F92D4",
      dark: "#243382",
      light: "#DEE7FA",
      contrastText: "#4B66C2",
      100: "#DEE7FA",
      600: "#7F92D4",
      700: "#4B66C2",
      900: "#243382",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "21px",
      lineHeight: "28px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "18px",
      lineHeight: "32px",
      fontWeight: 700,
    },
    // h4: null,
    // h5: null,
    h6: { fontSize: "10px", lineHeight: "16px", fontWeight: 400 },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "16px",
      lineHeight: "21px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: 700,
    },
    body2: {
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: 400,
    },
    caption: { fontSize: "12px", lineHeight: "16px", fontWeight: 400 },
    overline: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 700,
      textTransform: "none",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          height: "100vh",
          width: "100vw",
        },
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: "0",
      },
    },
    MuiInput: {
      underline: {
        "&&&:before": {
          borderBottom: "none",
        },
        "&&:after": {
          borderBottom: "none",
        },
      },
      formControl: {
        "label + &": {
          marginTop: "0",
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: "none",
        position: "absolute",
        left: "0px",
        top: "-10px",
      },
      animated: {
        transition: "none",
      },
      shrink: {
        transform: "none",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#6A6D7C",
        "&$focused": {
          color: "#6A6D7C",
          fontWeight: "700",
        },
      },
    },
    MuiTouchRipple: {
      child: {
        borderRadius: "0",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#252531",
        color: "white",
        fontSize: "12px",
        padding: "8px 16px",
      },
      arrow: {
        color: "#252531",
      },
    },
  },
});

export const Theme = ({ children }: { children: ReactElement }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
