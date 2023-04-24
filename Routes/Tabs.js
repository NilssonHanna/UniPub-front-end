import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import OverViewScreen from '../screens/OverViewScreen';

const Tab = createBottomTabNavigator();

const Tabs=() => {

    return(
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: { position: 'absolute'},
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: 'black',
                tabBarInactiveBackgroundColor: 'white',
          }}
            >
            
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                    tabBarStyle: { display: 'none'},
                    tabBarLabel: 'HOME',
                    tabBarIcon: ({ color, size, focused}) => (
                      <MaterialCommunityIcons 
                      name="home" 
                      color={focused ? 'white' : 'black'}  
                      size={30} />
                    ),  
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 13,
                      letterSpacing: 2,
                    },
                }}
                    
                />

            <Tab.Screen 
                name="Map" 
                component={MapScreen} 
                options={{
                    tabBarLabel: 'MAP',
                    tabBarIcon: ({ color, size, focused }) => (
                      <MaterialCommunityIcons 
                      name="map-marker-radius" 
                      color={focused ? 'white' : 'black'}  
                      size={30} />
                    ),
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 13,
                      letterSpacing: 2,
                    },
                  }}
               
            />
            
            <Tab.Screen 
                name="OverView" 
                component={OverViewScreen}
                options={{
                    tabBarLabel: 'NATIONS',
                    tabBarIcon: ({ color, size, focused }) => (
                      <MaterialCommunityIcons 
                      name="view-list" 
                      color={focused ? 'white' : 'black'}  
                      size={30} />
                    ),
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 13,
                      letterSpacing: 2,
                    },
                  }}
            />
        
        </Tab.Navigator>
    );
}

export default Tabs;
