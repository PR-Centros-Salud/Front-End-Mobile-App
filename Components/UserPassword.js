import React, {useState} from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { changePasswordApi } from './api/user_api';
import { useFormik } from 'formik';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';

const FindScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        },
        onSubmit: async (values) => { 
            setIsLoading(true)
            if (values.newPassword != values.confirmPassword) {
                alert("Passwords don't match")
                setIsLoading(false)
                return;
            } else if (values.newPassword.length > 3) {
                const response = await changePasswordApi(values.oldPassword, values.newPassword)
                if (response.status == 200) {
                    setIsLoading(false)
                    alert('Password changed successfully')
                    await AsyncStorage.removeItem('AccessToken');
                    DevSettings.reload();
                } else {
                    setIsLoading(false)
                    alert('Password change failed')
                }
            } else {
                setIsLoading(false)
                alert('Password must be at least 4 characters')
            }
        }
    })

    return(
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" color="#E84949" /> : (
                <>
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../assets/userPictures/lady.png')}
                        resizeMode='contain'
                        style={{
                            borderRadius:20,
                            width: 110,
                            height: 110,
                            marginRight:10
                        }}
                    />
                    <View style={styles.userTextCont}>
                        <Text style={styles.userName}>
                            María Jimenez
                        </Text>
                        <Text style={styles.userInfo}>
                            mariajim@gmail.com
                        </Text>
                        <Text style={styles.userInfo}>
                            Estudiante
                        </Text>
                        <Text style={styles.userInfo}>
                            78743012
                        </Text>
                        <Text style={styles.userInfo}>
                            1345810
                        </Text>
                    </View>
                </View>
                <ScrollView style={styles.scrollV}>
                <View style={styles.separator}/>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Antigua contraseña" 
                    placeholderTextColor="#fff"
                    value={formik.values.oldPassword}
                    onChangeText={formik.handleChange('oldPassword')}/>

                    <TextInput  
                    style={styles.inputText}
                    placeholder="Nueva Contraseña"
                    values={formik.values.newPassword}
                    placeholderTextColor="#fff"
                    onChangeText={ formik.handleChange('newPassword')} />

                    <TextInput  
                    style={styles.inputText}
                    placeholder="Confirmar Contraseña"
                    value={formik.values.confirmPassword}        
                    placeholderTextColor="#fff"
                    onChangeText={formik.handleChange('confirmPassword')}/>

                    <TouchableOpacity style={styles.loginBtn} onPress={formik.handleSubmit}>
                        <Text style={styles.loginText}>Confirmar</Text>
                    </TouchableOpacity>
                </ScrollView>
                </>
            )}
            
            
            

        </View>
        
    );
}

export default FindScreen;



const BGColor = '#121418';
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width:'100%',
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center',
        backgroundColor: BGColor
    },
    title:{
        left:0,
        top:30,
        width:250,
        marginTop:0,
        marginBottom:10,
        color:'#FFF',
        fontWeight:'800',
        fontSize: 25,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    plainText:{
        color:'#fff'
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
    subText:{
        width:'100%',
        color:'#FFF',
        fontWeight:'800',
        left:0, 
        top:30,
        bottom:30
    },
    scrollV:{
        backgroundColor:'transparent',
        height:'20%',
        width:'88%',
        top:60
    },
    profileContainer:{
        top:20,
        height:120,
        width:'82%',
        padding:5,
        marginBottom:5,
        backgroundColor:'transparent',
        flexDirection: 'row'
    },
    userTextCont:{
        width:180,
        padding:5
    },
    
    userName:{
        fontSize:15,
        color:'#FFF',
        marginBottom:10
    },
    userInfo:{
        fontSize:12,
        color:'#7a7a7a',
        marginTop:4
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
        height:40,
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
      },
   
    separator2:{
        top:40,
        marginBottom:10,
        height:1,
        width:'100%',
        backgroundColor:'#7a7a7a'
    },
    optionsContainer:{
        borderRadius:10,
        height:50,
        padding:5,
        top:40,
        marginBottom:5,
        flexDirection: 'row',
    },
    optionsTextCont:{
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    optionsText:{
        color:'#FFF',
        fontWeight:'600'
    }

});