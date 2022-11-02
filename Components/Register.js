import React, {useState} from 'react';
import { StyleSheet, Text, Button, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from "react-router-dom";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Router, Switch, Route, Routes,  Redirect} from "react-router-dom";

import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Register() {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
    return (
      <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#121418', '#2B313E', '#2B313E', '#2B313E']}
        style={styles.background}
      >
      <ScrollView style={{
        width:'100%',
        alignSelf:'center'
      }}>
      
      <Text style={{
        left:0,
        marginTop:40,
        width:300,
        marginBottom:20,
        color:'#FFF',
        fontWeight:'bold',
        fontSize: 23,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
      }}>Regístrate.</Text>

            <TextInput  
            style={styles.inputText}
            placeholder="Nombres" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Apellidos" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TouchableOpacity style={styles.inputText} onPress={showDatePicker}>
             <Text style={styles.inputText}>Fecha Nacimiento</Text>
            </TouchableOpacity>

            <TextInput  
            style={styles.inputText}
            placeholder="C.I." 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Nombre de Usuario" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Confirmar Contraseña" 
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={text => this.setState({email:text})}/>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>

        
        <Text style={styles.plainText}>
            ¿No tienes una cuenta? Registrate
        </Text>
        
        
      </ScrollView>
      
      </LinearGradient>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        isDarkModeEnabled={true}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        style={{
          height:300,
          width:'100%',
          color:'black',
        }}
        pickerContainerStyleIOS={{
          height:300,
          width:'100%',
          text:'black',
        }}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      />
      </View>
    );
}

const BGColor = "#1B1F24"

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    height:'100%',
    width:'100%'
  },

  inputText:{
    left:0,
    height:50,
    width:300,
    marginBottom:10,
    borderRadius:10,
    padding: 10,
    backgroundColor:'#262C33',
    color:"white",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center'
  },

  loginBtn:{
    width:300,
    backgroundColor:"#E84949",
    borderRadius:10,
    height:60,
    justifyContent:"center",
    marginTop:20,
    marginBottom:10,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center'
  },

  loginText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center'
  },
  links:{
    color: '#E84949',
    fontWeight:'bold'
  }, 

  plainText:{
    color:'#fff',
    fontWeight:'bold',
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center'
  }

});


