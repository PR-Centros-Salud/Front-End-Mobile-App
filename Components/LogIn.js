import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Alert, TextInput, StyleSheet, ScrollView} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginApi} from './api/user_api';

import jwtDecode from "jwt-decode";

export default function LogIn(){
  const navigation = useNavigation();
  
 
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [checkValidEmail, setCheckValidEmail] = useState(false);


  const login = async () => {
    await loginApi({
      username: username,
      password: password,
      
    }).then(result =>{
    if(result != null){
      if(result.status == 200) {
      //en principio deberia funcionar con esto
        const credentials = jwtDecode(result.data.access_token);

        if (credentials.discriminator === "client") {
          AsyncStorage.setItem('AccessToken', result.data.access_token);
          navigation.reset({
            index:0,
            routes:[{name:"Home"}],
          });
        }else{
          alert("La aplicación esta hecha para clientes, si es administrador o médico, por favor ingrese a la pagina web");
        }

      }
    }else {
      alert("Contraseña o usuario incorrecto");
    }
  })
    .catch(err => {
      console.error(err);
    })
  };
/* 
  if(email === "email@gmail.com" && password === "abcabc"){
    navigation.reset({
      index:0,
      routes:[{name:"Home"}],
    });
  }else{
    Alert.alert("Error", "Login info incorrect")
  }
  */

  const register = () => {
    navigation.navigate("Register");
  };

  return(
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
        top:0,
        width:300,
        marginTop:80,
        marginBottom:70,
        color:'#FFF',
        fontWeight:'500',
        fontSize: 30,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
      }}>Cuida tu salud, cuida tu vida.</Text>

      <Text style={{
        left:0,
        top:0,
        width:300,
        marginBottom:20,
        color:'#FFF',
        fontWeight:'bold',
        fontSize: 23,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
      }}>Log In.</Text>

<TextInput 
      style={styles.inputText}
      placeholder="Email"
      onChangeText={(text)=> setUserName(text)}
      value={username}
      />
      <TextInput 
      style={styles.inputText}
      placeholder="Contraseña"
      onChangeText={(text)=> setPassword(text)}
      value={password}
      secureTextEntry
      />

      <TouchableOpacity style={styles.loginBtn} onPress={login}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      
      <Text style={{
        marginBottom:50,
        left:0,
        color:'#FFF',
        fontWeight:'bold',
        fontSize: 13,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
      }}>¿Olvidaste tu contraseña?</Text>

        
        <Text style={styles.plainText}>
            ¿No tienes una cuenta?  
            <Text style={styles.links}
              onPress={register}>
                Regístrate
            </Text>
        </Text>

      </ScrollView>
      </LinearGradient>
    </View>
  );
}


const BGColor = "#121418"

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width:'100%',
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center',
    backgroundColor: BGColor
  },

  background: {
    height:'100%',
    width:'100%',
    alignItems:"center",
    justifyContent:"center",
    alignSelf:'center'
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
  },
  links:{
    color:'#E84949'
  }

});


