import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';

import MyAppScreen from '../components/MyAppScreen';
import MyAppColours from '../config/MyAppColours';
import MyAppListItem from '../components/MyAppListItem';
import MyAppIcon from '../components/MyAppIcon';
import MyAppText from '../components/MyAppText';
import DataManager from '../config/DataManager';
function HomeScreen({navigation, route}) {

    const { name, email, image } = DataManager.getInstance().users.find(user => user.id === DataManager.getInstance().userID) //Grabs all the userData and displays the correct one by filtering by userID

    return (
        <MyAppScreen>
            <View style={styles.WelcomeContainer}>
                <Image source={image} style={styles.image}/>
                </View>
                <View style={styles.ProfileContainer}>
                    <MyAppText style={styles.name}>{name} </MyAppText>
                    <MyAppText style={styles.email}>{email} </MyAppText>


                </View>

                <View style={styles.linksContainer}>
                <MyAppListItem title="Logout" IconComponent={<MyAppIcon name="logout" size={75} iconColor={MyAppColours.DarkGrey} backgroundColor={MyAppColours.backgroundColor}  />} onPress={()=> navigation.navigate("Welcome") }/>
                </View>
                

        </MyAppScreen>
    );
}

const styles = StyleSheet.create({
    WelcomeContainer:{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
      },
      name:{
        fontSize:25,
        fontWeight: 'bold',
        color:"black",
        alignItems: 'center',
        justifyContent:"center",
    },
    email:{
        fontSize:20,
        color:"black",
 
    },
    image:{
        height:150,
        width:150,
        borderRadius: 37,
        marginRight: 20,
        marginLeft: 20,
    },


    ProfileContainer:{
        marginTop: 20,
        height: 90,
        backgroundColor: MyAppColours.Grey,
        alignItems: 'center',
        justifyContent:"center",
    },
    linksContainer:{
        marginVertical: 75,
        marginTop: 220,
        height: 150,
        justifyContent:"space-around",
        
    }
})

export default HomeScreen;