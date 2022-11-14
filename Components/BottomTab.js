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
import UserLocation from './UserLocation';
import UserAccount from './UserAccount';
import UserEdit from './UserEdit';
import UserPassword from './UserPassword';

import AppointmentInfo from './AppointmentInfo';
import LabAppointment from './LabAppointment';
import NewLabAppointment from './NewLabAppointment';
import LabAppointmentInfo from './LabAppointmentInfo';
import LogIn from "./LogIn";
import SplashScreen from "./SplashScreen";

const DashboardStack = createStackNavigator();

function DashboardStackScreen() {
  return(
    <DashboardStack.Navigator screenOptions={{
      headerShown:true, 
      headerStyle: {
        backgroundColor: '#121418'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '800',
      },}}>
      <DashboardStack.Screen name="DashBoard" component={DashBoard} options={{ title: 'Inicio' }}/>
      <DashboardStack.Screen name="LabAppointment" component={LabAppointment} options={{ title: 'Laboratorios' }}/>
      <DashboardStack.Screen name="NewLabAppointment" component={NewLabAppointment} options={{ title: 'Nuevo Laboratorio' }}/>
      <DashboardStack.Screen name="LabAppointmentInfo" component={LabAppointmentInfo} options={{ title: 'Detalles' }}/>
      <DashboardStack.Screen name="DoctorList" component={DoctorList} options={{title:"Doctores"}}/>
      <DashboardStack.Screen name="DoctorDetails" component={DoctorDetails} options={{ title: 'Informacion' }}/>
      <DashboardStack.Screen name="DoctorAppointment" component={DoctorAppointment} options={{ title: 'Reservar una Cita' }}/>
    </DashboardStack.Navigator>
  )
}

const AppointmentStack = createStackNavigator();

function AppointmentStackScreen() {
  return(
    <AppointmentStack.Navigator screenOptions={{
      headerShown:true, 
      headerStyle: {
        backgroundColor: '#121418'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '800',
      },
      
      }}>
      <AppointmentStack.Screen name="Appointments" component={Appointments} options={{ title: 'Mis Citas' }}/>
      <AppointmentStack.Screen name="AppointmentInfo" component={AppointmentInfo} options={{ title: 'Detalles de la Cita' }}/>
    </AppointmentStack.Navigator>
  )
};

const LabStack = createStackNavigator();

function LabStackScreen() {
  return(
    <LabStack.Navigator screenOptions={{
      headerShown:true, 
      headerStyle: {
        backgroundColor: '#121418'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '800',
      },
      
      }}>
      <LabStack.Screen name="LabAppointment" component={LabAppointment} options={{ title: 'Mis Laboratorios' }}/>
      <LabStack.Screen name="NewLabAppointment" component={NewLabAppointment} options={{ title: 'Reservar Laboratorio' }}/>
      <LabStack.Screen name="LabAppointmentInfo" component={LabAppointmentInfo} options={{ title: 'Mis Laboratorios' }}/>
    </LabStack.Navigator>
  )
};

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{
      headerShown:true, 
      headerStyle: {
        backgroundColor: '#121418'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '800',
      },
      
      }}>
      <SettingsStack.Screen name="Settings" component={Settings} options={{ title: 'Configuración'  }} />
      <SettingsStack.Screen name="Appointments" component={Appointments} options={{ title: 'Mis Citas' }}/>
      <SettingsStack.Screen name="UserLocation" component={UserLocation} options={{ title: 'Mi Ubicación'  }}/>
      <SettingsStack.Screen name="UserAccount" component={UserAccount} options={{ title: 'Mi Perfil'  }}/>
      <SettingsStack.Screen name="UserEdit" component={UserEdit} options={{ title: 'Editar Perfil'  }}/>
      <SettingsStack.Screen name="UserPassword" component={UserPassword} options={{ title: 'Cambiar Contraseña'  }}/>
      <SettingsStack.Screen name="SplashScreen" component={SplashScreen}/>

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

            <Tab.Screen name="Citas" component={AppointmentStackScreen} options={{
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

            <Tab.Screen name="Laboratorio" component={LabStackScreen} options={{
              tabBarIcon:({focused}) => (
                <View>
                  <Image
                    source={require('../assets/Icons/syringe.png')}
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