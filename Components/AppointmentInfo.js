import React from "react";
import { View, Alert, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView} from "react-native";
import Svg, {Path} from 'react-native-svg';

const FindScreen = ({navigation}) => {
    const cancelAlert = () =>
    Alert.alert(
      "Cancelar Cita",
      "Esta seguro que quiere cancelar su cita?",
      [
        {
          text: "Si",
          onPress: () => console.log("Si Pressed"),
          style: "cancel"
        },
        { text: "No", onPress: () => console.log("No Pressed") }
      ]
    );
    return(
        <View style={styles.mainContainer}>


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
                            Dr. Abdel Garcia
                        </Text>

                        <Text style={styles.docInfoText}>
                            Especialidad:
                        </Text>
                        <Text style={styles.docInfoText2}>
                            Cardiología
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
                                13/12/2022
                            </Text>


                        </View>

                    </View>
                    
                    <View style={styles.appInfo}>
                        <Image
                            source={require('../assets/Icons/location.png')}
                            resizeMode='contain'
                            style={styles.iconImage}
                        />

                        <View style={styles.docInfoTextContainer2}>
                            <Text style={styles.docInfoText}>
                                Ubicación:
                            </Text>
                            <Text style={styles.docInfoText2}>
                                Hospital del Norte
                            </Text>
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

                        <View style={styles.docInfoTextContainer2}>
                            <Text style={styles.docInfoText}>
                                Hora:
                            </Text>
                            <Text style={styles.docInfoText2}>
                                11:30 AM
                            </Text>

                        </View>

                    </View>
                </View>

            </View>

            <View style={styles.doctorDetailContainer}>
                <View style={styles.subTitle1}>
                    <Text style={styles.subTitleText}>
                        Recetas Medicas:
                    </Text>
                </View>
                <View style={styles.separator}></View>

                <View style={styles.docInfoContainer}>
                    
                    <View style={styles.appInfo}>
                        <Image
                            source={require('../assets/Icons/medicine.png')}
                            resizeMode='contain'
                            style={styles.iconImage}
                        />

                        <View style={styles.docInfoTextContainer2}>
                            <Text style={styles.docInfoText}>
                                Medicamento:
                            </Text>
                            <Text style={styles.docInfoText2}>
                                Ibuprofeno
                            </Text>
                        </View>

                    </View>
                    
                    <View style={styles.appInfo}>
                        <Image
                            source={require('../assets/Icons/location.png')}
                            resizeMode='contain'
                            style={styles.iconImage}
                        />

                        <View style={styles.docInfoTextContainer2}>
                            <Text style={styles.docInfoText}>
                                Cantidad:
                            </Text>
                            <Text style={styles.docInfoText2}>
                                9 Tb (nueve)
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.docInfoContainer}>
                    
                    <View style={styles.appInfo2}>
                        <Image
                            source={require('../assets/Icons/medicine.png')}
                            resizeMode='contain'
                            style={styles.iconImage}
                        />

                        <View style={styles.docInfoTextContainer2}>
                            <Text style={styles.docInfoText}>
                                Indicaciones:
                            </Text>
                            <Text style={styles.docInfoText2}>
                                Tomar un comprimido de Ibuprofeno cada 8 horas por 3 días.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={cancelAlert}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}
export default FindScreen;

const styles = StyleSheet.create({
    mainContainer:{
        margin:'auto',
        width:'100%',
        height:'100%',
        padding:20,
        alignItems:'center',
        backgroundColor:'#121418'
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
    doctorDetailContainer:{
        width:'100%',
        marginTop:10,
    },
    subTitleText:{
        color:'#c7c7c7',
        fontSize:16,
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
        color:'#7b7b7b'
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
