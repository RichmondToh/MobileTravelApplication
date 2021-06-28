import React from 'react';

import { View, Image, Text, StyleSheet,TouchableHighlight } from 'react-native';
import MyAppText from './MyAppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MyAppColours from '../config/MyAppColours';

function MyWishCard({image, subtitle, title,onPress, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
        <TouchableHighlight onPress={onPress} underlayColor={MyAppColours.DarkBrown}>
        <View style={styles.container}> 
        {isFinite(image)? <Image source={image} style={styles.image}/> :<Image source={{uri: image}} style={styles.image}/>}
        <MyAppText style={styles.title}>{title}</MyAppText>
        <MyAppText style={styles.subtitle}>{subtitle}</MyAppText>
        </View>
        </TouchableHighlight>
        </Swipeable>


    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
         borderRadius: 10,
         overflow:"scroll",
         marginTop: 10,
         marginBottom: 10,
       
         marginLeft:15,
         marginRight:15,
    },
    image:{
        height:190,
        width: "100%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,

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

export default MyWishCard;