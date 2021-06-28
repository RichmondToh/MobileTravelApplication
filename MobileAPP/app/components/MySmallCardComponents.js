import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';
import MyAppText from './MyAppText';
import {Rating } from 'react-native-ratings';

function MySmallCardComponents({image, subtitle, title, rate}) {
    return (
        <View style={styles.container}> 
        <Image source={image}style={styles.image} />    
        <MyAppText style={styles.title}>{title}</MyAppText>
        
        <Rating style={styles.rating} type='star' startingValue={rate} ratingCount={5} imageSize={20} readonly={true}>
        
        </Rating>
        <MyAppText style={styles.subtitle}> {subtitle}
        </MyAppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
         borderRadius: 20,
         overflow:"scroll",
         marginTop: 10,
         marginBottom: 20,
       
        height:200, 
        width:200, 
        marginLeft:10,
    },
    image:{
        height:190,
        width: "100%",

        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        flex:1,
        height: null,
        width: null,
        resizeMode:'cover',
    },
    title:{
        color:"brown",
        fontWeight:"bold",
        fontSize: 20,
        marginLeft:10,
        marginTop:2,
    },
    subtitle:{
        color:"black",
        fontSize: 16,
        marginLeft:10,
        marginBottom:2,

        
    },
    rating:{
        marginRight:75,
        marginBottom:5,
    }
})

export default MySmallCardComponents;