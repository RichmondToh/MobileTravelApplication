import React from 'react';
import {StyleSheet, ImageBackground, View, Text, SafeAreaView, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import MyAppScreen from '../components/MyAppScreen';
import MyAppText from '../components/MyAppText';
import MyAppColours from '../config/MyAppColours';
import MyAppButton from '../components/MyAppButton';


function WelcomeScreen({navigation}){
    return(
        <MyAppScreen>
            <ImageBackground 
            source = {require("../assets/b5.jpg")} //Displays image background
            style = {styles.background}>
            

            <View style={styles.WelcomeContainer}>
                
                <MaterialCommunityIcons
                name = "bag-personal"
                size = {250}
                color = {MyAppColours.White}/>     
                
                

                <MyAppText>TravelMate</MyAppText>
                <Text style ={styles.smalltext}>It's not about the Destination, </Text>
                <Text style ={styles.smalltext}>It's about the Journey </Text>

                
            </View>

            <View style={styles.buttonContainer}>
                <MyAppButton title="Login" color="0099ff" onPress={() => navigation.navigate("Login")}/>
                <MyAppButton title="Register" color="0099ff" onPress={() => navigation.navigate("Register")}/> 
            </View>

         


            </ImageBackground>
        </MyAppScreen>
    );
} 

const styles = StyleSheet.create({
    socialcontainer:{
        flex: 1,
        marginTop: 25,
        
        alignContent: 'space-between',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    socialmedia:{
        flexDirection: 'column',     
        height: 40,
        width: 40,
        //padding: 20,
        marginLeft: 7,
        marginRight: 7,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 30,
        //backgroundColor: 'red',
        
     
    },
    background:{
        flex:1,
      },
      WelcomeContainer:{
         // backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
      },
      smalltext:{        //Text for the qoute
          fontSize: 14,
          marginTop: 5,            
          marginLeft: 25,
          marginRight: 25,
          fontFamily: Platform.OS === 'android' ? "Roboto" : "Arial",
        //fontWeight: 'bold',
         // fontStyle: 'italic',
          textAlign: 'center',
          color: '#ffffff',
        
      },
      social:{
        fontWeight: 'bold',
        marginTop: 10, 
        color: '#ffffff',
        textDecorationLine: 'underline',
      },
      buttonContainer:{
          marginTop: 50,
          flexDirection: 'row',
          //height: 100,
          //backgroundColor:'red',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          
    

      }

})

export default WelcomeScreen;