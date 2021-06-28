import React from 'react';
import {StyleSheet,ScrollView, TouchableOpacity } from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MyAppText from '../components/MyAppText';
import MySmallCardComponents from '../components/MySmallCardComponents';

function MyExploreScreen(props) {
    return (
     
        
        <MyAppScreen style={styles.container}>  


        <ScrollView>
        <MyAppText style={styles.text}>Popular Destinations</MyAppText>
        <ScrollView horizontal={true} // Displays all the Popular Destination including the ratings. 
        showsHorizontalScrollIndicator={false} >
        <TouchableOpacity>
                <MySmallCardComponents title="Opera House" rate={4.7} subtitle="Rating 4.7/5" image={require("../assets/OperaHouse.jpg")}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
                <MySmallCardComponents title="Harbor Bridge" rate={4.7} subtitle="Rating 4.7/5" image={require("../assets/HarbourBridge.jpg")}/>
               
        </TouchableOpacity>

        <TouchableOpacity>
                <MySmallCardComponents title="The Three Sisters" rate={4.6} subtitle="Rating 4.6/5" image={require("../assets/ThreeSisters.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Great Barrier Reef" rate={4.7} subtitle="Rating 4.7/5" image={require("../assets/GreatBarrierReef.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Byron Bay" rate={4.5} subtitle="Rating 4.5/5" image={require("../assets/ByronBay.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Blue Mountains" rate={4.5} subtitle="Rating 4.5/5" image={require("../assets/BlueMountains.jpg")}/>
        </TouchableOpacity>
        </ScrollView>

        <MyAppText style={styles.text}>Iconic Beaches</MyAppText>

        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
                <MySmallCardComponents title="Bondi Beach" rate={4.6} subtitle="Rating 4.6/5" image={require("../assets/Bondi.jpg")}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
                <MySmallCardComponents title="Manly Beach" rate={4.6} subtitle="Rating 4.6/5" image={require("../assets/Manly.jpg")}/>
        </TouchableOpacity>

        <TouchableOpacity>
                <MySmallCardComponents title="Cable Beach" rate={4.7} subtitle="Rating 4.7/5" image={require("../assets/Cable.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Rockingham Beach" rate={4.7}subtitle="Rating 4.7/5" image={require("../assets/Rockingham.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Four Mile Beach" rate={4.6} subtitle="Rating 4.6/5" image={require("../assets/FourMile.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Tallow Beach" rate={4.8} subtitle="Rating 4.8/5" image={require("../assets/Tallow.jpg")}/>
        </TouchableOpacity>
        </ScrollView>


        <MyAppText style={styles.text}>Famous Zoos & Parks</MyAppText>

        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
                <MySmallCardComponents title="Taronga Zoo" rate={4.6} subtitle="Rating 4.6/5" image={require("../assets/Taronga.jpg")}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
                <MySmallCardComponents title="Melbourne Zoo" rate={4.4} subtitle="Rating 4.4/5" image={require("../assets/Melbourne.jpg")}/>
        </TouchableOpacity>

        <TouchableOpacity>
                <MySmallCardComponents title="Tasmania Zoo" rate={4.3} subtitle="Rating 4.3/5" image={require("../assets/Tasmania.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Australia Zoo" rate={4.7} subtitle="Rating 4.7/5" image={require("../assets/AustraliaZoo.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Adelaide Zoo" rate={4.5} subtitle="Rating 4.5/5" image={require("../assets/Adeladie.jpg")}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <MySmallCardComponents title="Sydney Zoo" rate={4.3} subtitle="Rating 4.3/5" image={require("../assets/Sydney.jpg")}/>
        </TouchableOpacity>
        </ScrollView>

        </ScrollView>
        </MyAppScreen>


        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ECEFF1",
    },

    text:{
        fontSize:30,
        fontWeight: 'bold',
        color: 'black',
    },
})

export default MyExploreScreen;