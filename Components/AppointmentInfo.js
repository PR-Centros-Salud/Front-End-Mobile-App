import React, {useState} from "react";
import { View, Alert, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView} from "react-native";
import Svg, {Path} from 'react-native-svg';
import MapView, { Marker } from 'react-native-maps';
import { cancelMedAppointmentApi } from "./api/appointments";
import { ActivityIndicator } from 'react-native';

const FindScreen = ({ route, navigation }) => {
    const {appointment} = route.params;

    const [loading, setLoading] = React.useState(false);
    const cancelAlert = () =>
    Alert.alert(
      "Cancelar Cita",
      "Esta seguro que quiere cancelar su cita?",
      [
        {
          text: "Si",
            onPress: () => {
                (async () => {
                    setLoading(true);
                    const response = await cancelMedAppointmentApi(appointment.id);

                    if (response?.status == 200) { 
                        alert('Cita cancelada con exito');
                        navigation.navigate({});
                    } else {
                        alert('Error al cancelar la cita');
                    }
                    setLoading(false);
                })()
          },
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("No Pressed") }
      ]
    );

    const [origin, setOrigin] = React.useState({
        latitude: appointment?.institution?.latitude,
        longitude: appointment?.institution?.longitude,
    });

    return(
       
            <View style={styles.mainContainer}>
                {loading && <ActivityIndicator size="large" color="#E84949" />}
                {!loading && (
                <>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.doctorDetailContainer}>
                            <View style={styles.subTitle1}>
                                <Text style={styles.subTitleText}>
                                    Información del Doctor:
                                </Text>
                            </View>
                            <View style={styles.separator}></View>

                            <View style={styles.docInfoContainer}>
                                <View style={styles.docPicture}>
                                    <Image
                                        source={require('../assets/userPictures/lady.png')}
                                        resizeMode='contain'
                                        style={styles.doctorImage}
                                    />
                                </View>
                                <View style={styles.docInfoTextContainer}>
                                    <Text style={styles.docInfoText}>
                                        Doctor:
                                    </Text>
                                    <Text style={styles.docInfoText2}>
                                        {appointment?.medical_personal?.first_name} {appointment?.medical_personal?.last_name} {appointment?.medical_personal?.second_last_name ? appointment?.medical_personal?.second_last_name : ''}
                                    </Text>

                                    <Text style={styles.docInfoText}>
                                        Especialidad:
                                    </Text>
                                    <Text style={styles.docInfoText2}>
                                        {appointment?.medical_personal?.contract[0]?.role}
                                    </Text>

                                </View>
                            </View>
                        </View>

                        <View style={styles.doctorDetailContainer}>
                            <View style={styles.subTitle1}>
                                <Text style={styles.subTitleText}>
                                    Información de la Cita:
                                </Text>
                            </View>
                            <View style={styles.separator}></View>

                            <View style={styles.docInfoContainer}>
                                
                                <View style={styles.appInfo}>
                                
                                <View style={styles.docInfoContainer}>
                                    <Image
                                        source={require('../assets/Icons/calendarIcon.png')}
                                        resizeMode='contain'
                                        style={styles.iconImage}
                                    />
                                    <View style={styles.docInfoTextContainer2}>
                                        
                                        <Text style={styles.docInfoText}>
                                            Fecha:
                                        </Text>
                                        <Text style={styles.docInfoText2}>
                                            {appointment.programmed_date}
                                        </Text>
                                    </View>
                                </View>
                                    

                                </View>
                                
                                <View style={styles.appInfo}>
                                    <Image
                                        source={require('../assets/Icons/location.png')}
                                        resizeMode='contain'
                                        style={styles.iconImage}
                                    />

                                    <View style={styles.docInfoTextContainer2}>
                                        <View style={styles.docInfoTextContainer2}>
                                            <Text style={styles.docInfoText}>
                                                Ubicación:
                                            </Text>
                                            <Text style={styles.docInfoText2}>
                                                {appointment.institution.name}
                                            </Text>
                                        </View>
                                        <View style={styles.separator}></View>
                                        <View style={styles.docInfoTextContainer2}>
                                            <Text style={styles.docInfoText}>
                                                Teléfono:
                                            </Text>
                                            <Text style={styles.docInfoText2}>
                                                {appointment.institution.phone}
                                            </Text>
                                        </View> 
                                    </View>
                                </View>
                                
                            </View>

                            <View style={styles.docInfoContainer}>
                                
                                <View style={styles.appInfo}>
                                    <Image
                                        source={require('../assets/Icons/calendarIcon.png')}
                                        resizeMode='contain'
                                        style={styles.iconImage}
                                    />

                                    <View style={styles.docInfoContainer}>
                                        <View style={styles.docInfoTextContainer2}>
                                            <Text style={styles.docInfoText}>
                                                Hora Inicial:
                                            </Text>
                                            <Text style={styles.docInfoText2}>
                                            {appointment.schedule_day_appointment.start_time}
                                            </Text>
                                            
                                        </View>
                                        <View style={styles.verticalSeparator}></View>
                                        <View style={styles.docInfoTextContainer2}>
                                            <Text style={styles.docInfoText}>
                                                Hora Finalizacion:
                                            </Text>
                                            <Text style={styles.docInfoText2}>
                                                {appointment.schedule_day_appointment.end_time}
                                            </Text>
                                            
                                        </View>

                                    </View>

                                </View>
                            </View>

                        </View>



                        <View style={styles.doctorDetailContainer}>
                        <View style={styles.separator}></View>
                            <View style={styles.doctorDetailContainer}>
                                <Text style={styles.docInfoText}>
                                    Sala de consulta:
                                </Text>
                                <Text style={styles.docInfoText2}>
                                    {`${appointment?.room.room_block ? `Bloque ${appointment?.room.room_block} ` : ''} ${appointment?.room.room_floor ? `Piso ${appointment?.room.room_floor} ` : ''} ${`#${appointment?.room.room_number}`}`}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.doctorDetailContainer}>
                        {appointment?.status == 4 && (
                            <>
                                <View style={styles.separator}></View>
                                    <View style={styles.subTitle1}>
                                        <Text style={styles.subTitleText}>
                                            Recetas Medicas:
                                        </Text>
                                    </View>
                                <View style={styles.doctorRecipeContainer}>
                                    <View style={styles.docInfoContainer}>
                                    <Text style={styles.medicRecipeText}>
                                        {appointment?.medical_appointment_recipe ? appointment?.medical_appointment_recipe : 'Sin receta'}
                                    </Text>
                                </View>
                            </View>
                            </>
                        )}
                            <View style={styles.docInfoTextContainer}>
                                <Text style={styles.subTitleText}>
                                    Ubicacion del centro medico:
                                </Text>
                                <View style={styles.mapContainer}>
                                    <MapView style={styles.map}
                                        initialRegion={{
                                            latitude: origin.latitude,
                                            longitude: origin.longitude,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    > 
                                        <Marker
                                        coordinate={origin}
                                        onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}/>
                                    </MapView>
                                </View>
                            </View>
                            
                        </View>
                        {(appointment?.status == 1 || appointment?.status == 2) && (new Date(appointment.programmed_date) > new Date()) && (
                            <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.button} onPress={cancelAlert}>
                                        <Text style={styles.buttonText}>Cancelar</Text>
                                    </TouchableOpacity>
                            </View>
                        )}
                    </ScrollView>
                </>
                )}
                 
            </View>
        
    );
}
export default FindScreen;

