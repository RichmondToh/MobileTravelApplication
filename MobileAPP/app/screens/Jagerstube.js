import React from 'react';
import {View,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MyCardComponents from '../components/MyCardComponents';
import MySmallFoodCard from '../components/MySmallFoodCard';
import MyAppText from '../components/MyAppText';
import MyFoodCard from '../components/MyFoodCard';

function jagerstube(props) {
    return (
        <MyAppScreen style={styles.container}>

             <MyFoodCard title="Jägerstube" 
                subtitle="Jagerstube began in 2008 when two brothers from Austria
                          and a good friend from Europe joined forces to create an
                          authentic Bavarian cuisine. Jagerstube’s new home now at
                          the Australian Croatian Club Braca Radic in Schofields,
                          Sydney. Now it’s bigger and better thanks to a new investor
                          and adviser."
                          address="79 South Street Schofields"
                          openning="11:30am - 3:00pm"
                          image={require("../assets/jagerstube.jpeg")}/>
            <MyAppText style={styles.title}>Menu</MyAppText>   

            <ScrollView>
            <MySmallFoodCard title="Gypsy platter"  cost="$30" image={require("../assets/gypsyplatter.jpg")}/>
            <MySmallFoodCard title="Mushroom"  cost="$17" image={require("../assets/mushroom.jpeg")}/>
            <MySmallFoodCard title="Pork goulash"  cost="$27" image={require("../assets/Pork.jpg")}/>
            <MySmallFoodCard title="Pork knuckle" cost="$36" image={require("../assets/porkgoulash.jpg")}/>
            <MySmallFoodCard title="Sausage plate " cost="$27" image={require("../assets/sausage.jpg")}/>
            <MySmallFoodCard title="Schnitzel"  cost="$26" image={require("../assets/chickenschnitzel.jpg")}/>
            </ScrollView>

        </MyAppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
         backgroundColor:"white",
        }, 
        image:{
            height:200,
            width: "100%",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
    
        },
        title:{
            color:"black",
            fontWeight:"bold",
            fontSize: 20,
            marginLeft:10,
        },
})

export default jagerstube;