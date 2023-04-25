import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import { OrangeButtons } from '../shared/Buttons';
import NumberPicker from '../shared/NumberPicker';



export default function NationSettingScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const [selectedValue, setSelectedValue] = useState(0);
  
  
  const [showTip, setShowTip] = useState(false);

  const pressHandler = () => {
 
    navigation.navigate('NationManaging', {
      selectedValue,
      maxSeats: selectedValue
    });
  };

  /* const onValueChange = (value) => {
    setSelectedValue(value);
    
  }; */

  const onValueChange = (value) => {
    setSelectedValue(value);
  };

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stockholms nation</Text>

      <Text style={styles.maximumSeats}>Set amount of maximum seats for the evening:</Text>
      <View style={styles.numberpicker}>
      <NumberPicker onValueChange={onValueChange} />
      </View>
      <Text style={styles.selectedValue}>Selected seats available: {selectedValue}</Text>

    <View style = {styles.submit}>
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
    color: 'black',
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
    fontSize: 20,
    fontFamily: 'Montserrat', 
    letterSpacing: 1,
    textAlign: 'center',
    top: 200,
    color: 'black',
  },
  
  maximumSeats: {
    fontSize: 20,
    fontFamily: 'Montserrat', 
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    top:  80,
    padding: 10
    
  },

  submit: {
    top:  220,
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '70%',
    
   
  },
});
