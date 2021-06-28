import React from 'react';


import {NavigationContainer} from '@react-navigation/native'
import MyAuthNavigator from './app/navigation/MyAuthNavigator';




export default function App() {
  return (
  <NavigationContainer>
    <MyAuthNavigator/>
  </NavigationContainer>
  );
}
