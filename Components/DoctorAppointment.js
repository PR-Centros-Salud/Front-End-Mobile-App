import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const FindScreen = ({navigation}) => {
    return(
        
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>
                    Reservar una Cita
                </Text>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>
                        13 Diciembre 2022
                    </Text>
                </View>

                <View style={styles.optionContainer}>
                    <View style={styles.button1Container}>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText}>
                                Mañana
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button2Container}>
                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.buttonText}>
                                Tarde
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.scheduleOptionsContainer}>

                    <View style={styles.scheduleButtonContainer}>
                        <TouchableOpacity style={styles.hourButton2}>
                            <Text style={styles.hourText}>
                                08:00AM
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scheduleButtonContainer}>
                        <TouchableOpacity style={styles.hourButton2}>
                            <Text style={styles.hourText}>
                                09:00AM
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scheduleButtonContainer}>
                     <TouchableOpacity style={styles.hourButton2}>
                            <Text style={styles.hourText}>
                                10:30AM
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.scheduleButtonContainer}>
                        <TouchableOpacity style={styles.hourButton2}>
                            <Text style={styles.hourText}>
                                11:00AM
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitleText}>
                        Fecha
                    </Text>
                </View>

                <View style={styles.calendarContainer}>
                    <Calendar/>
                </View>

                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitleText}>
                        Detalles de la cita
                    </Text>
                </View>

                <View style={styles.mainDetailsContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.doctorImageContainer}>
                            <Image
                                source={require('../assets/userPictures/lady.png')}
                                resizeMode='contain'
                                style={styles.doctorImage}
                            />
                            <Text style={styles.doctorText}>
                                Dr. Abdel Garcia
                            </Text>
                        </View>

                        <View style={styles.appointmentDetails}>
                        <Text style={styles.appStatusText}>
                            En Proceso de Aprobación
                        </Text>

                        <Text style={styles.simpleTextDetails}>
                            Fecha: 13 de Diciembre
                        </Text>

                        <Text style={styles.simpleTextDetails}>
                            Hora: 11:00 AM
                        </Text>

                        <Text style={styles.simpleTextDetails}>
                            Hospital del Norte
                        </Text>

                        <Text style={styles.simpleTextDetails}>
                            Por favor llegar 10 minutos{"\n"}antes!
                        </Text>
                    </View>
                    </View>
                </View>

            </ScrollView>  
        </View>
    );
}

export default FindScreen;

const windowHeight = Dimensions.get('window').height;

const BGColor = '#121418';
const styles = StyleSheet.create({

    mainContainer:{
        margin:'auto',
        width:'100%',
        height:'100%',
        padding:20,
        alignItems:'center',
        backgroundColor:BGColor
    },
    titleContainer:{
        width:'auto',
        height:'auto',
        marginTop:10,
        backgroundColor:'transparent'
    },
    textTitle:{
        color:'white',
        fontSize:25,
        fontWeight:'600',
    },
    scrollViewContainer:{
        width:'100%',
        marginTop:20,
    },
    subTextContainer:{
        width:'100%',
        marginBottom:10,
        backgroundColor:'transparent'
    },
    subText:{
        color:'white',
        fontSize:17
    },
    optionContainer:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'transparent'
    },
    button1Container:{
        width:'50%',
        padding:7,
        backgroundColor:'transparent'
    },
    button2Container:{
        width:'50%',
        padding:7,
        backgroundColor:'transparent'
    },
    button1:{
        backgroundColor:"#E84949",
        borderRadius:10,
        height:55,
        alignItems:'center',
        justifyContent:'center'
    },
    button2:{
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,        
        borderColor:'#FFF',
        height:55,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:20
    },
    scheduleOptionsContainer:{
        width:'100%',
        backgroundColor:'transparent',
        padding:0,
        marginBottom:10,
        flexDirection:'row'
    },
    scheduleButtonContainer:{
        width:'25%',
        padding:5,
        backgroundColor:'transparent'
    },
    hourButton2:{
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,        
        borderColor:'#FFF',
        height:35,
        alignItems:'center',
        justifyContent:'center'
    },
    hourText:{
        color:'white'
    },
    subTitleContainer:{
        width:'100%',
        marginBottom:10,
        backgroundColor:'transparent'
    },
    subTitleText:{
        color:'white',
        fontSize:22,
        fontWeight:'600',
        marginBottom:10,
    },
    calendarContainer:{
        width:'100%',
        padding:5,
        marginBottom:10
    },
    mainDetailsContainer:{
        width:'100%',
        padding:5,
        justifyContent:'center',
        backgroundColor:'transparent',
        marginBottom:50
    },
    detailsContainer:{
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,        
        borderColor:'#FFF',
        height:'auto',
        padding:10,
        backgroundColor:'transparent'
    },
    doctorImageContainer:{
        width:'auto',
        height:'auto',
        marginRight:8,
        alignItems:'center',
        backgroundColor:'transparent'
    },
    doctorImage:{
        width:90,
        height:90,
        borderRadius:12
    },
    doctorText:{
        marginTop:2,
        color:'white',
        textAlign:'center',
        fontSize:15,
        fontWeight:'600'
    },
    appointmentDetails:{
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    appStatusText:{
        marginBottom:5,
        color:'orange',
        fontSize:14,
        fontWeight:'600',
        fontStyle:'italic'
    },
    simpleTextDetails:{
        color:'white'
    },
});
