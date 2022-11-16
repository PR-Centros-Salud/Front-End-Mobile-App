import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import  SelectList  from 'react-native-dropdown-select-list';
import { ComboBox } from 'react-native-combobox';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from 'react-native-element-dropdown';
import { ActivityIndicator } from "react-native";
import { getAvailableLabTimesApi, labAppointmentCreateApi } from './api/appointments';

const FindScreen = ({route, navigation}) => {
    
    const { labs } = route.params;
    const [loading, setLoading] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [availableTimes, setAvailableTimes] = useState(null);
    const [laboratoryService, setLaboratoryService] = useState(0);
    const [time, setTime] = useState(null);
    let date = new Date();
    date.setDate(date.getDate() + 1);
    const [selectedDate, setSelectedDate] = useState(date);
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        (async () => {
            if (date < new Date().setDate(new Date().getDate() + 1)) { 
                Alert.alert("Please select a valid date");
                return;
            }
            setAvailableTimes(null);
            setTime(null);
            setLoading(true);
            const searchDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            const labService = labs.laboratories.find(lab => lab.id == laboratoryService);
            const availableTimes = await getAvailableLabTimesApi(labService.medical_personal_id, searchDate);
            if (availableTimes?.data?.schedule_day_appointment) {
                setAvailableTimes(availableTimes.data.schedule_day_appointment);
            } else {
                setAvailableTimes([]);
            }
            setLoading(false);
            
        })();
        hideDatePicker();
    };

    const data = labs.laboratories.map(lab => {
        return { label: lab.laboratory_service_name, value: lab.id }
    })

    const [isFocus, setIsFocus] = useState(false);

    const cancelAlert = () =>
    Alert.alert(
      "Confirmar Laboratorio",
      "Esta seguro que quiere confirmar?",
      [
        {
          text: "Si",
        onPress: () => {
            (async () => {
                setLoadingCreate(true)
                const labService = labs.laboratories.find(lab => lab.id == laboratoryService);
                const scheduleDayAppointment = availableTimes.find(atime => atime.id == time);
                const data = {
                    laboratory_service_id: labService.id,
                    schedule_day_appointment_id: scheduleDayAppointment.id,
                    programmed_date: `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`,
                }
                const response = await labAppointmentCreateApi(data);
                if (response?.data) { 
                    if (response.data?.detail) {
                        if (typeof response.data?.detail === 'string') { 
                            Alert.alert(
                                "Error",
                                response.data.detail,
                                [
                                    {
                                        text: "Ok",
                                        onPress: () => {
                                            setLoadingCreate(false);
                                        }
                                    }
                                ]
                            )
                        } else {
                            Alert.alert(
                                "Error",
                                "Error en el servidor, intente mas tarde",
                                [
                                    {
                                        text: "Ok",
                                        onPress: () => {
                                            setLoadingCreate(false);
                                        }
                                    }
                                ]
                            )
                        }
                        
                    } else {
                        Alert.alert(
                            "Exito",
                            "Se ha creado la cita correctamente",
                            [
                                {
                                    text: "Ok",
                                    onPress: () => {
                                        setLoadingCreate(false);
                                        navigation.navigate('DashBoard');
                                        
                                    }
                                }
                            ]
                        )
                    }
                }

                setLoadingCreate(false);
              })()
          },
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("No Pressed") }
      ]
    );

    const [selectedCat, setSelectedCat] = useState();

    const [selected, setSelected] = React.useState("");

    const handleDropdownChange = (item) => { 
        setLaboratoryService(item.value);
        setIsFocus(false)
    }

    return(
        
        <View style={styles.mainContainer}>
            
            {labs  && !loadingCreate ? (
                <>
                    <ScrollView style={styles.scrollViewContainer}>
                        <View style={styles.comboBoxContainer}>
                            
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={{color: '#fff'}}
                                placeholder="Tipo de prueba"
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                activeColor={'#E84949'}
                                backgroundColor={'transparent'}
                                itemTextStyle={{ color: 'white' }}
                                maxHeight={300}
                                value={laboratoryService}
                                labelField="label"
                                valueField="value"
                                itemContainerStyle = {{backgroundColor: '#262C33'}}
                                onChange={handleDropdownChange}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                            />
                        </View>
                        
                        {laboratoryService != 0 && (
                            <>
                                

                            <TouchableOpacity style={styles.buttonDate} onPress={showDatePicker}>
                                <Text style={styles.buttonDateText}>
                                    Seleccione una fecha.
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.subTextContainerMain}>
                                <View style={styles.subTextContainer}>
                                    <Text style={styles.subText}>
                                        Fecha:
                                    </Text>
                                </View>
                                <View style={styles.subTextContainer2}>
                                    <Text style={styles.subText}>
                                        {`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`}
                                    </Text>
                                </View>
                            </View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                isDarkModeEnabled={true}
                                onCancel={hideDatePicker}
                                onConfirm={handleConfirm}
                                style={{
                                height: 300,
                                }}

                                display="inline"
                            />
                                
                            </>
                        )}

                        <View style={styles.scheduleOptionsContainer}>
                            <ScrollView horizontal="true" style={styles.scrollViewContainer}>
                            <View>
                            {availableTimes != null ? (
                                <>
                                {availableTimes.length > 0 ? (
                                        <View style={styles.scheduleButtonContainer}>
                                            {availableTimes.map(atime => {
                                                return (
                                                    <TouchableOpacity style={atime.id == time ? styles.hourButton : styles.hourButton2} onPress={() => setTime(atime.id)}>
                                                        <Text style={styles.hourText}>
                                                            {atime.start_time.substring(0,5)}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    ): (
                                    <Text style={styles.subText1} >
                                        No hay horarios disponibles para esta fecha.
                                    </Text>
                                )}
                                </>
                            ) : laboratoryService != 0 && loading && (<ActivityIndicator size="large" color="#E84949" />)}
                            </View></ScrollView>
                        </View>
                        {time != null && (
                            <>
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
                                        {labs.laboratories.find(lab => lab.id == laboratoryService).laboratory_service_name}
                                    </Text>

                                    <Text style={styles.simpleTextDetails}>
                                        Fecha: {`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`}
                                    </Text>

                                    <Text style={styles.simpleTextDetails}>
                                        Hora: {availableTimes.find(atime => atime.id == time).start_time.substring(0,5)}-{availableTimes.find(atime => atime.id == time).end_time.substring(0,5)}
                                    </Text>

                                    <Text style={styles.simpleTextDetails}>
                                        Institucion: {labs.name}
                                    </Text>
                                    <Text style={styles.simpleTextDetails}>
                                        Direccion: {labs.address}
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
                            </>
                        )}
                        </ScrollView>
                </>
                ): (
                <ActivityIndicator size="large" color="#E84949" />
            )}

              
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
    subTextContainerMain:{
        width:'100%',
        marginBottom:10,
        backgroundColor:'transparent',
        flexDirection:'row'
    },
    subTextContainer:{
        width:'25%',
        marginBottom:10,
        backgroundColor:'transparent',
    },
    subTextContainer2:{
        width:'75%',
        marginBottom:10,
        backgroundColor:'transparent',
    },
    subText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    subText1:{
        color:'white'
    },
    scrollVHorizontal:{
        width:'100%',
        backgroundColor:'transparent'
    },
    optionContainer:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'transparent'
    },

    buttonDate:{
        width:'100%',
        backgroundColor:"#E84949",
        borderRadius:10,
        height:45,
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
    },
    buttonDateText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
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
        width:'auto',
        padding:5,
        backgroundColor:'transparent',
        flexDirection:'row'
    },
    hourButton:{
        padding:10,
        backgroundColor:"#E84949",
        borderRadius:10,
        borderWidth:1,        
        borderColor:'#E84949',
        height:35,
        marginRight:7,
        alignItems:'center',
        justifyContent:'center'
    },
    hourButton2:{
        padding:10,
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,        
        borderColor:'#FFF',
        height:35,
        marginRight:7,
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
    
    dropdown: {
        height: 50,
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 8,
        justifyContent:"center",
        alignSelf:'center',
        marginBottom: 12,
        backgroundColor:'#262C33',
        color:"white",
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
