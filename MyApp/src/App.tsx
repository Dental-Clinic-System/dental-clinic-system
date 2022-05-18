import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, ProfileScreen, MedicineScreen, AppointmentScreen, getAppointment } from './screens';
import { BottomTabBar } from './navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppointmentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='appointment'
    >
      <Stack.Screen
        name='appointment'
        component={AppointmentScreen}
      />
      <Stack.Screen
        name='getAppointment'
        component={getAppointment}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="medicine" component={MedicineScreen} />
        <Tab.Screen name="appointment" component={AppointmentStack} options={{ headerShown: false }} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
