import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import NationSettingScreen from '../screens/NationSettingScreen';
import NationManagingScreen from '../screens/NationManagingScreen';
import NationViewScreen from '../screens/NationViewScreen';
import MenuScreen from '../screens/MenuScreen';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />

        <Stack.Screen 
          name="NationSetting" 
          component={NationSettingScreen}
        />
        <Stack.Screen 
          name="NationManaging" 
          component={NationManagingScreen} 
        />
        <Stack.Screen 
          name="NationView" 
          component={NationViewScreen} 
        />
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
                  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;