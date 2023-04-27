import React from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
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

  const imageUrl = "https://drive.google.com/uc?id=1e3SSIxYPFS0GLAxLuOCLQ-teU-x7GHsd";


  if (!fontsLoaded) {
    return null;
  }

    
  return ( 
  
  <View style={styles.container}>

<NationDetails id={id} fields={["name"]} style={styles.descriptionText}  />

  <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />

<Text style={styles.change}>Change menu here</Text>

<Text style={styles.change}>Change description here</Text>

<Text style={styles.change}>Change opening Hours here</Text>


<View style ={styles.logOut} >
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
    fontSize:20,
    fontWeight:'bold',
    fontFamily: 'MontserratBold',
    letterSpacing: 2,
    textAlign:'center',
    top: 10,
},

descriptionText:{

    color: 'black',
    textTransform:'uppercase',
    fontSize:22,
    fontWeight:'bold',
    fontFamily: 'MontserratBold',
    letterSpacing: 2,
    textAlign:'center',
    top: -40,
},

logOut: {

  bottom: 50,
  alignSelf: 'center',
  right: 18,
},

change: {
  color: 'black',
    textTransform:'uppercase',
    fontSize:12,
    fontWeight:'bold',
    fontFamily: 'MontserratBold',
    letterSpacing: 2,
    textAlign:'center',
    top: -120,
    paddingVertical: 20
},

image: {
  width: 120,
  height: 120,
  alignSelf: 'center',
  marginTop: 'auto',
  marginBottom: 'auto',
  top: -80,
},

})