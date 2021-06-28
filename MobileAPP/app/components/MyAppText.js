import React from 'react';

import{Text, StyleSheet,Platform} from 'react-native';
import MyAppColours from '../config/MyAppColours';

function MyAppText({style, children}){
    return(
        <Text style={[styles.text, style]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:50,
        fontWeight: 'bold',
        color: MyAppColours.Skin,

        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir-Roman"
        //If platform os == android, use "Roboto" else use "Avenir-Roman"

        //List of Available Fonts can be found here:
        //https://github.com/react-native-training/react-native-fonts
    }
})

export default MyAppText