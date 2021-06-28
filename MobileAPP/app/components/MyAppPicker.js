import React, {useState} from 'react';
import {View, StyleSheet, Modal,Button, FlatList, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import MyAppColours from '../config/MyAppColours';
import MyAppText from './MyAppText';
import MyAppScreen from './MyAppScreen';
import MyAppPickerItem from './MyAppPickerItem';


function MyAppPicker({data,icon, placeholder,numColumns}){
    const[modalVisible, setModalVisible] = useState(false);
    return(
        <>

        <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
        <View style={styles.container}>

            <MaterialCommunityIcons name={icon} size={30}/>
            <MyAppText style={styles.textinput}> {placeholder} </MyAppText>
            <MaterialCommunityIcons name="chevron-down" size={30}/>
            {/* secureTextEntry={true}/> */}

        </View>
        </TouchableWithoutFeedback>

        <Modal visible={modalVisible} animationType="slide">
        <MyAppScreen>
            <Button title="Close" onPress={()=>setModalVisible(false)}/>
            <FlatList
            numColumns={numColumns}
            data ={data}
            keyExtractor={item => item.value.toString()}
            renderItem ={({item})=> 
            // <MyAppText>{item.label}</MyAppText>}
            <MyAppPickerItem
            onPress={()=> console.log(item.label)}
            label={item.label}
            icon={item.icon}
            backgroundColor={item.backgroundColor}/>
           }
             />
             
        </MyAppScreen>
        </Modal>

        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#f0f0f5",
        flexDirection: 'row',
        borderRadius: 25,
        padding: 5,
        marginVertical: '5%',
        marginLeft: 20,
        marginRight: 20,
        
    },
    textinput:{
        fontSize:20,
        fontWeight: 'bold',
        color: MyAppColours.Black,
        flex:1,
        marginLeft: 10, //Makes a margin gap between image on text

        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir-Roman"
    }

})

export default MyAppPicker;