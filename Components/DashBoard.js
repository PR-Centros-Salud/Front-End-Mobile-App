import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const FindScreen = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.greetContainer}>
                <View style={styles.greetTextContainer}>
                    <Text style={styles.greetText}>
                        Hola, {userName}!
                    </Text>
                </View>
                <View style={styles.greetUserPhotoContainer}>
                    <Image
                    source={require('../assets/userPictures/lady.png')} 
                    style={styles.userPhoto}/>
                </View>
            </View>

            <View style={styles.mainTitleContainer}>
                <View style={styles.greetTitleContainer}>
                    <Text style={styles.greetTitleText}>
                        Que te trae de {"\n"} nuevo por acá?
                    </Text>
                </View>
            </View>

            <View style={styles.searchBarContainer}>
                <Image  
                    source={require('../assets/Icons/search.png')}
                    resizeMode='contain'
                    style={styles.searchBarIcon}/>
                <TextInput style={styles.searchBar}
                    placeholder="Escribe lo que deseas buscar..."
                    placeholderTextColor="#a6a6a6"
                    autoCapitalize="none"
                    autoCorrect={false}
                    
                />
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.optionBox}>
                    <TouchableOpacity style={styles.optionCircle2}>
                        <Image 
                            source={require('../assets/Icons/syringe.png')}
                            resizeMode='contain'
                            style={styles.optionsImage}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textOption}>
                        Reservar Cita
                    </Text>
                </View>
                

                <View style={styles.optionBox}>
                    <TouchableOpacity style={styles.optionCircle}>
                        <Image 
                            source={require('../assets/Icons/syringe.png')}
                            resizeMode='contain'
                            style={styles.optionsImage}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textOption}>
                        Laboratorio
                    </Text>
                </View>

                <View style={styles.optionBox}>
                    <TouchableOpacity style={styles.optionCircle}>
                        <Image 
                            source={require('../assets/Icons/medicine.png')}
                            resizeMode='contain'
                            style={styles.optionsImage}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textOption}>
                        Farmacia
                    </Text>
                </View>

                <View style={styles.optionBox}>
                    <TouchableOpacity style={styles.optionCircle} onPress={() => navigation.navigate('DoctorList')}>
                        <Image 
                            source={require('../assets/Icons/user.png')}
                            resizeMode='contain'
                                style={styles.optionsImage}
                            />
                    </TouchableOpacity>
                    <Text style={styles.textOption}>
                        Doctores
                    </Text>
                </View>
            </View>

            <View style={styles.subTitle}>
                <Text style={styles.textSubTitle}>
                    Hospitales cerca de tu área
                </Text>
                
                <Text style={styles.textLink}>
                    Ver más
                </Text>
            </View>
        
        </View>
    );
}


export default FindScreen;

const userName = 'Fernanda';

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
    greetContainer:{
        width:'100%',
        height:'auto',
        marginTop:25,
        padding:10,
        marginBottom:10,
        flexDirection:'row',
        backgroundColor:'transparent',
    },
    greetTextContainer:{
        width:'auto',
        color:'white',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    greetText:{
        color:'white',
        fontSize:15,
        fontWeight:'600'
    },
    greetUserPhotoContainer:{
        width:'auto',
        height:'auto',
        backgroundColor:'transparent',
        right:-115
        
    },
    userPhoto:{
        width:90,
        height:90,
        borderRadius:50
    },
    mainTitleContainer:{
        height:'auto',
        width:'100%',
        backgroundColor:'transparent'
    },
    greetTitleContainer:{
        width:'auto',
        height:'auto',
        padding:5,
        backgroundColor:'transparent'
    },
    greetTitleText:{
        color:'white', 
        fontSize:35,
        fontWeight:'500',
        textAlign:'left'
    },
    searchBarContainer:{
        width:'100%',
        height:'auto',
        marginTop:10,
        borderRadius:12,
        padding:10,
        backgroundColor:'#262C33',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    searchBar:{
        margin:'auto',
        width:'91%',
        height:40,
        padding:7,
        borderRadius:12,
        backgroundColor:'transparent'
    },
    searchBarIcon:{
        width:25,
        height:25,
        tintColor:'#c7c7c7'
    },
    optionsContainer:{
        width:'100%',
        height:'auto',
        marginTop:15,
        padding:0,
        flexDirection:'row',
        backgroundColor:'transparent'
    },
    optionBox:{
        height:'auto',
        width:80,
        marginRight:7,
        alignItems:'center',
        backgroundColor:'transparent'
    },
    textOption:{
        color:'white',
        textAlign:'center',
        fontSize:13,
        fontWeight:'500'
    },
    optionCircle:{
        height:65,
        width:65,
        padding:10,
        alignItems:'center',
        borderRadius:50,
        backgroundColor:'#262C33'
    },
    optionCircle2:{
        height:65,
        width:65,
        padding:10,
        alignItems:'center',
        borderRadius:50,
        backgroundColor:'#E84949'
    },
    optionsImage:{
        width:40,
        height:40,
        tintColor:'white'
    },
    subTitle:{
        width:'100%',
        height:'auto',
        marginTop:10,
        padding:6,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'transparent'
    },
    textSubTitle:{
       color:'white',
       fontSize:18,
       fontWeight:'700'
    },
    textLink:{
        color:'#7b7b7b',
        fontSize:15,
        fontWeight:'500',
        marginLeft:30,
        backgroundColor:'transparent',
        
    }
    
});