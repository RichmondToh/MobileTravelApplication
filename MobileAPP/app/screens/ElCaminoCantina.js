import React from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MyAppText from '../components/MyAppText';
import MyFoodCard from '../components/MyFoodCard';
import MySmallFoodCard from '../components/MySmallFoodCard';

function ElCaminoCantina(props) {
    return (
        <MyAppScreen style={styles.container}>
            
                <MyFoodCard title="El Camino Cantina" 
                subtitle="Welcome to El Camino Cantina, a die-hard Tex-Mex dining
                          experience that includes a value-packed, flavourful menu,
                          sombrero-filled party vibes, and our legendary margaritas
                          that have a cult following countrywide."
                          address="18 Argyle St, The Rocks NSW"
                          openning="10:30am - 11:00pm"
                          image={require("../assets/ElCaminoCantina.jpg")}/>
            <MyAppText style={styles.title}>Menu</MyAppText>   

            <ScrollView>
            <MySmallFoodCard title="Burrito"  cost="$10" image={require("../assets/Burrito.jpg")}/>
            <MySmallFoodCard title="Chipotle"  cost="$12" image={require("../assets/Chipotle.jpeg")}/>
            <MySmallFoodCard title="Churros"  cost="$13" image={require("../assets/Churros.jpg")}/>
            <MySmallFoodCard title="Nacho"  cost="$10" image={require("../assets/Nacho.jpg")}/>
            <MySmallFoodCard title="Taco" cost="$13" image={require("../assets/Taco.jpg")}/>
            <MySmallFoodCard title="Quesadillas" cost="$11" image={require("../assets/Quesadillas.jpeg")}/>
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

export default ElCaminoCantina;