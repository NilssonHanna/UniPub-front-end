

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MapScreen from '../screens/MapScreen';
import NationManagingScreen from '../screens/NationManagingScreen';
import NationSettingScreen from '../screens/NationSettingScreen';
import NationViewScreen from '../screens/NationViewScreen';
import OverViewScreen from '../screens/OverViewScreen';


const Tab= createBottomTabNavigator();

const Tabs=() => {

    return(
        <Tab.Navigator>

<Tab.Screen name="Home" component={HomeScreen}/>
<Tab.Screen name="OverView" component={OverViewScreen}/>
<Tab.Screen name="NationView" component={NationViewScreen}/>
<Tab.Screen name="Login" component={LoginScreen}/>
<Tab.Screen name="NationSetting" component={NationSettingScreen}/>
<Tab.Screen name="NationManaging" component={NationManagingScreen}/>

        </Tab.Navigator>
    );
}

export default Tabs;
