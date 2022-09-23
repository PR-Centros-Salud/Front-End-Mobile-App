import React from "react";
import { View, Text, Image, TouchableOpacity, Alert, TextInput, StyleSheet, ScrollView} from "react-native";

const FindScreen = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.titleHeader}>Doctores</Text>
            </View>
            
            <View style={styles.searchBarContainer}>
                <TextInput style={styles.searchBar}
                    placeholder="Escribe lo que deseas buscar..."
                    placeholderTextColor="#a6a6a6"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>

            <View style={styles.scrollHorizontalContainer}>
                <ScrollView 
                    horizontal={true} 
                    style={styles.scrollViewHorizontal}>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cardiología</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>Pediatría</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>Neurología</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.buttonText}>Odontología</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <View styles={styles.scrollVerticalContainer}>
                <ScrollView style={styles.scrollViewVertical}>
                    
                    <TouchableOpacity style={styles.doctorContainer} onPress={() => navigation.navigate('DoctorDetails')}>
                        <Image
                            source={require('../assets/userPictures/lady.png')}
                            resizeMode='contain'
                            style={styles.doctorImage}
                        />
                        <View style={styles.doctorTextContainer}>
                            
                            <Text style={styles.doctorName}>
                                Dr. Abdel Garcia
                            </Text>
                            <Text style={styles.doctorInfo}>
                                Cardiólogo | Hospital del Norte
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.doctorContainer} onPress={() => navigation.navigate('DoctorDetails')}>
                        <Image
                            source={require('../assets/userPictures/lady.png')}
                            resizeMode='contain'
                            style={styles.doctorImage}
                        />
                        <View style={styles.doctorTextContainer}>
                            
                            <Text style={styles.doctorName}>
                                Dr. Abdel Garcia
                            </Text>
                            <Text style={styles.doctorInfo}>
                                Cardiólogo | Hospital del Norte
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.doctorContainer} onPress={() => navigation.navigate('DoctorDetails')}>
                        <Image
                            source={require('../assets/userPictures/lady.png')}
                            resizeMode='contain'
                            style={styles.doctorImage}
                        />
                        <View style={styles.doctorTextContainer}>
                            
                            <Text style={styles.doctorName}>
                                Dr. Abdel Garcia
                            </Text>
                            <Text style={styles.doctorInfo}>
                                Cardiólogo | Hospital del Norte
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.doctorContainer} onPress={() => navigation.navigate('DoctorDetails')}>
                        <Image
                            source={require('../assets/userPictures/lady.png')}
                            resizeMode='contain'
                            style={styles.doctorImage}
                        />
                        <View style={styles.doctorTextContainer}>
                            
                            <Text style={styles.doctorName}>
                                Dr. Abdel Garcia
                            </Text>
                            <Text style={styles.doctorInfo}>
                                Cardiólogo | Hospital del Norte
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.doctorContainer} onPress={() => navigation.navigate('DoctorDetails')}>
                        <Image
                            source={require('../assets/userPictures/lady.png')}
                            resizeMode='contain'
                            style={styles.doctorImage}
                        />
                        <View style={styles.doctorTextContainer}>
                            
                            <Text style={styles.doctorName}>
                                Dr. Abdel Garcia
                            </Text>
                            <Text style={styles.doctorInfo}>
                                Cardiólogo | Hospital del Norte
                            </Text>
                        </View>
                    </TouchableOpacity>

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
    searchBarContainer:{
        width:'100%',
        height:'auto',
        marginTop:10
    },
    searchBar:{
        margin:'auto',
        width:'100%',
        height:40,
        padding:7,
        borderRadius:12,
        backgroundColor:'#262C33'
    },
    scrollHorizontalContainer:{
        marginTop:10,
        height:55,
        padding:4
    },
    scrollViewHorizontal:{
        height:'auto',
        padding:5,
        backgroundColor:'transparent'
    },
    button:{
        width:100,
        height:35,
        padding:4,
        marginRight:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E84949'
    },
    button2:{
        width:100,
        height:35,
        padding:4,
        marginRight:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,        
        borderColor:'#FFF',
        backgroundColor:'transparent'
    },
    buttonText:{
        color:'white'
    },
    scrollVerticalContainer:{
        marginTop:10,
        height:'100%',
        padding:4,
        backgroundColor:'transparent'
    },
    scrollViewVertical:{
        height:'100%',
        backgroundColor:'transparent'
    },
    doctorContainer:{
        borderRadius:10,
        height:'auto',
        width:335,
        padding:5,
        marginBottom:10,
        backgroundColor:'#262C33',
        flexDirection: 'row'
    },
    doctorImage:{
        borderRadius:10,
        width: 60,
        height: 60,
        marginRight:10
    },
    doctorTextContainer:{
        backgroundColor:'transparent',
        height:'auto',
        justifyContent:'center'
    },
    doctorName:{
        color:'white',
        fontWeight:'700'
    },
    doctorInfo:{
        marginTop:5,
        color:'white',
        fontWeight:'300'
    }
})
