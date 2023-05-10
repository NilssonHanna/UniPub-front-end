/* import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import { OrangeButtons } from '../shared/Buttons';
import NumberPicker from '../shared/NumberPicker';
import NationDetails from "../src/components/NationDetails";

export default function NationSettingScreen({ navigation, route }) {

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const { id } = route.params;
  console.log('id nationSettingscreen', id)

  const [selectedValue, setSelectedValue] = useState(0);
  //const fieldsToDisplay = ["name", "description", "guestCount"];

  const pressHandler = () => {
    navigation.navigate("NationManaging", {

      selectedValue,
      maxSeats: selectedValue,
    });
  };

   const onValueChange = (value) => {
    setSelectedValue(value)  }; 

  

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
       <NationDetails id={id} fields={["name"]} style={styles.title}/>

      <Text style={styles.maximumSeats}>Set amount of maximum seats for the evening:</Text>
      <View style={styles.numberpicker}>
        <NumberPicker onValueChange={onValueChange} />
      </View>
      <Text style={styles.selectedValue}>
        Selected seats available: {selectedValue}
      </Text>


    <View style = {styles.submit}>
      <OrangeButtons text="Submit seats" onPress={pressHandler} />
      </View>
    </View>


  )}; */

  import React, { useState } from "react";
  import { StyleSheet, View, Text, Image } from "react-native";
  import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_700Bold,
  } from "@expo-google-fonts/montserrat";
  import theme from "../Styles/GlobalStyles";
  import { OrangeButtons } from "../shared/Buttons";
  import NumberPicker from "../shared/NumberPicker";
  import ChangeDetails from "../src/components/ChangeDetails";
  
  export default function NationSettingScreen({ navigation, route }) {
    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
      MontserratBold: Montserrat_700Bold,
    });
  
    const { id } = route.params;
  
    const [selectedValue, setSelectedValue] = useState(0);
    const fieldsToDisplay = ["name"];
  
    const pressHandler = () => {
      navigation.navigate("NationManaging", {
        id: id,
        selectedValue: selectedValue,
      });
    };
  
    const onValueChange = (value) => {
      setSelectedValue(value);
    };
  
    /* if (!fontsLoaded) {
      return null;
    }*/
  
    return (
      <View style={styles.container}>
        <Text style={styles.maximumSeats}>
          Set amount of maximum seats for the evening:
        </Text>
        <View style={styles.numberpicker}>
          <NumberPicker onValueChange={onValueChange} />
          <ChangeDetails
            id={id}
            fields={fieldsToDisplay}
            selectedValue={selectedValue}
          />
        </View>
        <Text style={styles.selectedValue}>
          Selected seats available: {selectedValue}
        </Text>
  
        <View style={styles.submit}>
          <OrangeButtons text="Submit seats" onPress={pressHandler} />
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'MontserratBold', 
    textAlign: 'center',
    top: 50,
    letterSpacing: 2,
    padding: 10,
  },

  numberpicker:{
    height: '30%', // for example
    width: '50%', // for example
    alignSelf: 'center',
    top: 160,
  },

  selectedValue: {
    fontSize: 18,
    fontFamily: 'Montserrat', 
    letterSpacing: 1,
    textAlign: 'center',
    top: 200,
    color: 'white',
  },

  maximumSeats: {
    fontSize: 18,
    fontFamily: 'Montserrat', 
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    top:  80,
    padding: 10
    
  },

  submit: {
    top:  230,
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '70%',
  },
});