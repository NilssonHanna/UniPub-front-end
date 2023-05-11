import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import theme from "../Styles/GlobalStyles";
import NationList from "../src/components/NationList";

export default function OverViewScreen({ navigation }) {
  

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });  

  const pressHandler = (id) => {
    navigation.navigate("NationView", { id: id }); // Modified to pass the nationID parameter
  };

  if (!fontsLoaded) {
    return null;
    }

  return (
    <View style={styles.container}>
    <View style={styles.nationContainer}>
      <NationList 
      onPress={pressHandler} 
      onLoad={(data) => setNations(data)}
      
      />
    </View>
    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: theme.backgroundColor,

  },


  nationContainer: {
    flex: 1,
    backgroundcolor: theme.backgroundColor,
    paddingTop: 50,
  },
});