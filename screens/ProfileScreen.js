import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import { LoginButtons} from '../shared/Buttons';
import HomeScreen from '../screens/HomeScreen';
import NationDetails from '../src/components/NationDetails';

export default function ProfileScreen({navigation,route}) {

    const { id } = route.params;
    console.log('id profileScreen', id)
    const pressHandlerLogin=() =>{

        navigation.navigate('Login')
        
        }
  
    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
      MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

    
  return ( 
  
  <View style={styles.container}>

<Text style={styles.title}>Profile</Text>
<NationDetails id={id} fields={["name"]} style={styles.descriptionText}  />


<View>
        <LoginButtons text="Log out" onPress={pressHandlerLogin} />
      </View>
  </View>
 
   )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
        padding:24,
        paddingTop: 100, // add padding to position title at the top
        paddingHorizontal: 24, // 
      },
  title: {
    color: 'black',
    textTransform:'uppercase',
    fontSize:25,
    fontWeight:'bold',
    fontFamily: 'MontserratBold',
    letterSpacing: 2,
    textAlign:'center',
    top: 30,
},

descriptionText:{

    color: 'black',
    textTransform:'uppercase',
    fontSize:25,
    fontWeight:'bold',
    fontFamily: 'MontserratBold',
    letterSpacing: 2,
    textAlign:'center',
    top: 30,
}

})