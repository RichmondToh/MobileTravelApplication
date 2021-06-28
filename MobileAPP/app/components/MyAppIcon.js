import React from 'react';

import { View,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function MyAppIcon({name, size=30, iconColor, backgroundColor}) {
    return (
        <View style={{width: size, height: size, backgroundColor, borderRadius: size/2, alignItems:"center", justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} size={size*1} color={iconColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    
    
})

export default MyAppIcon;