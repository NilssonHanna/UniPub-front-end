import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import { LoginButtons} from '../shared/Buttons';
import HomeScreen from '../screens/HomeScreen';

export default function ProfileScreen({navigation}) {


    const pressHandlerLogin=() =>{

        navigation.navigate('Login')
        
        }
  
    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

    
  return ( 
  
  <View style={styles.container}>

<Text style={styles.title}>Profile</Text>


<View>
        <LoginButtons text="Log out" onPress={pressHandlerLogin} />
      </View>
  </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    padding:24,
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },

  title: {
    color: '#ea580c',
    textTransform:'uppercase',
    fontSize:30,
    fontWeight:'bold',
    fontFamily: 'Montserrat',
    letterSpacing: 1,
    textAlign:'center',
},
})