import React from 'react';
import {View, StyleSheet,ImageBackground, TextInput  } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import MyAppColours from '../config/MyAppColours';



function MyAppTextInput({icon, ...otherProps}){
    return(
        <View style={styles.container}>
            
            

            <MaterialCommunityIcons name={icon} size={25}/>

            <TextInput style={styles.textinput} {...otherProps}/>
            
            {/* secureTextEntry={true}/> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f0f0f5",
        flexDirection: 'row',
        borderRadius: 25,
        padding: 5,
        marginVertical: '5%',
        marginLeft: 20,
        marginRight: 20,
        
    },
    textinput:{
        fontSize:20,
        fontWeight: 'bold',
        color: MyAppColours.Black,
        flex:1,
        marginLeft: 10, //Makes a margin gap between image on text

        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir-Roman"
    }

})

export default MyAppTextInput;