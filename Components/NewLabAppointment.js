import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import  SelectList  from 'react-native-dropdown-select-list';
import { ComboBox } from 'react-native-combobox';
import {Picker} from '@react-native-picker/picker';

const FindScreen = ({navigation}) => {

    const cancelAlert = () =>
    Alert.alert(
      "Confirmar Laboratorio",
      "Esta seguro que quiere confirmar?",
      [
        {
          text: "Si",
          onPress: () => console.log("Si Pressed"),
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("No Pressed") }
      ]
    );

    const [selectedCat, setSelectedCat] = useState();

   
  
    return(
        
        <View style={styles.mainContainer}>
            
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.subTextContainer}>
                    <Text style={styles.subText}>
                        13 Diciembre 2022
                    </Text>
                </View>

                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.plainText}>Mañana</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.plainText}>Tarde</Text>
                    </TouchableOpacity>
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

                <View style={styles.comboBoxContainer}>
                    <Picker
                        mode='dropdown'
                        selectedCat={selectedCat}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCat(itemValue)
                        }>
                        <Picker.Item label="Prueba de Sangre" value="java" />
                        <Picker.Item label="Prueba de Orina" value="js" />
                        <Picker.Item label="Eliza COVID 19" value="java" />
                        <Picker.Item label="Antígeno Nasal" value="js" />
                    </Picker>
                </View>

                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitleText}>
                        Detalles
                    </Text>
                </View>

                <View style={styles.mainDetailsContainer}>
                    <View style={styles.detailsContainer}>
                        

                        <View style={styles.appointmentDetails}>
                        <Text style={styles.appStatusText}>
                            En Proceso de Aprobación
                        </Text>

                        <Text style={styles.simpleTextDetails}>
                            Prueba de Sangre
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

                <View style={styles.confirmationButtonContainer}>
                    <TouchableOpacity style={styles.buttonNewLab} onPress={cancelAlert}>
                        <Text style={styles.plainText}>
                            Confirmar
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>  
        </View>
    );
}

export default FindScreen;



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
    
    containerButtons:{
        flexDirection: 'row',
        width:'90%',
        height: 60,
        top:0,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    buttonNewLab:{
        width:'100%',
        backgroundColor:"#E84949",
        borderRadius:10,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    button:{
        width:150,
        backgroundColor:"#E84949",
        borderRadius:10,
        height:45,
        marginTop:10,
        marginBottom:10,
        marginRight:30,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },

    button2:{
        width:150,
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,        
        borderColor:'#FFF',
        height:45,
        marginTop:10,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    plainText:{
        color:'#fff'
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
    comboBoxContainer:{
        width:'100%',
        height:'auto',
        borderRadius:10,
        marginBottom:5,
        backgroundColor:'white'
    },
    mainDetailsContainer:{
        width:'100%',
        padding:5,
        justifyContent:'center',
        backgroundColor:'transparent',
        marginBottom:10
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
    confirmationButtonContainer:{
        width:'100%',
        height:'auto',
        padding:5,
        backgroundColor:'transparent',
        marginBottom:60
    }
});
