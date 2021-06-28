import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';


const AppStack = createStackNavigator();

const MyAuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen}
          options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default MyAuthNavigator;