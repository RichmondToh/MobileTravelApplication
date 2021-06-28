import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View}from 'react-native';

import MyAppColours from '../config/MyAppColours';


function MyAppButton({title, color="Skin", onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
          <View style={[style.button,{backgroundColor:MyAppColours[color]}]}>
              <Text style={style.text}> {title} </Text>
          </View>
      </TouchableOpacity> 
    
    );
}

const style = StyleSheet.create({
    button:{
        backgroundColor: MyAppColours.Skin,   //Button Colour
        borderRadius: 20,                     //Rounded Edges
        width: 150,
        height: 50,                         
        padding: 10,                          //Add width and height around button
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
    },

    text:{
        color: MyAppColours.White,
        fontSize: 18,
        //textTransform: 'uppercase',
       // fontWeight: 'bold',
    }
})

export default MyAppButton;

