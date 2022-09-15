import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const FindScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            
            <View style={styles.profileContainer}>
                
                <View style={styles.userTextCont}>
                    
                    <Text style={styles.userName}>
                        Hola, Fernanda!
                    </Text>
                    
                </View>
                <Image
                    source={require('../assets/userPictures/lady.png')}
                    resizeMode='contain'
                    style={{
                        borderRadius:50,
                        width: 70,
                        height: 70,
                        marginRight:10
                    }}
                  />
            </View>
            
            <ScrollView style={styles.scrollV}>
                
                <Text style={styles.subText}>¿Qué te trae de nuevo por acá?</Text>

                <View style={styles.optionsContainer}>
                    <Image source={require('../assets/Icons/medicine.png')}
                    resizeMode='contain'
                    style={{
                        padding:3,
                        borderRadius:30,
                        backgroundColor:'#E84949',
                        tintColor:'#FFF',
                        width: 70,
                        height: 70,
                        marginRight:10}}/>
                </View>

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
        top:10,
        width:175,
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
    
    subText:{
        width:'100%',
        color:'#FFF',
        fontWeight:'500',
        fontSize:30,
        left:0, 
        top:30,
        bottom:30
    },
    scrollV:{
        backgroundColor:'transparent',
        height:'20%',
        width:'88%',
        top:60
    },
    profileContainer:{
        top:50,
        height:80,
        width:'88%',
        padding:5,
        marginBottom:0,
        flexDirection: 'row'
    },
    userTextCont:{
        width:250,
        padding:0,
        left:-10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    
    userName:{
        fontSize:15,
        left:0,
        width:200,
        color:'#FFF',
        marginBottom:10, 
        marginRight:30
    },

    optionsContainer:{
        top:50,
        height:80,
        width:'88%',
        padding:5,
        marginBottom:0,
        flexDirection: 'row'
    },

});