import React from 'react';

import { View, Image, StyleSheet } from 'react-native';
import MyAppText from './MyAppText';

function MyFoodCard({image, subtitle, title, address, openning}) {
    return (
        <View style={styles.container}> 
        <Image source={image}style={styles.image} />    
        <MyAppText style={styles.title}>{title}</MyAppText>
        <MyAppText style={styles.subtitle}>{subtitle}</MyAppText>

         <View style={styles.details}> 

         <View style={styles.coloumn}> 
         <MyAppText style={styles.optionssubtitle}>Address</MyAppText>
         <MyAppText style={styles.options}>{address}</MyAppText>
         </View>

         <View style={styles.coloumn}> 
         <MyAppText style={styles.optionssubtitle}>Openning</MyAppText>
         <MyAppText style={styles.options}>{openning}</MyAppText>
         </View>


         </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
         marginBottom: 5,
    },
    image:{
        height:100,
        width: "100%",
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,

    },
    title:{
        color:"brown",
        fontWeight:"bold",
        fontSize: 25,
        marginLeft:10,
        marginTop:10,
    },
    details:{
        flexDirection: 'row',
    },
    coloumn:{
        flex:1,
        flexDirection: 'column',
    },
    options:{
        color:"black",
        fontSize: 13,
        marginTop: 5,
        marginLeft:13,
        marginBottom:10,
    },
    optionssubtitle:{
        color:"#BDBDBD",
        fontSize: 13,
        marginTop: 5,
        marginLeft:15,
    },

    subtitle:{
        color:"#BDBDBD",
        fontSize: 13,
        marginTop: 5,
        marginLeft:15,
        marginRight: 15,
        marginBottom:10,
       
        
    },
})

export default MyFoodCard;