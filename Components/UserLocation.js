import React from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const FindScreen = ({navigation}) => {

    function getLocationPermission() {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    } 

    const [origin, setOrigin] = React.useState({
        latitude: -17.390530,
        longitude: -66.210519,
    });
  



    return(
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>
                    Mi Ubicación
                </Text>
            </View>

            
            
            <View style={styles.mapContainer}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                > 
                    <Marker
                    draggable
                    coordinate={origin}
                    onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />
                
                </MapView>
                
                <View style={styles.mainMapContainer}>
                    <View style={styles.mapContentContainer}>
                        <View style={styles.iconContainer}>
                            <Image 
                            source={require('../assets/Icons/location.png')}
                            resizeMode='contain'
                            style={styles.icon}
                            />
                        </View>
                        
                        <Text style={styles.textMap}>
                            Ubicacion
                        </Text>

                      

                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>CONFIRMAR</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                
            </View>
            
        </View>
    );
}

export default FindScreen;

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
    titleContainer:{
        width:'100%',
        height:'auto',
        textAlign:'center',
        top:30,
        marginBottom:30,
        backgroundColor:'transparent'
    },
    textTitle:{
        color:'white',
        fontSize:19,
        fontWeight:'700',
        textAlign:'center'
    },
    mainMapContainer:{
        width:'100%',
        height:'auto'
    },
    mapContainer:{
        width:'100%',
        height:'auto',
        padding:10,
        alignItems:'center',
        backgroundColor:'transparent'
    },
    map:{
        width: '100%',
        height: 380,
    },
    mapContentContainer:{
        width:'100%',
        padding:10,
        flexDirection:'row',
        backgroundColor:'#262C33',
        alignItems:'center'
    },
    iconContainer:{
        width:45,
        height:45,
        marginRight:5,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:BGColor
    },
    icon:{
        width:30,
        height:30,
        tintColor:'white'
    },
    textMap:{
        color:'white'
    },
    buttonContainer:{
        width:'100%',
        height:'auto',
        padding:10,
        backgroundColor:'#262C33'
    },
    button:{
        backgroundColor:"#E84949",
        borderRadius:10,
        height:45,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
    }
});
