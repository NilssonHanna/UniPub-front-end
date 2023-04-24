import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NationManagingScreen from '../screens/NationManagingScreen';
import NationSettingScreen from '../screens/NationSettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const TabsNations=() => {

    return(
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: { position: 'absolute'},
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: 'gray',
                tabBarInactiveBackgroundColor: 'white',
          }}
            >

{/* <Tab.Screen 
                name="Login" 
                component={LoginScreen} 
                options={{ 
                    tabBarStyle: { display: 'none'},
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={'black'} size={30} />
                    ),  
                }}
                    
                /> */}

    <Tab.Screen 
                name="NationSetting" 
                component={NationSettingScreen} 
                options={{
                    tabBarLabel: 'SETTINGS',
                    tabBarStyle: { display: 'none'},
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="counter" color={'black'} size={30} />
                    ),
                    
                  }}
               
            />
            
            <Tab.Screen 
                name="NationManaging" 
                component={NationManagingScreen} 
                options={{ 
                
                    tabBarLabel: 'MANAGE',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="plus-minus-box" color={'black'} size={30} />
                    ),  
                }}
                    
                />

            
            
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={'black'} size={30} />
                    ),
                  }}
            />
        
        </Tab.Navigator>
    );
}

export default TabsNations;
