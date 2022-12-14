import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './LogIn';
import {DevSettings} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const reload = () => {

    AsyncStorage.removeItem('AccessToken');
    DevSettings.reload();
}
        

const FindScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/userPictures/lady.png')}
                    resizeMode='contain'
                    style={{
                        borderRadius:50,
                        width: 60,
                        height: 60,
                        marginRight:10
                    }}
                  />
                <View style={styles.userTextCont}>
                    <Text style={styles.userName}>
                        María Jimenez
                    </Text>
                    <Text style={styles.userInfo}>
                        Estudiante
                    </Text>
                </View>
            </View>
            
            <ScrollView style={styles.scrollV}>
                <View style={styles.separator}/>

                <Text style={styles.subText}> Mi Cuenta</Text>

                <TouchableOpacity style={styles.optionsContainer} onPress={() => navigation.navigate('UserAccount')}>
                <Image
                    source={require('../assets/Icons/user.png')}
                    resizeMode='contain'
                    style={{
                        tintColor:'#FFF',
                        borderRadius:5,
                        width: 30,
                        height: 30,
                        marginRight:10,
                        padding:4
                      
                    }}
                  />
                  <View style={styles.optionsTextCont}>
                    <Text style={styles.optionsText}>
                        Mi Perfil
                    </Text>
                    
                  </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionsContainer} onPress={() => navigation.navigate('Appointments')}>
                    <Image
                    source={require('../assets/Icons/calendarIcon.png')}
                    resizeMode='contain'
                    style={{
                        tintColor:'#FFF',
                        borderRadius:5,
                        width: 35,
                        height: 35,
                        marginRight:10,
                        padding:4
                      
                    }}
                  />
                  <View style={styles.optionsTextCont}>
                    <Text style={styles.optionsText}>
                        Mis Citas
                    </Text>
                    
                  </View>
                    
                </TouchableOpacity>

                

                <TouchableOpacity style={styles.optionsContainer}>
                <Image
                    source={require('../assets/Icons/help.png')}
                    resizeMode='contain'
                    style={{
                        tintColor:'#FFF',
                        borderRadius:5,
                        width: 35,
                        height: 30,
                        marginRight:10,
                        padding:4
                      
                    }}
                  />
                  <View style={styles.optionsTextCont}>
                    <Text style={styles.optionsText}>
                        Ayuda
                    </Text>
                    
                  </View>
                    
                </TouchableOpacity>

                <View style={styles.separator2}/>

                <TouchableOpacity style={styles.optionsContainer} onPress={() => navigation.navigate('UserLocation')}>
                <Image
                    source={require('../assets/Icons/location.png')}
                    resizeMode='contain'
                    style={{
                        tintColor:'#FFF',
                        borderRadius:5,
                        width: 35,
                        height: 35,
                        marginRight:10,
                        padding:4
                      
                    }}
                  />
                  <View style={styles.optionsTextCont}>
                    <Text style={styles.optionsText}>
                        Mi Ubicación
                    </Text>
                    
                  </View>
                    
                </TouchableOpacity>

                <View style={styles.separator2}/>

                <TouchableOpacity style={styles.optionsContainer} onPress={() => reload()}>
                <Image
                    source={require('../assets/Icons/logOut.png')}
                    resizeMode='contain'
                    style={{
                        tintColor:'#FFF',
                        borderRadius:5,
                        width: 35,
                        height: 35,
                        marginRight:10,
                        padding:4
                      
                    }}
                  />
                  <View style={styles.optionsTextCont}>
                    <Text style={styles.optionsText}>
                        Cerrar Sesión
                    </Text>
                    
                  </View>
                  
                    
                </TouchableOpacity>

            </ScrollView>

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
        width:175,
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
        height:50,
        width:'88%',
        padding:5,
        marginBottom:0,
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
        color:'#7a7a7a'
    },

    separator:{
        top:0,
        height:1,
        width:'100%',
        backgroundColor:'#7a7a7a'
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