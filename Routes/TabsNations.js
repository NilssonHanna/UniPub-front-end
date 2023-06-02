import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import NationManagingScreen from '../screens/NationManagingScreen';
import NationSettingScreen from '../screens/NationSettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();



const TabsNations=({route}) => {

  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });  

  if (!fontsLoaded) {
    return null;
    }

    const { id } = route.params;

    return(
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: { 
                  borderTopWidth: 5,
                  borderTopColor: '#222222',
                  paddingBottom: insets.bottom,
                  backgroundColor: '#222222',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
    
                
              },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#a9a9a9',
                tabBarActiveBackgroundColor: '#222222',
                tabBarInactiveBackgroundColor: '#222222',
          }}
            >



     <Tab.Screen 
                name="NationSetting" 
                component={NationSettingScreen} 
                initialParams={{ id }}
                options={{
                    tabBarLabel: 'CAPACITY',
                    tabBarStyle: { display: 'none'},
                    tabBarIcon: ({ color, size, focused }) => (
                      <MaterialCommunityIcons 
                      name="counter" 
                      color={focused ? 'white' : '#a9a9a9'}  
                      size={25} />
                    ),
                    tabBarLabelStyle: {
                      fontFamily: 'Montserrat',
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
                
                    tabBarLabel: 'CLICKER',
                    tabBarIcon: ({ color, size, focused }) => (
                      <MaterialCommunityIcons 
                      name="plus-minus-box" 
                      color={focused ? 'white' : '#a9a9a9'}  
                      size={25} />
                    ),  
                    tabBarLabelStyle: {
                      fontFamily: 'Montserrat',
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
                      fontFamily: 'Montserrat',
                      fontSize: 12,
                      letterSpacing: 2,
                    },
                  }}
            />

        
        </Tab.Navigator>
    );
}

export default TabsNations;
