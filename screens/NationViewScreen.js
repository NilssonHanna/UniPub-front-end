import React from 'react';
import {StyleSheet,View,Text, Image, ImageBackground} from 'react-native';
import { useFonts, Chewy_400Regular } from '@expo-google-fonts/chewy';
import theme from '../Styles/GlobalStyles';
import StartButtons from '../shared/Buttons';

export default function NationViewScreen({navigation, route}) {

  const [fontsLoaded] = useFonts({
    Chewy_400Regular,
  });

  const maxSeats = route.params?.maxSeats; 

  const pressHandler = () =>{

    navigation.navigate('Menu')
    
    }

    if (!fontsLoaded) {
      return null;
    }

    const image = {uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG'}
  
  return ( 
  
    <View style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Stockholms nation</Text>
      
      </ImageBackground>
      
        <Text style={styles.availableSeats}>Available Seats: {maxSeats}</Text>
        
       <StartButtons text="Menu" onPress={pressHandler} />

       <Text style={styles.openingTimes}>Opening times:</Text>
       <Text style={styles.adress}>Adress:</Text>
      </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },

imageContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  
},
image: {
  width: '100%',
  height: undefined,
  aspectRatio: 1,
  resizeMode: 'contain',
  marginTop: -50,
  
},

availableSeats: {
  fontSize: 22,
  fontFamily: 'Chewy_400Regular',
  letterSpacing: 2, 
  fontWeight: 'bold',
  textAlign:'center',
  bottom: 60,
  textTransform: 'uppercase',
  color: '#ea580c',
},

openingTimes: {
  fontSize: 20,
  fontFamily: 'Chewy_400Regular',
  letterSpacing: 2, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '#ea580c',
  bottom: 10,
  left: 20,
},

adress: {
  fontSize: 20,
  fontFamily: 'Chewy_400Regular',
  letterSpacing: 2, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '#ea580c',
  bottom: 10,
  left: 20,
},

bar: {
  bottom: 100,
  marginHorizontal: 20,
},

title: {
  textTransform:'uppercase',
  fontSize:25,
  fontFamily: 'Chewy_400Regular',
  letterSpacing: 5, 
  color: 'white',
  lineHeight: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#00000070',
  marginTop: 150,
},

image: {
  flex: 1,
  justifyContent: 'center',
  height: '75%'
},
})