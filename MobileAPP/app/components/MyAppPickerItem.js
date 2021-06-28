import React from 'react';
import{ TouchableOpacity,StyleSheet} from 'react-native';
import MyAppColours from '../config/MyAppColours';

import MyAppIcon from './MyAppIcon';
import MyAppText from './MyAppText';

function MyAppPickerItem({onPress, label, icon, backgroundColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MyAppIcon name={icon} iconColor="white" backgroundColor={backgroundColor}/>
            <MyAppText style={styles.text}>{label}</MyAppText>            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:10,
        width:"33%",
        alignItems:"center",
        flexDirection:"row",
    },
    text:{
        fontSize:10,
        fontWeight: 'bold',
        color: MyAppColours.Skin,

        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir-Roman"
        //If platform os == android, use "Roboto" else use "Avenir-Roman"

        //List of Available Fonts can be found here:
        //https://github.com/react-native-training/react-native-fonts
    }
});

export default MyAppPickerItem;