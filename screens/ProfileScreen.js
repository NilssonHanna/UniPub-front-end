import React from 'react';
import {StyleSheet,View,Text, Image, ScrollView} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import { LoginButtons} from '../shared/Buttons';
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
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
    <View style={styles.bottomSpace} />

<NationDetails id={id} fields={["name"]} style={styles.title}  />

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


  </ScrollView>
 
   )
}

const styles=StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },


  contentContainer: {
    paddingBottom: 100, 
  },

  bottomSpace: {
    height: 50, 
  },

  title: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'MontserratBold', 
    textAlign: 'center',
    letterSpacing: 2,
    padding: 10,
},


logOut: {

  top: 160,
  alignSelf: 'center',
  width: 200,
  fontFamily: 'Monserrat'
},

change: {
  color: 'white',
    fontSize:12,
    fontWeight:'bold',
    fontFamily: 'MontserratBold',
    letterSpacing: 2,
    textAlign:'center',
    top: 140,
    paddingVertical: 20
},

image: {
  width: 120,
  height: 120,
  alignSelf: 'center',
  marginTop: 'auto',
  marginBottom: 'auto',
  top: 80,
},

})