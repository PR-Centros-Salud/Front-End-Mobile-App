import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const FindScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mis Citas Médicas</Text>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.plainText}>Próximas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.plainText}>Pasadas</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.subText}>Hoy día - 13 de Diciembre 2022</Text>

            <ScrollView style={styles.scrollV}>
                
                <TouchableOpacity style={styles.appointmentContainer}  onPress={() => navigation.navigate('AppointmentInfo')}>
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
                        Aceptada
                    </Text>
                    <Text style={styles.plainText}>
                        Dr. Abdel Garcia
                    </Text>
                    <Text style={styles.appDocInfo}>
                        Cardiólogo
                    </Text>
                    <Text style={styles.appClinicInfo}>
                        Hospital del Norte
                    </Text>
                  </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.appointmentContainer}>
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
                        Aceptada
                    </Text>
                    <Text style={styles.plainText}>
                        Dr. Abdel Garcia
                    </Text>
                    <Text style={styles.appDocInfo}>
                        Cardiólogo
                    </Text>
                    <Text style={styles.appClinicInfo}>
                        Hospital del Norte
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
        width:'90%',
        height: 60,
        top:30,
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
        color:'green'
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