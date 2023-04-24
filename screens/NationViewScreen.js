import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import theme from "../Styles/GlobalStyles";
import StartButtons from "../shared/Buttons";
import Bar from "../shared/ProgressBar";
import NationDetails from "../src/components/NationDetails";

export default function NationViewScreen({ navigation, route }) {
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
      <View style={styles.bar}>
<Bar />
      </View>
      <StartButtons text="Menu" onPress={pressHandler} />
      <NationDetails id={id} fields={fieldsToDisplay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  title: {
    color: "black",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    textAlign: "center",
  },

  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginTop: -50,
  },

  availableSeats: {
    fontSize: 25,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    alignItems: "center",
    bottom: 10,
    left: 100,
  },

  openingTimes: {
    fontSize: 20,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontStyle: "italic",
    bottom: 10,
    left: 20,
  },

  adress: {
    fontSize: 20,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontStyle: "italic",
    bottom: 10,
    left: 20,
  },

  bar: {
    left: "22%",
    bottom: 100,
  },

  title: {
    textTransform: "uppercase",
    fontSize: 25,
    fontFamily: "Times New Roman",
    color: "white",
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000070",
    marginTop: 120,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    height: "75%",
  },
});
