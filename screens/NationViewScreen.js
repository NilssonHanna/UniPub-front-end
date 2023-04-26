import React, { useState } from "react";
import {StyleSheet,View,Text, Image, ImageBackground, ScrollView} from 'react-native';
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
//const fieldsToDisplay = ["name", "description", "guestCount"];
const guestCount = "guestCount"

  const pressHandler = () => {
    navigation.navigate("Menu", {id});
  };

  const image = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG",
  };

  if (!fontsLoaded) {
    return null;
    }

  return (
    <ScrollView style={styles.scrollContainer}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    
          <NationDetails id={id} fields={["name"]} style={styles.title}/>
  
      
      </ImageBackground>

      <Text style={styles.availableSeats}>Available Seats: </Text>

      <View>
          <NationDetails id={id} fields={["description"]} style={styles.descriptionText}  />
          </View>
        
      <View style = {styles.menu}>
       <StartButtons text="Menu" onPress={pressHandler} />
       </View>

       <View>
       <Text style={styles.header}> Opening Hours: </Text>
          <NationDetails id={id} fields={["openingHours"]} style={styles.openingTimes}  />
          </View>

      <View>
      <Text style={styles.header} > Address: </Text>
          <NationDetails id={id} fields={["address"]} style={styles.adress} />
          </View>
  
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
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
  top: 20,
  textTransform: 'uppercase',
  color: 'black',
},

openingTimes: {
  fontSize: 14,
  fontFamily: 'Montserrat',
  letterSpacing: 1, 
  fontStyle: 'italic',
  color: 'black',
  paddingRight: 15,
  paddingVertical: 5,
  top: 60,

},

adress: {
  fontSize: 14,
  fontFamily: 'Montserrat',
  letterSpacing: 1, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: 'black',
  paddingRight: 15,
  paddingVertical: 5,
  top: 60,
},

descriptionText: {
  fontSize: 15,
  fontFamily: 'Montserrat',
  textTransform:'uppercase',
  letterSpacing: 2, 
  letterSpacing: 1,
  fontStyle: 'italic',
  color: 'black',
  paddingRight: 15,
  paddingVertical: 5,
  top: 60,
  textAlign: 'center'
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
  top: 300,
},

header: {
  fontSize: 16,
  fontFamily: 'MontserratBold',
  letterSpacing: 1, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: 'black',
  paddingVertical: 5,
  top: 60,
},

menu: {
  top: 80,
  marginHorizontal: 80
}
})