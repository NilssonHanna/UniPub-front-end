import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MapScreen from '../screens/MapScreen';
import OverViewScreen from '../screens/OverViewScreen';
import NationSettingScreen from '../screens/NationSettingScreen';
import NationManagingScreen from '../screens/NationManagingScreen';
import NationViewScreen from '../screens/NationViewScreen';
import MenuScreen from '../screens/MenuScreen';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} />
         <Stack.Screen 
        name="Map" 
        component={MapScreen} />
         <Stack.Screen 
        name="OverView" 
        component={OverViewScreen} />
         <Stack.Screen 
        name="NationSetting" 
        component={NationSettingScreen} />
         <Stack.Screen 
        name="NationManaging" 
        component={NationManagingScreen} />
         <Stack.Screen 
        name="NationView" 
        component={NationViewScreen} />
        <Stack.Screen 
        name="Menu" 
        component={MenuScreen} />
        <Stack.Screen
        name="TabNavigator"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;