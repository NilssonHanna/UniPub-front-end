

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import OverViewScreen from '../screens/OverViewScreen';


const Tab= createBottomTabNavigator();


const StudentTabs=() => {

    
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>

<Tab.Screen name="Home" component={HomeScreen} options={{tabBarStyle: { display: "none" },}} />
<Tab.Screen name="Map" component={MapScreen}  />
<Tab.Screen name="OverView" component={OverViewScreen} />



        </Tab.Navigator>
    );
}

export default StudentTabs;