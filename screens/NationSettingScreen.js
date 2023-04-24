import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts, Chewy_400Regular } from '@expo-google-fonts/chewy';
import theme from '../Styles/GlobalStyles';
import { OrangeButtons } from '../shared/Buttons';
import NumberPicker from '../shared/NumberPicker';



export default function NationSettingScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    Chewy_400Regular,
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
    color: '#ea580c',
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Chewy_400Regular', 
    textAlign: 'center',
    top: 60,
    letterSpacing: 2,
  },
  numberpicker:{
    height: '30%', // for example
    width: '50%', // for example
    alignSelf: 'center',
    top: 180,
  },

  selectedValue: {
    fontSize: 20,
    fontFamily: 'Chewy_400Regular', 
    letterSpacing: 1,
    textAlign: 'center',
    top: 200,
    color: '#ea580c',
  },
  
  maximumSeats: {
    fontSize: 20,
    fontFamily: 'Chewy_400Regular', 
    letterSpacing: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ea580c',
    top:  100,
    
  },

  submit: {
    top:  220,
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '70%',
    
   
  },
});
