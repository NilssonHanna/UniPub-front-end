/* import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import OverViewScreen from '../screens/OverViewScreen';

const Stack = createNativeStackNavigator();
const Tab= createBottomTabNavigator();

function MapScreen2(){
return(
    <Tab.Navigator 
    initialRouteName='Map'
    > */
      {/*   <Tab.Screen
    name='Home'
    component={HomeScreen}/> */}
/* 
    <Tab.Screen
    name='Map'
    component={MapScreen}/>

    <Tab.Screen
    name='OverView'
    component={OverViewScreen}/>



</Tab.Navigator>
)

}

function Auth(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Map' component={MapScreen2} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;

 */

/* import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import OverViewScreen from '../screens/OverViewScreen';
import LoginScreen from '../screens/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './TabsNations'




const Stack= createNativeStackNavigator();
const Tab=createBottomTabNavigator(); 

function Tabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Map" component={MapScreen}/>
      </Tab.Navigator>
    );
  }

function Auth(props){

    return(

     <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name='Tabs' component={TabsNations}/>
            <Stack.Screen name='Map' component={MapScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name="OverView" component={OverViewScreen} />
        
        </Stack.Navigator>
     </NavigationContainer>
    );
}

export default Auth */