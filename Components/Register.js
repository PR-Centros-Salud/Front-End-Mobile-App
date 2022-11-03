import React, {useState} from 'react';
import { StyleSheet, Text, Button, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from "react-router-dom";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Router, Switch, Route, Routes,  Redirect} from "react-router-dom";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from 'react-native-element-dropdown';

export default function Register() {

  const data = [
    { label: 'Masculino', value: 'M' },
    { label: 'Femenino', value: 'F' },
    { label: 'Prefiero no decirlo', value: 'O' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    //console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const [clientName, setText] = useState('');
  const [lastName, setText1] = useState('');
  const [secondLastName, setText2] = useState('');
  const [id, setText3] = useState('');
  const [email, setText4] = useState('');
  const [username, setText5] = useState('');
  const [password, setText6] = useState('');
  const [confirmPassword, setText7] = useState('');

  const formValidation = async () => {
    let errorFlag = false;
    // input validation
    if (password !==  confirmPassword ) {
        errorFlag = true;
        alert("Las contraseñas no coinciden");
    }else{
      alert("Registro exitoso");
    }
  }

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
            placeholder="Nombre" 
            placeholderTextColor="#fff"
            onChangeText={newtext => setText(newtext)}
            defaultValue={clientName}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Apellido" 
            placeholderTextColor="#fff"
            onChangeText={newtext1 => setText1(newtext1)}
            defaultValue={lastName}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Segundo Apellido" 
            placeholderTextColor="#fff"
            onChangeText={newtext => setText2(newtext)}
            defaultValue={secondLastName}
            />

            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={{color: '#fff'}}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                activeColor={'#E84949'}
                backgroundColor={'transparent'}
                itemTextStyle={{ color: 'white' }}
                
                maxHeight={300}
                labelField="label"
                valueField="value"
                itemContainerStyle = {{backgroundColor: '#262C33'}}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
            }}
            />
           

            <TouchableOpacity style={styles.inputText} onPress={showDatePicker}>
             <Text style={styles.inputTextDate} >{selectedDate ? selectedDate.toLocaleDateString() : 'Fecha de Nacimiento'}</Text>
            </TouchableOpacity>

            <TextInput  
            style={styles.inputText}
            placeholder="C.I." 
            placeholderTextColor="#fff"
            onChangeText={newtext => setText3(newtext)}
            defaultValue={id}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Nombre de Usuario" 
            placeholderTextColor="#fff"
            onChangeText={newtext => setText5(newtext)}
            defaultValue={username}

            />

            <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#fff"
            onChangeText={newtext => setText4(newtext)}
            defaultValue={email}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={newtext => setText6(newtext)}
            defaultValue={password}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Confirmar Contraseña" 
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={newtext => setText7(newtext)}
            defaultValue={confirmPassword}
            />

        <TouchableOpacity style={styles.loginBtn} onPress={formValidation}>
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>
        
      </ScrollView>
      
      </LinearGradient>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        isDarkModeEnabled={true}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        style={{
          height: 200,
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
  inputTextDate:{
    left:0,
    height:30,
    width:300,
    marginBottom:10,
    borderRadius:10,
    padding: 10,
    backgroundColor:'transparent',
    color:'#fff',
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
  },
  selectedTextStyle: {
    color: 'white',
  },


  dropdown: {
    height: 50,
    width: 300,
    
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent:"center",
    alignSelf:'center',
    marginBottom: 12,
    backgroundColor:'#262C33',
    color:"white",
  }, 

});


