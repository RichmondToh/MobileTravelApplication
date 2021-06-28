import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MyTabNavigator from './MyTabNavigator';

import ElCaminoCantina from '../screens/ElCaminoCantina';
import GlassBrasserie from '../screens/GlassBrasserie';
import Jagerstube from '../screens/Jagerstube';
import RestaurantHubert from '../screens/RestaurantHubert';
import RockpoolGrilBar from '../screens/RockpoolGrilBar';

import BookScreen from '../screens/BookScreen';
import MyAppColours from '../config/MyAppColours';

const AppStack = createStackNavigator();


const MyAuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
        
        <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'Login', headerStyle: {
        backgroundColor: MyAppColours.StausBar,
          }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },

          }} />
        <AppStack.Screen name="Register" component={RegisterScreen} options={{title: 'Register',headerStyle: {
            backgroundColor: MyAppColours.StausBar,
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          }
          } />
          <AppStack.Screen name="Home" component={MyTabNavigator}
          options={{title: 'Home',headerShown:false,headerStyle: {
            backgroundColor: MyAppColours.StausBar,
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          }}/>






<AppStack.Screen name="ElCaminoCantina" component={ElCaminoCantina} options={{title: 'El Camino Cantina', headerStyle: {
        backgroundColor: MyAppColours.StausBar,
          }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />
          <AppStack.Screen name="GlassBrasserie" component={GlassBrasserie} options={{title: 'Glass Brasserie', headerStyle: {
        backgroundColor: MyAppColours.StausBar,
          }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />
          <AppStack.Screen name="jagerstube" component={Jagerstube} options={{title: 'Jagerstube', headerStyle: {
        backgroundColor: MyAppColours.StausBar,
          }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />
           <AppStack.Screen name="RestaurantHubert" component={RestaurantHubert} options={{title: 'Restaurant Hubert', headerStyle: {
        backgroundColor: MyAppColours.StausBar,
          }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />
          <AppStack.Screen name="RockpoolGrilBar" component={RockpoolGrilBar} options={{title: 'Rockpool Bar & Grill', headerStyle: {
        backgroundColor: MyAppColours.StausBar,
          }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />

         <AppStack.Screen name="BookScreen" component={BookScreen} options={{tabBarVisible: true},{title: 'Book', headerStyle: {
        backgroundColor: MyAppColours.StausBar,
          }, 
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
          },
          }} />


    </AppStack.Navigator>
)

export default MyAuthNavigator;