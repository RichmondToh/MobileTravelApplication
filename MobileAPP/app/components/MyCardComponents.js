import React from 'react';

import { View, Image, StyleSheet } from 'react-native';
import MyAppText from './MyAppText';

function MyCardComponents({image, subtitle, title}) {
    return (
        <View style={styles.container}> 
        <Image source={image}style={styles.image} />    
        <MyAppText style={styles.title}>{title}</MyAppText>
        <MyAppText style={styles.subtitle}>{subtitle}</MyAppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
         borderRadius: 10,
         overflow:"scroll",
         marginTop: 10,
         marginBottom: 10,
       
        // height:200, 
        // width:200, 
         marginLeft:15,
         marginRight:15,
    },
    image:{
        height:190,
        width: "100%",
        //borderRadius: 10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        // flex:1,
        // height: null,
        // width: null,
        // resizeMode:'cover',
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
})

export default MyCardComponents;