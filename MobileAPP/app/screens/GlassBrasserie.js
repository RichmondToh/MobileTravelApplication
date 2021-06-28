import React from 'react';
import {StyleSheet,ScrollView} from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MyCardComponents from '../components/MyCardComponents';
import MySmallFoodCard from '../components/MySmallFoodCard';
import MyAppText from '../components/MyAppText';
import MyFoodCard from '../components/MyFoodCard';
function GlassBrasserie(props) {
    return (
        <MyAppScreen style={styles.container}>
              <MyFoodCard title="Glass Brasserie" 
                subtitle="Combining unique culinary creations, exquisite décor and
                          superior service, glass brasserie provides a truly definitive
                          dining experience in the heart of Sydney."
                          address="level 2/488 George St, Sydney"
                          openning="7:00am - 10:00am"
                          image={require("../assets/GlassBrasserie.jpg")}/>
            <MyAppText style={styles.title}>Menu</MyAppText>   

            <ScrollView>
            <MySmallFoodCard title="Curry Fish"  cost="$30" image={require("../assets/Curryfish.jpg")}/>
            <MySmallFoodCard title="Garlic Prawn"  cost="$35" image={require("../assets/Garlicprawn.jpg")}/>
            <MySmallFoodCard title="Kingfish"  cost="$38" image={require("../assets/Kingfish.jpg")}/>
            <MySmallFoodCard title="Lamb"  cost="$40" image={require("../assets/lamb.jpg")}/>
            <MySmallFoodCard title="Meringue" cost="$22" image={require("../assets/meringue.jpg")}/>
            <MySmallFoodCard title="Caviar Oysters " cost="$49" image={require("../assets/caviar.jpg")}/>
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

export default GlassBrasserie;