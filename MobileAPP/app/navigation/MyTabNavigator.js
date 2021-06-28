import React from 'react';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

const AppTab = AnimatedTabBarNavigator();
//const AppTab = createBottomTabNavigator();



import MyExploreScreen from '../screens/MyExploreScreen';

import BookScreen from '../screens/BookScreen';


import MyFoodScreen from '../screens/MyFoodScreen';
import MyHomeNavigator from './MyHomeNavigator';
import MyPlacesScreen from '../screens/MyPlacesScreen';

import MyAppIcon from '../components/MyAppIcon';
import MyAddScreen from '../screens/MyAddScreen';




const MyTabNavigator = () =>(

    <AppTab.Navigator tabBarOptions={{activeTintColor:"white", activeBackgroundColor:"grey"}}>
        
        <AppTab.Screen name="Explore" component={MyExploreScreen} options={{tabBarIcon: () => <MyAppIcon size={30} name="magnify" backgroundColor="white"/>}}/>
        <AppTab.Screen name="WishList" component={BookScreen} options={{tabBarIcon: () => <MyAppIcon size={30} name="calendar-heart" backgroundColor="white"/>}}/>
        <AppTab.Screen name="Add" component={MyAddScreen} options={{tabBarIcon: () => <MyAppIcon size={30} name="calendar-plus" backgroundColor="white"/>}}/>
        <AppTab.Screen name="Food" component={MyFoodScreen} options={{tabBarIcon: () => <MyAppIcon size={30} name="food" backgroundColor="white"/>}}/>
        <AppTab.Screen name="Place" component={MyPlacesScreen} options={{tabBarIcon: () => <MyAppIcon size={30} name="bed" backgroundColor="white"/>}}/>
        <AppTab.Screen name="Home" component={MyHomeNavigator} options={{tabBarIcon: () => <MyAppIcon size={30} name="home" backgroundColor="white"/>}}/>
        
    </AppTab.Navigator>
)

export default MyTabNavigator;

