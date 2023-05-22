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
                tabBarStyle: { 
                  position: 'absolute',
                  borderTopWidth: 5, // Add a border on top of the tab bar
                  borderTopColor: '#222222',},
                  tabBarActiveTintColor: 'white',
                  tabBarInactiveTintColor: '#a9a9a9',
                  tabBarActiveBackgroundColor: '#222222',
                  tabBarInactiveBackgroundColor: '#222222',
          }}
            >
            
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                    tabBarStyle: { display: 'none'},
                    tabBarLabel: 'HOME',
                    tabBarIcon: ({ color, size , focused}) => (
                      <MaterialCommunityIcons 
                      name="home" 
                      color={focused ? 'white' : '#a9a9a9'}  
                      size={30} 
                      />
                    ),  
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 12,
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
                      color={focused ? 'white' : '#a9a9a9'}  
                      size={30} />
                    ),
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 12,
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
                      color={focused ? 'white' : '#a9a9a9'} 
                      size={30} 
                      />
                    ),
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 12,
                      letterSpacing: 2,
                    },
                  }}
               
            />
            
       


        
        </Tab.Navigator>
    );
}

export default Tabs;
