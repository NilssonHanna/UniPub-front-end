import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NationManagingScreen from '../screens/NationManagingScreen';
import NationSettingScreen from '../screens/NationSettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabsNations=({route}) => {

    const { id } = route.params;
    //console.log('id i tabsnations' ,route );
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
                initialParams={{ id }}
                options={{
                    tabBarLabel: 'SETTINGS',
                    tabBarStyle: { display: 'none'},
                    tabBarIcon: ({ color, size, focused }) => (
                      <MaterialCommunityIcons 
                      name="counter" 
                      color={focused ? 'white' : '#a9a9a9'}  
                      size={25} />
                    ),
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 12,
                      letterSpacing: 2,
                    },
                    
                  }}
               
            /> 
            
            <Tab.Screen 
                name="NationManaging" 
                component={NationManagingScreen} 
                initialParams={{ id }}
                options={{ 
                
                    tabBarLabel: 'MANAGE',
                    tabBarIcon: ({ color, size, focused }) => (
                      <MaterialCommunityIcons 
                      name="plus-minus-box" 
                      color={focused ? 'white' : '#a9a9a9'}  
                      size={25} />
                    ),  
                    tabBarLabelStyle: {
                      fontFamily: 'Times New Roman',
                      fontSize: 12,
                      letterSpacing: 2,
                    },
                }}
                    
                />
            
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                initialParams={{ id }}
                options={{
                    tabBarLabel: 'PROFILE',
                    tabBarIcon: ({ color, size, focused }) => (
                      <MaterialCommunityIcons 
                      name="account" 
                      color={focused ? 'white' : '#a9a9a9'}   
                      size={25} />
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

export default TabsNations;