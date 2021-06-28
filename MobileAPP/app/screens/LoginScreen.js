import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput,TouchableOpacity  } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Formik} from 'formik';
import * as Yup from 'yup';

import MyAppScreen from '../components/MyAppScreen';
import MyAppTextInput from '../components/MyAppTextInput';
import MyAppButton from '../components/MyAppButton';
import MyAppText from '../components/MyAppText';
import { NavigationContainer } from '@react-navigation/native';
import DataManager from '../config/DataManager';



const schema = Yup.object().shape( //Ensure that the password and email are inputed by the user. 
    {
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(4).max(12).label("Password"),
    }
);

function LoginScreen({navigation}){

    
    
    const validateUser = ({email, password}) => {
        return(
            DataManager.getInstance().users.filter((user) => user.email === email && user.password === password).length >0
    
            );
    
    };//Checks what the user inputed as their email and password exists in the datamanager
    
    const getUser = ({email}) => {
        return DataManager.getInstance().users.find((user) => user.email === email);
    }

    return(
        <MyAppScreen style={styles.background}>
            <ImageBackground 
            source = {require("../assets/signin3.png")}
            style = {styles.background}>

            <View style={styles.rectangle}>

                <Formik 
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm})=> {
                    if (validateUser(values)){
                    resetForm();
                    DataManager.getInstance().userID = getUser(values).id; 

                    navigation.navigate("Home", { //After the user credentials are verified it navigates to the explore screen. 
                            screen:"Explore",
                    });
            }else{
                resetForm();
                alert("Invalid Login Details")
            }
            
        }}
            validationSchema={schema}
            > 

            {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
                <>
                <Text style ={styles.smalltext}>TravelMate Login</Text>
                
                <MyAppTextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                icon="email" 
                placeholder="Email Address" 
                value={values.email}
                onBlur = {()=> setFieldTouched("email")}
                onChangeText= {handleChange("email")}/>
                

                <MyAppTextInput 
                autoCapitalize="none" 
                autoCorrect={false} icon="lock" 
                placeholder="Password" 
                secureTextEntry={true}
                value={values.password}
                onBlur = {()=> setFieldTouched("password")}
                onChangeText= {handleChange("password")}/>
                {touched.email && <MyAppText style={{color:"red",fontSize:15, textAlign: 'center'}}>{errors.email}</MyAppText>}
                {touched.password && <MyAppText style={{color:"red",fontSize:15, textAlign: 'center'}}>{errors.password}</MyAppText>}

                <View style={styles.buttonContainer}>
                    <MyAppButton title="Sign In" color="Sky" onPress={handleSubmit}/>
                     
                    </View>
                </>
            )}
            </Formik>
            
            <View style={styles.account}>
                    <Text style={styles.text1}>Don't have an account?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>

                    <Text style={styles.text2}> Sign Up</Text>
                    </TouchableOpacity>
                </View>


                </View>
            </ImageBackground>
        </MyAppScreen>
    );
}

const styles = StyleSheet.create({
    account:{
        marginTop:330,
        marginLeft:40,
        flexDirection:'row',
        justifyContent:"center",
        position:'absolute',
    },
    text1:{
        fontSize: 15,
  
    },
    text2:{
        fontSize: 15,
        textDecorationLine:'underline',
        
    },

    rectangle: {
        height: 365,
        width: 300,
        //marginBottom: '30%',
        marginTop: '45%',
        backgroundColor: 'white',
        position: 'relative', 
        alignSelf:'center',
        borderRadius: 15,

        shadowColor: "#000000",
        shadowOpacity: 0.6,
        shadowRadius: 20,

        shadowOffset: {   //Moves the Shaaded Area
            height: 10,
            width: 0,
          }
        
    },
    container:{
        flex:1,
        marginTop: 200,
    },
    background:{
        flex:1,
    },
     smalltext:{        //Text for the qoute
          fontSize: 25,
          marginVertical: 20,
          fontFamily: Platform.OS === 'android' ? "Roboto" : "Arial",
        fontWeight: 'bold',
         // fontStyle: 'italic',
          textAlign: 'center',
          color: '#00B9FF',
        
      },
       buttonContainer:{
        marginTop: "75%",
        marginLeft: "20%",
        flexDirection: 'row',
        position: "absolute",
        borderRadius: 20, 
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
  

    },
})

export default LoginScreen;