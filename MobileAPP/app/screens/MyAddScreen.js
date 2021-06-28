import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image,View } from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MyAppTextInput from '../components/MyAppTextInput';
import MyAppButton from '../components/MyAppButton';
import MyAppText from '../components/MyAppText';

import DataManager from '../config/DataManager';

import * as ImagePicker from 'expo-image-picker';

import MyAppIcon from '../components/MyAppIcon';




function MyAddScreen({navigation}) {


    const[title, setTitle] = useState("");
    const[subTitle, setSubTitle]=useState("");
    const[image, setImage] = useState(null);

    const[titleError, setTitleError]=useState("");
    const[subTitleError, setSubTitleError]=useState("");
    const[imageError, setImageError]=useState("");

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();


        if (pickerResult.cancelled === true) {
            return;
        }
        setImage({path: pickerResult.uri});
        console.log(pickerResult);
    }

    const doErrorCheck = () => {
        setTitleError( title.length>0 ? "": "Please set a valid Location Title");
        setSubTitleError(subTitle.length>0 ? "": "Please set a valid subtitle");
        setImageError(image? "": "Please pick an image");
        return ((title.length>0) && (subTitle.length>0) && (image)? true: false)
    }//Ensures that the user has filled in all the fields correctly and has left none blank

    const addBook = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const books = commonData.getBooks(user);
        const bookID = books.length+1;
        const newBook = {
            title: title,
            subtitle: subTitle,
            bookid: bookID,
            userid: user,
            image: image.path,
        };
        console.log(newBook);
        commonData.addBook(newBook);
    }//Allows the data inputed by the user to be updated and reflected in the datamanager.

    
    return (
        <MyAppScreen>
            <View style={styles.container}>
            <MyAppTextInput
                icon="map-search-outline"
                placeholder="Location Name"
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
                />
            
            {titleError.length>0 ? <MyAppText style={{margin:5, color:"red", fontSize:16}}>{titleError}</MyAppText>: <></>}

            <MyAppTextInput
                icon="calendar-month"
                placeholder="Planned to go on"
                value={subTitle}
                onChangeText={(inputText) => setSubTitle(inputText)}
                />
            
            {subTitleError.length>0 ? <MyAppText style={{margin:5, color:"red", fontSize:16}}>{subTitleError}</MyAppText>: <></>}


            <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                 <MyAppIcon name="camera" size={80} backgroundColor={"grey"}/>
                 {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
            </TouchableOpacity>

            {imageError.length>0 ? <MyAppText style={{margin:5, color:"red", fontSize:16}}>{imageError}</MyAppText>: <></>}
            <View style={styles.button}>
            <MyAppButton color="Sky" title="Add Location" onPress={() => { 
                        if(doErrorCheck()){//If all the inputs are valid it will add the data the user inputed into the datamanager and it will navigate and show the wishlist has been updated
                           addBook();
                           navigation.navigate("BookScreen");
                        }
                     }}/>
            </View>
         </View>
        </MyAppScreen>
    );
}
const styles = StyleSheet.create({
    imageButton:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
    container:{
        backgroundColor:"grey",
        height:"100%"
    },

    button:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom: 30,
    },
})

export default MyAddScreen;