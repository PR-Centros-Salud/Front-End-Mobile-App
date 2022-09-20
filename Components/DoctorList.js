import React from "react";
import { View, Text, Button, TouchableOpacity, Alert, TextInput, StyleSheet, ScrollView} from "react-native";

export default function DoctorList(){
    return(
        <View style={styles.mainContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.titleHeader}>DOCTORES</Text>
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
                        <Text>A</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        
        </View>
    );
}

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
        fontWeight:'600',
        fontSize: 25,
    },
    searchBarContainer:{
        width:'100%',
        height:'auto',
        marginTop:10,
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
        height:50,
        padding:4
    },
    scrollViewHorizontal:{
        height:10,
        padding:10,
        backgroundColor:'red'
    }
})
