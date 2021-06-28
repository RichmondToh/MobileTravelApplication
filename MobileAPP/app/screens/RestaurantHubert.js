import React from 'react';
import {StyleSheet,ScrollView } from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MySmallFoodCard from '../components/MySmallFoodCard';
import MyAppText from '../components/MyAppText';
import MyFoodCard from '../components/MyFoodCard';

function RestaurantHubert(props) {
    return (
        <MyAppScreen style={styles.container}>
             <MyFoodCard title="Restaurant Hubert" 
                subtitle="Hubert is a French restaurant located in the heart
                          of downtown Sydney. We are open for dinner Monday
                          to Saturday, 5pm until late, and lunch from midday
                          every Thursday and Friday. Live jazz plays through
                          the Beatrix Dining Room every Monday to Thursday evening."
                          address="15 Bligh St, Sydney NSW 2000"
                          openning="5:00pm – 1:00am"
                          image={require("../assets/RestaurantHubert.jpg")}/>
            <MyAppText style={styles.title}>Menu</MyAppText>   

            <ScrollView>
            <MySmallFoodCard title="Chateaubriand"  cost="$35" image={require("../assets/chateaubriand.jpg")}/>
            <MySmallFoodCard title="Boeufroom"  cost="$40" image={require("../assets/cote.jpg")}/>
            <MySmallFoodCard title="Duck Parfait"  cost="$27" image={require("../assets/duck.jpg")}/>
            <MySmallFoodCard title="Mille-Feuille" cost="$25" image={require("../assets/Millefeuille.jpg")}/>
            <MySmallFoodCard title="Poisson duJour" cost="$36" image={require("../assets/poisson.jpg")}/>
            <MySmallFoodCard title="Steak du Jour"  cost="$32" image={require("../assets/steak.jpg")}/>
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

export default RestaurantHubert;