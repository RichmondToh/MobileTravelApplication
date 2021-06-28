import React from 'react';

import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';

import MyAppText from './MyAppText';

function MySmallFoodCard({image, subtitle, title, cost}) {
    return (
        <View style={styles.container}> 
        
        <Image source={image}style={styles.image} />    
       
       
        <View style={styles.coloumn}> 
        
        <MyAppText style={styles.title}>{title}</MyAppText>
        <MyAppText style={styles.subtitle}>{subtitle}</MyAppText>
        
                
       
    
        <View style={styles.bottomhalf}>

       
          <MyAppText style={styles.cost}>{cost}</MyAppText>
       
          <TouchableOpacity>
        <View style={styles.button}>
       
           <Text style={styles.text}>Order</Text>
           
        </View>
        </TouchableOpacity>
        </View>
        



         
         </View>







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
      
         marginLeft:15,
         marginRight:15,        
         
         flexDirection:"row"
    },
    image:{
        flex: 1.5,
        height:100,
        width: 50,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
  
    },
    title:{
        flex: 0.2,
        color:"brown",
        fontWeight:"bold",
        fontSize: 20,
        marginLeft:10,
        marginTop:2,
    },
    subtitle:{
        flex: 0.2,
        color:"black",
        fontSize: 16,
        marginLeft:10,
        marginBottom:2,
        marginRight:1,
    
    },
    text:{
        fontSize: 15,
       color:'black',
    },

    cost:{
        fontSize: 25,
       color:'black',
       marginLeft: 5,
    //    marginTop: 35,
    },
    coloumn:{

    },
    bottomhalf:{
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    button:{
        backgroundColor: "#1E88E5",   //Button Colour
        borderRadius: 10,                     //Rounded Edges
        width: 100,
        height: 40,                                                  //Add width and height around button
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#ffffff',
        // marginTop: 38,
    },


})

export default MySmallFoodCard;