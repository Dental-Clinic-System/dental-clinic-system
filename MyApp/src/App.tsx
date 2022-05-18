import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, ProfileScreen, MedicineScreen, AppointmentScreen } from './screens';
import { BottomTabBar } from './navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
        <Tab.Screen name="medicine" component={MedicineScreen} />
        <Tab.Screen name="appointment" component={AppointmentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
