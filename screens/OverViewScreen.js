import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import theme from "../Styles/GlobalStyles";
import NationList from "../src/components/NationList";

export default function OverViewScreen({ navigation }) {
  const pressHandler = (id) => {
    navigation.navigate("NationView", { id: id }); // Modified to pass the nationID parameter
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <NationList onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  nationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
    width: "80%",
    marginLeft: 30,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginLeft: 20,
  },
});