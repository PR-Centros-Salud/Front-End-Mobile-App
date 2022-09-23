import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView} from "react-native";
import Svg, {Path} from 'react-native-svg';

const FindScreen = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.detailsContainer}>
                <Image 
                source={require('../assets/userPictures/lady.png')}
                resizeMode='contain'
                style={styles.doctorImage}/>
                <View style={styles.detailsInfoContainer}>
                    <Text style={styles.doctorName}>
                        Dr. Abdel Garcia
                    </Text>
                    <Text style={styles.doctorInfo}>
                        Cardiologo
                    </Text>
                    <Text style={styles.doctorInfo}>
                        Hospital del Norte
                    </Text>

                    <View style={styles.ratingContainer}>
                        <Image
                            source={require('../assets/Icons/star1.png')}
                            resizeMode='contain'
                            style={styles.starRating}
                        />
                        <Image
                            source={require('../assets/Icons/star1.png')}
                            resizeMode='contain'
                            style={styles.starRating}
                        />
                        <Image
                            source={require('../assets/Icons/star1.png')}
                            resizeMode='contain'
                            style={styles.starRating}
                        />
                        <Image
                            source={require('../assets/Icons/star1.png')}
                            resizeMode='contain'
                            style={styles.starRating}
                        />
                        <Image
                            source={require('../assets/Icons/star1.png')}
                            resizeMode='contain'
                            style={styles.starRating}
                        />
                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>

                    <Text style={styles.ratingNumber}>230 calficaciones</Text>

                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.options}>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.options}>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.options}>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('DoctorAppointment')}>
                            <Image
                                source={require('../assets/Icons/calendarIcon.png')}
                            resizeMode='contain'
                            style={styles.optionIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.scrollViewContainer}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.aboutTitle}>
                        Sobre el Doctor
                    </Text>
                    <Text style={styles.doctorDescription}>
                    Dr. Abdel Garcia  es un destacado especialista en Cardiología con más de 20 años de trayectoria. Además, es experto en Hemodinámica y Cardiología Intervencionista.
                    {"\n"}{"\n"}
                    Finalizó sus estudios de Medicina y Cirugía en la Universidad de Salamanca en 1992 y a partir de allí se especializó en Cardiología y Hemodinámica en el Hospital Universitario 12 de Octubre de Madrid, en el que trabajó hasta el año 2017. Ha sido el director de la sección de Hemodinámica del Departamento de Cardiología de la Clínica Universidad de Navarra desde 2017 hasta 2021. Actualmente colabora en la Unidad de Cardiología Intervencionista del Hospital Ruber Internacional. 
                    {"\n"}{"\n"}
                    Durante su trayectoria ha publicado más de 90 artículos en revistas científicas nacionales e internacionales y es coautor en 9 libros de la especialidad de Cardiología.
                    {"\n"}{"\n"}
                    Actualmente es miembro del Comité Editorial de la Revista Española de Cardiología y hasta el año 2015 fue el secretario de la Junta Directiva de la Sección de Hemodinámica y Cardiología Intervencionista de la Sociedad Española de Cardiología.
                    </Text>
                </ScrollView>
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
    detailsContainer:{
        height:'auto',
        marginTop:10,
        padding:10,
        flexDirection:'row',
        backgroundColor:'transparent'
    },
    doctorImage:{
        borderRadius:10,
        width: 140,
        height: 140,
        marginRight:10
    },
    detailsInfoContainer:{
        backgroundColor:'transparent',
        height:'auto',
        justifyContent:'center'
    },
    doctorName:{
        color:'white',
        fontSize:19,
        fontWeight:'700',
        marginBottom:4
    },
    doctorInfo:{
        color:'white',
        fontSize:16
    },
    ratingContainer:{
        flexDirection:'row',
        height:'auto',
        padding:2,
        marginTop:2,
        backgroundColor:'transparent'
    },
    starRating:{
        width: 15,
        height: 15,
        tintColor: 'yellow'
    },
    ratingText:{
        color:'white'
    },
    ratingNumber:{
        color:'white',
        fontSize:9
    },
    optionsContainer:{
        flexDirection:'row',
        height:'auto',
        padding:2,
        marginTop:2,
        backgroundColor:'transparent'
    }, 
    options:{
        height:38,
        width:38,
        borderRadius:5,
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E84949',
        marginRight:7
    },
    optionIcon:{
        height:30,
        width:30,
        tintColor:'white'
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
    }
})