const styles = StyleSheet.create({
    mainContainer:{
        margin:'auto',
        width:'100%',
        height:'100%',
        padding: 20,
        paddingBottom:70,
        alignItems:'center',
        backgroundColor:'#121418'
    },



    scrollView:{
        width:'100%',
        height:'120%',
        backgroundColor:'#121418',
        padding:20,
        
    },

    mapContainer:{
        width:'100%',
        height:'auto',
        padding:10,
        alignItems:'center',
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        marginTop:10,
    },
    map:{
        width: '100%',
        height: 380,
    },
   
    verticalSeparator:{
        height:'auto',
        width:1,
        borderWidth: 1,     
        borderColor:'#7b7b7b',
        marginLeft:10,
        marginRight:10,
    },
    headerContainer:{
        width:'auto',
        height:'auto',
        marginTop:10,
        backgroundColor:'transparent'
    },
    titleHeader:{
        color:'#FFF',
        fontWeight:'500',
        fontSize: 27,
    },
    textoRelleno:{
        color:'transparent',
        fontWeight:'500',
        fontSize: 15,
    },
    doctorDetailContainer:{
        width:'100%',
        marginTop:10,
    },
    doctorRecipeContainer:{
        width:'100%',
        marginTop:10,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        padding:10,
        
    },
    subTitleText:{
        color:'#c7c7c7',
        fontSize:16,
    },

    medicRecipeText:{
        color:'#c7c7c7',
        fontSize:16,
        marginBottom:10,
    },
    separator:{
        height:'auto',
        borderWidth:1,  
        marginBottom:9,      
        borderColor:'#7b7b7b',
    },
    docInfoContainer:{
        width:'100%',
        height:'auto',
        flexDirection:'row',
        padding:5
    },
    docPicture:{
        marginRight:10
    },
    doctorImage:{
        width:100,
        height:100,
        borderRadius:12
    },
    iconImage:{
        width:40,
        height:40,
        tintColor:'#7b7b7b',
        borderRadius:10 
    },
    docInfoTextContainer:{
        justifyContent:'center'
    },
    docInfoText:{
        color:'#7b7b7b',
        
    },
    docInfoText2:{
        color:'#FFF',
        fontSize:15
    },
    docInfoTextContainer2:{
        justifyContent:'center',
        marginLeft:0
    },
    
    appInfo:{
        flexDirection:'row',
        width:'50%',
        backgroundColor:'transparent'
    },
    appInfo2:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:'transparent'
    },
    scrollViewContainer:{
        marginTop:10,
        height:'62%',
        padding:4,
        backgroundColor:'transparent'
    },
    scrollView:{
        height:'60%',
        textAlign: 'left',
        backgroundColor:'transparent'
    },
    aboutTitle:{
        color:'white',
        fontSize:22,
        fontWeight:'700',
        textAlign: 'left',
        marginBottom:5,
        backgroundColor:'transparent'
    },
    doctorDescription:{
        color:'gray',
        fontSize:14
    },
    buttonContainer:{
        width:'100%',
        height:'auto',
        padding:10,
        backgroundColor:'transparent'
    },
    button:{
        backgroundColor:"#E84949",
        borderRadius:10,
        height:45,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
    }
})
