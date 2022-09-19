import React from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const FindScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Editar Perfil</Text>
            
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/userPictures/lady.png')}
                    resizeMode='contain'
                    style={{
                        borderRadius:20,
                        width: 110,
                        height: 110,
                        marginRight:10
                    }}
                  />
                <View style={styles.userTextCont}>
                    <Text style={styles.userName}>
                        María Jimenez
                    </Text>
                    <Text style={styles.userInfo}>
                        mariajim@gmail.com
                    </Text>
                    <Text style={styles.userInfo}>
                        Estudiante
                    </Text>
                    <Text style={styles.userInfo}>
                        78743012
                    </Text>
                    <Text style={styles.userInfo}>
                        1345810
                    </Text>
                </View>
            </View>
            
            <ScrollView style={styles.scrollV}>
                <View style={styles.separator}/>

                <TextInput  
            style={styles.inputText}
            placeholder="Nombres" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Apellidos" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="C.I." 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Nombre de Usuario" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

            <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>

           
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Confirmar Cambios</Text>
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
        width:150,
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
        fontWeight:'800',
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
        height:120,
        width:'88%',
        padding:5,
        marginBottom:5,
        backgroundColor:'transparent',
        flexDirection: 'row'
    },
    userTextCont:{
        width:180,
        padding:5
    },
    
    userName:{
        fontSize:15,
        color:'#FFF',
        marginBottom:10
    },
    userInfo:{
        fontSize:12,
        color:'#7a7a7a',
        marginTop:4
    },

    inputText:{
        left:0,
        height:50,
        width:300,
        marginBottom:10,
        borderRadius:10,
        padding: 10,
        backgroundColor:'#262C33',
        color:"white",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
      },
    
      loginBtn:{
        width:300,
        backgroundColor:"#E84949",
        borderRadius:10,
        height:40,
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center'
      },
    separator2:{
        top:40,
        marginBottom:10,
        height:1,
        width:'100%',
        backgroundColor:'#7a7a7a'
    },
    optionsContainer:{
        borderRadius:10,
        height:50,
        padding:5,
        top:40,
        marginBottom:5,
        flexDirection: 'row',
    },
    optionsTextCont:{
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    optionsText:{
        color:'#FFF',
        fontWeight:'600'
    }

});