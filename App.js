import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SplashScreen from './Components/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaViewComponent, StyleSheet, Text, View } from 'react-native';


export default function App() {
  
  return (
    
      <SafeAreaProvider>
          <SplashScreen> </SplashScreen>
      </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
