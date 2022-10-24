import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, Animated, StyleSheet, Text, View} from 'react-native';
import Logo from '../assets/logo.png';
import LogIn from './LogIn';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 2000);
  });

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('AccessToken');
    if (!dataToken) {
      navigation.replace('LogIn');
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
     <Animated.Image source={Logo} style={{
        width: 100,
        height: 100,
        marginBottom: 20,
        
    }}></Animated.Image>
      <Text style={styles.text}>Splash</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121418',
  },
  text: {
    fontWeight: '800',
    fontSize: 30,
    color: 'white',
  },
});