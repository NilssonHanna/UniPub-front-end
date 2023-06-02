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
  //import NationDetails from "../src/components/NationDetails";
  import useGetDetails from "../src/hooks/useGetDetails";
  
  export default function NationSettingScreen({ navigation, route }) {
    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
      MontserratBold: Montserrat_700Bold,
    });
  
    const { id } = route.params;
  
    const [selectedValue, setSelectedValue] = useState(0);
    const [value, setValue] = useState(0);

    const fieldsToDisplay = ["name"];
    const nation = useGetDetails(id);
  
    const pressHandler = () => {
      navigation.navigate("NationManaging", {
        id: id,
        selectedValue: selectedValue,
      });
    };
  
    const onValueChange = (value) => {
      setSelectedValue(value);
      console.log(value, 'value')
    };
  
   if (!fontsLoaded) {
      return null;
    }
  
    return (
      <View style={styles.container}>

      <Text style={styles.title}>{nation.name}</Text>

       <ChangeDetails
            id={id}
            fields={fieldsToDisplay} 
            selectedValue={selectedValue}
            style={styles.blacktext}
          />

        <Text style={styles.maximumSeats}>
          Set amount of maximum seats for the evening:
        </Text>
        <View style={styles.numberpicker}>
          <NumberPicker value={value}
      onValueChange={onValueChange} />
          
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
  blacktext: {
    color: 'black',
    fontSize: 2,
    fontFamily: 'MontserratBold', 
    textAlign: 'center',
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
  name: {
    top: 30,

  }
});