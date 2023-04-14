import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'; // import getFocusedRouteNameFromRoute
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import OverViewScreen from '../screens/OverViewScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator({ route }) {
  const routeName = getFocusedRouteNameFromRoute(route); // get the name of the focused route

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          display: routeName === 'Home' ? 'none' : 'flex', // hide the tab bar on the HomeScreen
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="OverView" component={OverViewScreen} />
    </Tab.Navigator>
  );
}