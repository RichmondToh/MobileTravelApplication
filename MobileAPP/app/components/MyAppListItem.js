import React from 'react';

import {View ,StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import MyAppColours from '../config/MyAppColours';

import Swipeable from 'react-native-gesture-handler/Swipeable';



function MyAppListItem({image, title, subtitle, IconComponent, onPress, onSwipeLeft}) {
    return (
        
        <Swipeable renderRightActions={onSwipeLeft}>
        <TouchableHighlight onPress={onPress} underlayColor={MyAppColours.Grey}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image}/>}

            <View style={styles.textcontainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle &&<Text style={styles.subtitle}>{subtitle}</Text>}

            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding:10,
    },
    textcontainer:{
        flexDirection: "column",
    },
    title:{
        marginTop: 10,
        marginLeft: 20,
        fontWeight:'bold',
        fontSize:20,
        marginVertical: 5,
    },

    subtitle:{
        fontSize:15,
        marginLeft: 20,
    },

    image:{
        height:75,
        width:75,
        borderRadius: 37,
        marginRight: 20,
        marginLeft: 20,
    }
    
})

export default MyAppListItem;