import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const FindScreen = ({navigation}) => {
    return(
        
        <View style={styles.mainContainer}>
            
            <View style={styles.container}>
                <Text style={styles.toptext}>Reservar una Cita</Text>
                <Text style={styles.subText}>13 Diciembre 2022</Text>
                
    
                <View style={styles.columnContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mañana</Text>
                    </TouchableOpacity>
                         
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Tarde</Text>
                    </TouchableOpacity>

                    
                </View>

                <View style={styles.rowContainer}>

                        <View style={styles.firstColumn}>
                            <TouchableOpacity style={styles.buttonHour}>
                                <Text style={styles.buttonText}>8:00</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHour}>
                                <Text style={styles.buttonText}>9:00</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHour}>
                                <Text style={styles.buttonText}>10:00</Text>
                            </TouchableOpacity>
                                
                            <TouchableOpacity style={styles.buttonHour}>
                                <Text style={styles.buttonText}>11:00</Text>
                            </TouchableOpacity>
                        </View>
                    
                        <View style={styles.secondColumn}>
                            <TouchableOpacity style={styles.buttonHour}>
                                <Text style={styles.buttonText}>12:00</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHour}>
                                <Text style={styles.buttonText}>13:00</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonHour}>
                                <Text style={styles.buttonText}>14:00</Text>
                            </TouchableOpacity>
                        </View>

                </View>

               
                    
                    
                <Text style={styles.secondSubText}>Fecha</Text>
                <View style={styles.DateContainer}>
                    <Text style={{color:'white'}}>
                        Aqui Va la fecha
                    </Text>
                </View>
                <Text style={styles.secondSubText}>Detalles de la cita</Text>

                <View style={styles.AppDetails}>
                    <Text style={{color:'white'}}>
                        Aqui van los detalles de la cita
                    </Text>
                </View>    

            </View>

           
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
        backgroundColor:'#121418'
    },
    container:{
        flex: 1,
        width:'100%',
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center',
        backgroundColor: BGColor
    },
    toptext:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:  'center',
        marginTop: 10,
        marginBottom: 20,
        color: '#FFF'
    },
     subText:{
        width:'88%',
        color:'#FFF',
        left:0, 
        top:0,
        bottom:10
    },
    secondSubText:{
        width:'88%',
        color:'#FFF',
        left:0, 
        top:0,
        bottom:10,
        fontSize: 20,
    },
    button:{
        width: '45%',
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#FFF',
        borderWidth: 2,
        borderColor: '#FFF'
        
    },
    buttonHour:{
        width: '20%',
        height: 30,
        margin: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#FFF',
        borderWidth: 2,
        borderColor: '#FFF'

    },
    
    rowContainer:{
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        color: '#FFF',
        padding: 20,
        
       
    },


    buttonText:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:  'center',
    },
    columnContainer:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
        color: '#FFF'
    },
    selectHourColumn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '20%',
        color: '#FFF'
    },
    firstColumn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '58.5%',
        color: '#FFF',
        
    },
    secondColumn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '58.5%',
        color: '#FFF'
    }, 
    DateContainer:{
        width: '50%',
        height: '30%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        color: '#FFF',
        borderWidth: 2,
        borderColor: '#FFF'
    },
    AppDetails:{
        width: '70%',
        height: '20%',
        backgroundColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#FFF',
        borderWidth: 2,
        borderColor: '#FFF',
        marginTop: 15,
    },





});
