import React, { useState } from "react";
import {StyleSheet,View,Text, Image, ImageBackground} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import StartButtons from '../shared/Buttons';
import NationDetails from "../src/components/NationDetails";

export default function NationViewScreen({ navigation, route }) {
  
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });
  
  const { id } = route.params;
  const [hasLoaded, setHasLoaded] = useState(false);
  const fieldsToDisplay = ["name", "description", "address"];

  const pressHandler = () => {
    navigation.navigate("Menu");
  };

  const image = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG",
  };

  return (

    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Stockholms nation</Text>
      </ImageBackground>

      
        <Text style={styles.availableSeats}>Available Seats:</Text>
        
       <StartButtons text="Menu" onPress={pressHandler} />

       <Text style={styles.openingTimes}>Opening times:</Text>
       <Text style={styles.adress}>Adress:</Text>

      <NationDetails id={id} fields={fieldsToDisplay} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  fontSize: 20,
  fontFamily: 'MontserratBold',
  letterSpacing: 1, 
  fontWeight: 'bold',
  textAlign:'center',
  bottom: 60,
  textTransform: 'uppercase',
  color: 'black',
},

openingTimes: {
  fontSize: 18,
  fontFamily: 'MontserratBold',
  letterSpacing: 1, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: 'black',
  bottom: 10,
  left: 20,
},

adress: {
  fontSize: 18,
  fontFamily: 'MontserratBold',
  letterSpacing: 1, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: 'black',
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
  fontFamily: 'MontserratBold',
  letterSpacing: 2, 
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

