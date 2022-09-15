import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashBoard from './DashBoard';
import Settings from './Settings';
import Appointments from './Appointments';

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
           <Tab.Screen name="Inicio" component={DashBoard}  options={{
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

            <Tab.Screen name="Configuración" component={Settings} options={{
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