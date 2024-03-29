import Head from 'next/head';
import type { NextPage } from 'next';
import { NavigationBar } from '../components';
import { HomePageContent } from '../subsets';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../graphql';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
        '*': {
          fontFamily: "'Montserrat', sans-serif !important",
        },
      },
    },
  },
});

const Content = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Dental Clinic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet" />
      </Head>
      <CssBaseline />

      <main>
        <NavigationBar />
        <HomePageContent />
      </main>
    </ThemeProvider>
  );
};

const Home: NextPage = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Content />
    </ApolloProvider>
  );
};

export default Home;
