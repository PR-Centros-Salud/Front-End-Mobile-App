import React, {useState, useEffect} from "react";
import { View, Text, Image, TouchableOpacity, Alert, TextInput, StyleSheet, ScrollView} from "react-native";
import { ActivityIndicator } from "react-native";
import { getMedicalPersonalByIdApi, getMedicalPersonalByProvinceApi } from "./api/medicalPersonal";
import AsyncStorage from '@react-native-async-storage/async-storage';
const FindScreen = ({navigation}) => {

    const [isLoading, setLoading] = useState(true);
    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => { 
        (async () => {
            setLoading(true);
            const response = await getMedicalPersonalByProvinceApi();
            if (response?.data) {
                setDoctors(response.data);
            } else {
                alert("Error al cargar los datos");
            }
            setLoading(false);
        })()
    }, []);


    return(
        <View style={styles.mainContainer}>
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

            <View styles={styles.scrollVerticalContainer}>
                {isLoading ? (<ActivityIndicator size="large" color="#E84949" />) :
                    (
                    <ScrollView style={styles.scrollViewVertical}>
                        {doctors.map((doctor) => {
                            return (
                                <TouchableOpacity key={doctor.id} style={styles.doctorContainer} onPress={() => navigation.navigate({name:'DoctorDetails', params: { doctor:doctor}})}>
                                <Image
                                    source={require('../assets/Icons/docIcon.png')}
                                    resizeMode='contain'
                                    style={styles.doctorImage}
                                    tintColor='#fff'
                                />
                                <View style={styles.doctorTextContainer}>
                            
                                    <Text style={styles.doctorName}>
                                        Dr. {doctor?.first_name} {doctor?.last_name} {doctor?.second_last_name ? doctor?.second_last_name : ''}
                                    </Text>
                                    <Text style={styles.doctorInfo}>
                                            {doctor?.contract[0]?.role} | { doctor?.institution?.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                )}
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
        marginTop:10,
        marginBottom:10,
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
        padding:10,
        marginBottom:10,
        backgroundColor:'#262C33',
        flexDirection: 'row'
    },
    doctorImage:{
        borderRadius:10,
        width: 50,
        height: 50,
        marginRight:10, 
        tintColor:'#fff'
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
