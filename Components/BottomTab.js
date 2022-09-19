import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
    

import DashBoard from './DashBoard';
import DoctorList from './DoctorList';
import DoctorDetails from './DoctorDetails';
import DoctorAppointment from './DoctorAppointment';

import Settings from './Settings';
import Appointments from './Appointments';
import UserAccount from './UserAccount';
import UserEdit from './UserEdit';
import UserPassword from './UserPassword';

const DashboardStack = createStackNavigator();

function DashboardStackScreen() {
  return(
    <DashboardStack.Navigator screenOptions={{headerShown:false}}>
      <DashboardStack.Screen name="DashBoard" component={DashBoard}/>
      <DashboardStack.Screen name="DoctorList" component={DoctorList}/>
      <DashboardStack.Screen name="DoctorDetails" component={DoctorDetails}/>
      
    </DashboardStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown:false}}>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="Appointments" component={Appointments} />
      <SettingsStack.Screen name="UserAccount" component={UserAccount}/>
      <SettingsStack.Screen name="UserEdit" component={UserEdit}/>
      <SettingsStack.Screen name="UserPassword" component={UserPassword}/>
    </SettingsStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <Tab.Navigator screenOptions={{ 
            
            headerShown: false,
            tabBarStyle:{
              position: 'absolute',
              backgroundColor: '#262C33',
              height:60,
              paddingBottom:5}}
              }>
           <Tab.Screen name="Inicio" component={DashboardStackScreen}  options={{
              tabBarIcon:({focused}) => (
                <View>
                  <Image
                    source={require('../assets/Icons/homeIcon.png')}
                    resizeMode='contain'
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#E84949': '#fff'
                    }}
                  />
                </View>
              ),
            }}/>

            <Tab.Screen name="Citas" component={Appointments} options={{
              tabBarIcon:({focused}) => (
                <View>
                  <Image
                    source={require('../assets/Icons/calendarIcon.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#E84949': '#fff'
                    }}
                  />
                </View>
              ),
            }}/>

            <Tab.Screen name="Configuración" component={SettingsStackScreen} options={{
              tabBarIcon:({focused}) => (
                <View>
                  <Image
                    source={require('../assets/Icons/settingsIcon.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#E84949': '#fff'
                    }}
                  />
                </View>
              ),
            }}/>

        </Tab.Navigator>
    );
}

export default BottomTab