import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './Components/SplashScreen';
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import DashBoard from "./Components/DashBoard";
import Home from './Components/Home';
import Settings from './Components/Settings';
import Appointments from './Components/Appointments';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Appointments" component={Appointments} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};