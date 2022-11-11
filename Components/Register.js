import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from "react-router-dom";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Router, Switch, Route, Routes,  Redirect} from "react-router-dom";

import { useNavigation } from "@react-navigation/native";
import {DevSettings} from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from 'react-native-element-dropdown';

import * as Location from 'expo-location';
import { getProvincesApi } from './api/config';
import {useFormik} from 'formik';
import { createClientApi } from './api/client';




export default function Register() {

  const reload = () => {
    DevSettings.reload();
  }

  const navigation = useNavigation();

  const [error, setError] = useState("");
  const [provinces, setProvinces] = useState([]);

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      second_last_name: '',
      email: '',
      phone:'',
      identity_card:'',
      address:'',
      gender:'',
      birthdate:'',
      province_id:'',
      username:'',
      password:'',
      confirm_password:'',
      lat:'',
      lng:''
    },
    onSubmit: async(values) => {

      if(values.first_name == "" || values.last_name == "" || values.email == "" || 
      values.phone == "" || values.identity_card == "" || values.address == "" || 
      values.password == "" || values.confirm_password == "" || values.birthdate == "" || 
      values.gender == "" || values.province_id == ""){
        alert("No puede dejar espacios vacíos");
        return;
      }

      if(values.password !== values.confirm_password){
        alert("Las contraseñas no coinciden");
        return;
      }

      const response = await createClientApi(values);
      console.log(response)

      if (response?.status == 200) {
        //alert("Usuario creado correctamente");
        //navigation.navigate("LogIn");
        reload();
      } else {
        if (response?.data) {
          alert(response.data?.detail);
        }
      }
      console.table(values);

      console.log(values)
    }
  });

  useEffect(() => {
    (async ()=>{
      let{status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        alert("Permiso denegado");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      formik.setFieldValue('lat', location.coords.latitude);
      formik.setFieldValue('lng', location.coords.longitude);
      //alert("location" + location.coords.latitude + " " + location.coords.longitude);
      const provinces = await getProvincesApi();
      if(provinces?.data){
        const pro = provinces.data.map(e => {
          return {label: e.province_name, value: e.id}
        });
        setProvinces(pro);
      }
      else{
        alert("Error al conetarse con el servidor");
      }
    })()
  }, []);

  const data = [
    { label: 'Masculino', value: 'M' },
    { label: 'Femenino', value: 'F' },
    { label: 'Prefiero no decirlo', value: 'U' },
  ];

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
    
    formik.setFieldValue('birthdate', `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    //console.warn("A date has been picked: ", date);
    hideDatePicker();
  };



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
            onChangeText={formik.handleChange('first_name')}
            defaultValue={formik.values.first_name}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Apellido" 
            placeholderTextColor="#fff"
            onChangeText={formik.handleChange('last_name')}
            defaultValue={formik.values.last_name}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Segundo Apellido" 
            placeholderTextColor="#fff"
            onChangeText={formik.handleChange('second_last_name')}
            defaultValue={formik.values.second_last_name}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Numero de Telefono" 
            placeholderTextColor="#fff"
            onChangeText={formik.handleChange('phone')}
            defaultValue={formik.values.phone }
            />

          <TextInput  
            style={styles.inputText}
            placeholder="Direccion" 
            placeholderTextColor="#fff"
            onChangeText={formik.handleChange('address')}
            defaultValue={formik.values.address}
            />

            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={{color: '#fff'}}
                placeholder="Genero"
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
                value={formik.values.gender}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  formik.setFieldValue('gender', item.value)
                  setIsFocus(false);
              }}
            />

              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={{color: '#fff'}}
                placeholder="Provincia"
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={provinces}
                activeColor={'#E84949'}
                backgroundColor={'transparent'}
                itemTextStyle={{ color: 'white' }}
                
                maxHeight={300}
                labelField="label"
                valueField="value"
                itemContainerStyle = {{backgroundColor: '#262C33'}}
                value={formik.values.province_id}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  formik.setFieldValue('province_id', item.value)
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
            onChangeText={formik.handleChange('identity_card')}
            defaultValue={formik.values.identity_card}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Nombre de Usuario" 
            placeholderTextColor="#fff"
            onChangeText={formik.handleChange('username')}
            defaultValue={formik.values.username}

            />

            <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#fff"
            onChangeText={formik.handleChange('email')}
            defaultValue={formik.values.email}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Contraseña" 
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={formik.handleChange('password')}
            defaultValue={formik.values.password}
            />

            <TextInput  
            style={styles.inputText}
            placeholder="Confirmar Contraseña" 
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={formik.handleChange('confirm_password')}
            defaultValue={formik.values.confirm_password}
            />

        <TouchableOpacity style={styles.loginBtn} onPress={formik.handleSubmit}>
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


