import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Bar from "../shared/ProgressBar";
import axios from "axios";
import theme from "../Styles/GlobalStyles";
import useGetDetails from "../src/hooks/useGetDetails";
import NationDetails from "../src/components/NationDetails";

export default function NationManagingScreen({ navigation, route }) {
  const { id, selectedValue } = route.params;

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const [index, setIndex] = useState(0);

  const nation = useGetDetails(id);

  const guestBar = nation.guestCount;
  const maxBar = nation.maxCapacity;

  const indexManaging = nation.guestCount / nation.maxCapacity;
  //console.log(indexManaging, "indexManaging");

  const handlePlusClick = () => {
    axios
      .patch(`https://nationapp-backend.onrender.com/nations/${id}`, {
        guestChange: "add",
      })
      .then((response) => {})
      .catch((error) => {});
  };

  const handleMinusClick = () => {
    axios
      .patch(`https://nationapp-backend.onrender.com/nations/${id}`, {
        guestChange: "remove",
      })
      .then((response) => {})
      .catch((error) => {});
  };


  const progress = maxBar === 0 ? 0 : guestBar / maxBar;
  const validProgress = isNaN(progress) ? 0 : progress;

  /*const pressHandler = () => {
    navigation.navigate("NationManaging");
  };*/

  return (
    <View style={styles.container}>
  
  <NationDetails id={id} fields={["name"]} style={styles.title} />

      <View style={styles.bar}>
        <Bar index={validProgress} />
      </View>

      <View>
        <View style={styles.iconButtonPlus}>
          <Button title="+" onPress={handlePlusClick} />
        </View>

        <View style={styles.iconButtonMinus}>
          <Button title="-" onPress={handleMinusClick} />
        </View>

        <Text style={styles.white}>
          {nation.guestCount}/{nation.maxCapacity} students have entered
        </Text>
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
    textTransform: "uppercase",
    fontSize: 25,
    fontFamily: "MontserratBold",
    letterSpacing: 2,
    color: "white",
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000070",
    marginTop: 50,
  },

  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginTop: -50,
  },

  button: {
    width: 200,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 0,
    justifyContent: "space-around",
    alignSelf: "center",
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",

    fontFamily: "Montserrat",

    fontSize: 25,
  },
  started: {
    backgroundColor: "red",
  },
  paused: {
    backgroundColor: "green",
  },

  iconButtonMinus: {
    justifyContent: "space-around",
    alignSelf: "center",
    width: 100,
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    left: "20%",
    position: "absolute",
    marginTop: 350,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 5,
  },

  iconButtonPlus: {
    justifyContent: "space-around",
    width: 100,
    height: 100,
    backgroundColor: "white",
    marginLeft: 30,
    flexDirection: "row",
    left: "45%",
    position: "absolute",
    marginTop: 350,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 5,
  },
  iconButtonText: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
  },

  index: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Montserrat",
    letterSpacing: 1,
    paddingHorizontal: 15,
    textAlign: "center",
    top: 70,
    textTransform: "uppercase",
  },

  bar: {
    top: 250,
    marginHorizontal: 20,
  },

  white: {
    fontSize: 18,
    fontFamily: 'Montserrat', 
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    top:  250,
    padding: 10

  },
});