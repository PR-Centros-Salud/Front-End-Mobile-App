import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { getPastLabAppointmentsApi, getFutureLabAppointmentsApi } from './api/appointments';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";
import { ActivityIndicator } from "react-native";
import {useFocusEffect} from '@react-navigation/native';

const FindScreen = ({route,navigation}) => {

    const [loading, setLoading] = useState(false);
    const [pastAppointments, setPastAppointments] = useState(null);
    const [upcomingAppointments, setUpcomingAppointments] = useState(null);

    const [tab, setTab] = useState(1);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                setLoading(true);
                const id = jwtDecode(await AsyncStorage.getItem('AccessToken'))?.id;
                console.log(id)
                const past = await getPastLabAppointmentsApi(id);
                if (past?.data){
                    setPastAppointments(past.data);
                    console.log(past.data);
                }
                const future = await getFutureLabAppointmentsApi(id);
                if (future?.data) {
                    setUpcomingAppointments(future.data);
                    console.log(future.data);
                }
                setLoading(false);
            })()
        }, [])
    );


    return(
        <View style={styles.container}>
            <View style={styles.containerButtons}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={tab == 1 ? styles.button : styles.button2} onPress={() => setTab(1)}>
                        <Text style={styles.plainText}>Próximas</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.button2Container}>
                    <TouchableOpacity style={tab == 2 ? styles.button : styles.button2} onPress={() =>setTab(2)}>
                        <Text style={styles.plainText}>Pasadas</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
            <Text style={styles.subText}>Hoy día - {`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}</Text>

            <ScrollView style={styles.scrollV}>
                {loading ? <ActivityIndicator size="large" color="#E84949" /> : null}
                {!loading && tab == 1 && upcomingAppointments?.length > 0 ? upcomingAppointments.map((appointment, index) => {
                    return (
                        <TouchableOpacity style={styles.appointmentContainer} onPress={() => navigation.navigate({ name: 'LabAppointmentInfo', params: {appointment:appointment} })}>
                            <Image
                                source={require('../assets/userPictures/lady.png')}
                                resizeMode='contain'
                                style={{
                                    borderRadius:10,
                                    width: 60,
                                    height: 60,
                                    marginRight:10
                                
                                }}
                            />
                            <View style={styles.appTextCont}>
                                <Text style={styles.appTextStat}>
                                    {appointment.status == 1 ? "Pendiente" : appointment.status == 2 ? "Confirmada" : appointment.status == 3 ? "Cancelada": "Finalizada"}
                                </Text>
                                <Text style={styles.plainText}>
                                    {appointment?.medical_personal?.first_name} {appointment?.medical_personal?.last_name} {appointment?.medical_personal?.second_last_name ? appointment?.medical_personal?.second_last_name : null}
                                </Text>
                                <Text style={styles.appDocInfo}>
                                    {appointment?.medical_personal?.contract[0].role}
                                </Text>
                                <Text style={styles.appClinicInfo}>
                                    {appointment?.institution?.name}
                                </Text>
                            </View>
                            
                        </TouchableOpacity>
                    )
                 }) : !loading && tab == 1 && (<Text style={styles.plainText}>No hay citas próximas</Text>)}
                {!loading && tab == 2 && pastAppointments?.length > 0 ? pastAppointments.map((appointment, index) => { 
                    return (
                        <TouchableOpacity style={styles.appointmentContainer} onPress={() => navigation.navigate({ name: 'AppointmentInfo', params: {appointment:appointment} })}>
                            <Image
                                source={require('../assets/userPictures/lady.png')}
                                resizeMode='contain'
                                style={{
                                    borderRadius:10,
                                    width: 60,
                                    height: 60,
                                    marginRight:10
                                
                                }}
                            />
                            <View style={styles.appTextCont}>
                                <Text style={styles.appTextStat}>
                                {appointment.status == 1 ? "Pendiente" : appointment.status == 2 ? "Confirmada" : appointment.status == 3 ? "Cancelada": "Finalizada"}
                                </Text>
                                <Text style={styles.plainText}>
                                    {appointment?.medical_personal?.name} {appointment?.medical_personal?.last_name} {appointment?.medical_personal?.second_last_name ? appointment?.medical_personal?.second_last_name : null}
                                </Text>
                                <Text style={styles.appDocInfo}>
                                    {appointment?.medical_personal?.contract[0].role}
                                </Text>
                                <Text style={styles.appClinicInfo}>
                                    {appointment?.institution?.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }) : !loading && tab == 2 && (<Text style={styles.plainText}>No hay citas pasadas</Text>)}

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
        width:220,
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
    containerButtons:{
        flexDirection: 'row',
        width:'100%',
        height: 60,
        top:30,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    buttonContainer:{
        height:55,
        width:'50%',
        padding:5,
        backgroundColor:'transparent'
    },
    button:{
        width:'90%',
        backgroundColor:"#E84949",
        borderRadius:10,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    button2Container:{
        height:55,
        width:'50%',
        padding:5,
        backgroundColor:'transparent'
    },
    button2:{
        width:'90%',
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,        
        borderColor:'#FFF',
        height:45,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    subText:{
        width:'88%',
        color:'#FFF',
        left:0, 
        top:40,
        bottom:10
    },
    scrollV:{
        backgroundColor:'transparent',
        height:'20%',
        width:'88%',
        top:60
    },
    appointmentContainer:{
        borderRadius:10,
        height:'auto',
        padding:5,
        marginBottom:5,
        backgroundColor:'#262C33',
        flexDirection: 'row'
    },
    appTextCont:{
        width:180
    },
    appTextStat:{
        color:'#7a7a7a'
    },
    appDocInfo:{
        fontSize:12,
        color:'#7a7a7a'
    },
    appClinicInfo:{
        fontSize:12,
        color:'#7a7a7a'
    }
});