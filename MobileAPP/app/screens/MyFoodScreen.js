import React from 'react';
import {StyleSheet,ScrollView,TouchableOpacity } from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MyCardComponents from '../components/MyCardComponents';


function MyFoodScreen({navigation}) {
    return (
        <MyAppScreen style={styles.container}>
            <ScrollView>
            <TouchableOpacity  onPress={() => navigation.navigate("ElCaminoCantina")}>
                <MyCardComponents title="El Camino Cantina" subtitle="$$ • Tex-Mex restaurant" image={require("../assets/ElCaminoCantina.jpg")}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("GlassBrasserie")} >
                <MyCardComponents title="Glass Brasserie" subtitle="$$$ • Modern Australian restaurant" image={require("../assets/GlassBrasserie.jpg")}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("jagerstube")}>
                <MyCardComponents title="Jägerstube" subtitle="$$ • German Beer Hall" image={require("../assets/jagerstube.jpeg")}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("RestaurantHubert")}>
                <MyCardComponents title="Restaurant Hubert" subtitle="$$$ • French restaurant" image={require("../assets/RestaurantHubert.jpg")}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("RockpoolGrilBar")}>
                <MyCardComponents title="Rockpool Bar & Grill" subtitle="$$$ • Bar & grill" image={require("../assets/RockpoolGrilBar.jpg")}/>
            </TouchableOpacity>

            </ScrollView>
        </MyAppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
     backgroundColor:"#ECEFF1",
    },
})

export default MyFoodScreen;