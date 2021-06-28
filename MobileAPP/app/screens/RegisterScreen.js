import React from 'react';
import { Text, View, StyleSheet,ImageBackground, TextInput  } from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import MyAppScreen from '../components/MyAppScreen';
import MyAppTextInput from '../components/MyAppTextInput';
import MyAppButton from '../components/MyAppButton';
import MyAppText from '../components/MyAppText';
import DataManager from '../config/DataManager';
import { TouchableOpacity } from 'react-native-gesture-handler';

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        fullname: Yup.string().required().min(1).label("Full Name"),
        password:  Yup.string().required().min(4).max(12).label("Password"),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }

);

function RegisterScreen({navigation,props}){
    
  

    return(
        <MyAppScreen style={styles.background}><ImageBackground 
            source = {require("../assets/Reg1.png")}
            style = {styles.background}>



            <View style={styles.rectangle}>

            <Formik
            initialValues={{email:'', fullname:'', password:'', passwordConfirmation:'',}}
            onSubmit = {(values) => {
                
                console.log(values);
                let commonData = DataManager.getInstance();
                var num = commonData.getSizeUser();
                let user = "user"+(num.toString());
                const userID = commonData.getSizeUser();

                const newUser = {
                            IDuser: userID,
                            userid: user,
                            name: values.fullname,
                            email: values.email,
                            password: values.password,
                            image: require('../assets/accountnorm.png'),
                        };
                        commonData.addUser(newUser);
                        navigation.navigate("Login");
                }
            }
            validationSchema={schema}
            > 

            {({handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
                <>

            <Text style ={styles.smalltext}>TravelMate Register </Text>
            
                <MyAppTextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                icon="email" 
                placeholder="Email Address" 
                onBlur = {()=> setFieldTouched("email")}
                onChangeText= {handleChange("email")}/>

                
                <MyAppTextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                icon="account" 
                placeholder="Full Name" 
                onBlur = {()=> setFieldTouched("fullname")}
                onChangeText= {handleChange("fullname")}/>

                <MyAppTextInput 
                autoCapitalize="none" 
                autoCorrect={false} icon="lock" icon2="eye"
                placeholder="Password" 
                secureTextEntry={true}
                onBlur = {()=> setFieldTouched("password")}
                onChangeText= {handleChange("password")}/>

                <MyAppTextInput 
                autoCapitalize="none" 
                autoCorrect={false} icon="lock" icon2="eye"
                placeholder="Confirm Password" 
                secureTextEntry={true}
                onBlur = {()=> setFieldTouched("passwordConfirmation")}
                onChangeText= {handleChange("passwordConfirmation")}/>
                

                
                {touched.email && <MyAppText style={{color:"red",fontSize:15, textAlign: 'center'}}>{errors.email}</MyAppText>}
                {touched.fullname && <MyAppText style={{color:"red",fontSize:15, textAlign: 'center'}}>{errors.fullname}</MyAppText>}
                {touched.password && <MyAppText style={{color:"red",fontSize:15, textAlign: 'center'}}>{errors.password}</MyAppText>}
                {touched.passwordConfirmation && <MyAppText style={{color:"red",fontSize:15, textAlign: 'center'}}>{errors.passwordConfirmation}</MyAppText>}
                
                
           

                <View style={styles.buttonContainer}>
                    <MyAppButton title="Sign up" color="Sky" onPress={handleSubmit}/>
                </View>

                
                
                </>
                )}    
            </Formik>

            <View style={styles.account}>
                    <Text style={styles.text1}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.text2}> Login</Text>
                    </TouchableOpacity>

                </View>

            </View>

            </ImageBackground>
        </MyAppScreen>
    );
}

const styles = StyleSheet.create({
    account:{
        marginTop:480,
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
        height: 530, 
        width: 300, 
        marginTop: '10%',
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
          textAlign: 'center',
          color: '#00B9FF',
        
      },
       buttonContainer:{
        marginTop: "120%",
        marginLeft: "20%",
        flexDirection: 'row',
        position: "absolute",
        borderRadius: 20, 
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
  

    },
})

export default RegisterScreen; 