import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getAvailableMedTimesApi } from './api/appointments';
import { ActivityIndicator } from "react-native";
import { medAppointmentCreateApi } from './api/appointments';

const FindScreen = ({route, navigation}) => {
    const { doctor } = route.params;
    let date = new Date();
    date.setDate(date.getDate() + 1);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(date);
    const [time, setTime] = useState(null);

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
   
            const availableTimes = await getAvailableMedTimesApi(doctor.id, searchDate);
            console.log(availableTimes)
            if (availableTimes?.data?.schedule_day_appointment) {
                setAvailableTimes(availableTimes.data.schedule_day_appointment);
            } else {
                setAvailableTimes([]);
            }
            setLoading(false);

        })()
        hideDatePicker();
    };  

    useEffect(() => {
        (async () => {
            setLoading(true);
            const searchDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
            const availableTimes = await getAvailableMedTimesApi(doctor.id, searchDate);
            if (availableTimes?.data?.schedule_day_appointment) {
                setAvailableTimes(availableTimes.data.schedule_day_appointment);
            } else {
                setAvailableTimes([]);
            }
            setLoading(false);
        })()
    }, [])

    const createNew = () => {
        Alert.alert(
            "Confirmar cita",
            `¿Estás seguro de que quieres confirmar la cita?`,
            [
                {
                    text: "Si",
                    onPress: () => { 
                        (async () => {
                            setLoadingCreate(true);
                            const scheduleDayAppointment = availableTimes.find((item) => item.id === time);
                            const data = {
                                medical_personal_id: doctor.id,
                                schedule_day_appointment_id: scheduleDayAppointment.id,
                                programmed_date: `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`,
                                institution_id: doctor.institution.id
                            }
                            const response = await medAppointmentCreateApi(data);
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
                        })()
                    },
                    style: "cancel"
                },
                { text: "No", onPress: () => console.log("No Pressed") }
            ]
        )
    }

    const [isFocus, setIsFocus] = useState(false);

    return(
        
        <View style={styles.mainContainer}>
            {doctor && !loadingCreate ? (
                <ScrollView style={styles.scrollViewContainer}>
                    {!loading && (
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
                        <ScrollView style={styles.scrollVHorizontal} horizontal="true">
                            <View>
                            {availableTimes != null && !loading ? (
                                <>
                                {availableTimes.length > 0 ? (
                                        <View style={styles.scheduleButtonContainer}>
                                            {availableTimes.map(time => {
                                                return (
                                                    <TouchableOpacity style={styles.hourButton2} onPress={() => setTime(time.id)}>
                                                        <Text style={styles.hourText}>
                                                            {time.start_time.substring(0,5)}
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
                            ) : loading && (<ActivityIndicator size="large" color="#E84949" />)}
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
                                    Fecha: {`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`}
                                </Text>

                                <Text style={styles.simpleTextDetails}>
                                    Hora: {availableTimes.find(atime => atime.id == time).start_time.substring(0,5)}-{availableTimes.find(atime => atime.id == time).end_time.substring(0,5)}
                                </Text>

                                <Text style={styles.simpleTextDetails}>
                                    Institucion: {doctor?.institution.name}
                                </Text>
                                <Text style={styles.simpleTextDetails}>
                                    Direccion: {doctor?.institution.address}
                                </Text>

                                <Text style={styles.simpleTextDetails}>
                                    Por favor llegar 10 minutos{"\n"}antes!
                                </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.confirmationButtonContainer}>
                            <TouchableOpacity style={styles.buttonNewLab} onPress={createNew}>
                                <Text style={styles.plainText}>
                                    Confirmar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        </>
                    )}
                </ScrollView>
            ): (
                <ActivityIndicator size="large" color="#E84949" />
            )}
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
        marginTop:0,
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
        height:50,
        justifyContent:"center",
        marginTop:0,
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
    },scheduleOptionsContainer:{
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
    confirmationButtonContainer:{
        width:'100%',
        height:'auto',
        padding:5,
        backgroundColor:'transparent',
        marginBottom:60
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
});
