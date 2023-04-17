import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StudentTabs from './Routes/Tabs';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import NationViewScreen from './screens/NationManagingScreen';
import OverViewScreen from './screens/OverViewScreen';
import MainStack from './Routes/Stacks';


function App() {
  return (
   
      <MainStack/>
      
    
  );
}

export default App;



/* import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Routes/TabsNations';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App; */




/* import React from 'react';
import MainStack from './Routes/Stacks';
import MainTabNavigator from './Routes/MainTabNavigator';

const App = ()=>{
  return (
     <MainStack/>
  
  );}

export default App; */