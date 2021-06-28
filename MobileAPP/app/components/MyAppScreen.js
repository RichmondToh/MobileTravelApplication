import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Constants from 'expo-constants';

function MyAppScreen({children, style}){
    return(
      <>
      <SafeAreaView style={{backgroundColor: '#424242'}} />
      <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="#424242" />
      {children}
      </SafeAreaView>
      </>

    );
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    backgroundColor: "#424242", //ios
},
paddingView:{
padding:20,
},

})

export default MyAppScreen;