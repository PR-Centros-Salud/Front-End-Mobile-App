import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, TextInput} from 'react-native';
import { SearchBar } from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome';




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
                    style={styles.right}
                  />
            </View>
            
            <ScrollView style={styles.scrollV}>
                
                <Text style={styles.subText}>¿Qué te trae de {"\n"} nuevo por acá?</Text>


                <View style={styles.searchbarContainer}>

                    <View style={styles.searchBar}>
                        <TextInput
                            
                            style={styles.input}
                            placeholder="Escribe lo que deseas buscar..."
                            placeholderTextColor="#000"
                            autoCapitalize="none"
                            autoCorrect={false}

                        />
                    </View>
                </View>
              
                <View style={styles.optionsSlider}>
                    <View style={styles.optionBox}>
                        <TouchableOpacity onPress={() => navigation.navigate('DoctorList')}>
                            <Image
                                source={require('../assets/Icons/user.png')}
                                resizeMode='contain'
                                style={{
                                    tintColor:'#FFF',
                                    borderRadius:5,
                                    width: 30,
                                    height: 30,
                                    marginRight:10,
                                    padding:4
                                
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.optionBox}>
                        <TouchableOpacity onPress={() => navigation.navigate('DoctorList')}>
                            <Image
                                source={require('../assets/Icons/user.png')}
                                resizeMode='contain'
                                style={{
                                    tintColor:'#FFF',
                                    borderRadius:5,
                                    width: 30,
                                    height: 30,
                                    marginRight:10,
                                    padding:4
                                
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.optionBox}>
                        <TouchableOpacity onPress={() => navigation.navigate('DoctorList')}>
                            <Image
                                source={require('../assets/Icons/user.png')}
                                resizeMode='contain'
                                style={{
                                    tintColor:'#FFF',
                                    borderRadius:5,
                                    width: 30,
                                    height: 30,
                                    marginRight:10,
                                    padding:4
                                
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>

        </View>
        
    );
}

const windowWidth = Dimensions.get('window').width;

export default FindScreen;

const BGColor = '#121418';
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: windowWidth,
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
        width:windowWidth-110,
        padding:5,
        marginTop:30,
        marginRight: windowWidth/4,
        flexDirection: 'row'
    }, 
    searchbarContainer:{
        top:50,
        height:80,
        width:windowWidth-110,
        padding:5,
        margin:0,
        flexDirection: 'row'
    }, 
   
    right:{
        alignItems:'right',
        width: windowWidth,
        height: 70,
        borderRadius: 50,
        
        
    },icon:{
        width: 50,
        height: 50,
        marginRight:10
    },
    searchBar:{
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth - 120,
        top: 20,
        left: 0,
        bottom: 0,
        right: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    optionText:{
        fontSize:15,
        alignContent:'center',
        width:200,
        color:'#fff',
        marginBottom:10,
        marginRight:30
    },
    optionsSlider:{
        width:'auto',
        height:'auto',
        margin:'auto',
        marginTop:70,
        flexDirection: 'row',
        padding:10,
        backgroundColor:'transparent'
    },
    optionBox:{
        height:45,
        width:45,
        marginRight:5,
        padding:4,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'transparent'
    }
});