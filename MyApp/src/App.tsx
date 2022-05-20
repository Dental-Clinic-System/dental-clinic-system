import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, ProfileScreen, MedicineScreen, AppointmentScreen, getAppointment } from './screens';
import { BottomTabBar } from './navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AppointmentDetailScreen } from './screens/appointment-detail';


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
      <Stack.Screen
        name='AppointmentDetail'
        component={AppointmentDetailScreen}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name="Нүүр" component={HomeScreen} />
        <Tab.Screen name="Эм" component={MedicineScreen} />
        <Tab.Screen name="Цаг_Aвалт" component={AppointmentStack} options={{ headerShown: false }} />
        <Tab.Screen name="Профайл" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
