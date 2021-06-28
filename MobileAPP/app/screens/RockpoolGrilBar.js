import React from 'react';
import {StyleSheet,ScrollView } from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MySmallFoodCard from '../components/MySmallFoodCard';
import MyAppText from '../components/MyAppText';
import MyFoodCard from '../components/MyFoodCard';


function RockpoolGrilBar(props) {
    return (
        <MyAppScreen style={styles.container}>

            <MyFoodCard title="Rockpool Bar & Grill" 
                subtitle="Rockpool Bar & Grill Sydney is Australia’s most beautiful dining room.
                          Situated in the sensational City Mutual Building, the dining style
                          is simple and uncomplicated. Our food is sourced from Australia’s
                          very best producers a perfect match to what is Australia’s
                          greatest wine list."
                          address="66 Hunter St, Sydney NSW"
                          openning="6:00pm – 9:00pm"
                          image={require("../assets/RockpoolGrilBar.jpg")}/>
            <MyAppText style={styles.title}>Menu</MyAppText>   

            <ScrollView>
            <MySmallFoodCard title="Lamb Cutlet"  cost="$35" image={require("../assets/lambcutlets.jpg")}/>
            <MySmallFoodCard title="Pork Chops"  cost="$40" image={require("../assets/porkchop.jpg")}/>
            <MySmallFoodCard title="Pork Sausage"  cost="$27" image={require("../assets/porksausage.jpg")}/>
            <MySmallFoodCard title="Wagu Ragu" cost="$25" image={require("../assets/Ragu.jpg")}/>
            <MySmallFoodCard title="Spanakopita" cost="$36" image={require("../assets/spanikopita.jpg")}/>
            <MySmallFoodCard title="Wagu Bolognese"  cost="$32" image={require("../assets/wagyu.jpg")}/>
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

export default RockpoolGrilBar;