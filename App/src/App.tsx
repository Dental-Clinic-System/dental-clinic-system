import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppointmentPage } from './pages/appointment';
import { Clinics } from './pages/clinics';
import { Home } from './pages/home';
import Login from './pages/login';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Home"}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Clinics"
            component={Clinics}
          />
          <Stack.Screen
            name="Appointment"
            component={AppointmentPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};


export default App;
