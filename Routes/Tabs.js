import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import OverViewScreen from '../screens/OverViewScreen';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();



const Tabs=() => {

  const insets = useSafeAreaInsets();


  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });  

  if (!fontsLoaded) {
    return null;
    }

    return(
      <SafeAreaProvider>
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
                      fontFamily: 'Montserrat',
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
                      fontFamily: 'Montserrat',
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
                      fontFamily: 'Montserrat',
                      fontSize: 12,
                      letterSpacing: 2,
                    },
                  }}
               
            />
            

        </Tab.Navigator>
        </SafeAreaProvider>
    );
}

export default Tabs;
