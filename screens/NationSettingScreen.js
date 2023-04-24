import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import theme from "../Styles/GlobalStyles";
import { BlueButtons } from "../shared/Buttons";
import NumberPicker from "../shared/NumberPicker";
import NationDetails from "../src/components/NationDetails";

export default function NationSettingScreen({ navigation, route }) {
  const { id } = route.params;
  const [selectedValue, setSelectedValue] = useState(false);
  const fieldsToDisplay = ["name", "description", "guestCount"];

  const pressHandler = () => {
    navigation.navigate("NationManaging", {
      selectedValue,
      maxSeats: selectedValue,
    });
  };

  const onValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <NationDetails id={id} fields={fieldsToDisplay} />

      <Text style={styles.maximumSeats}>Set amount of maximum seats:</Text>
      <View style={styles.numberpicker}>
        <NumberPicker onValueChange={onValueChange} />
      </View>
      <Text style={styles.selectedValue}>
        Selected seats available: {selectedValue}
      </Text>

      <BlueButtons
        text="Start calculating amount of seats"
        onPress={pressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: theme.backgroundColor,
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  title: {
    color: "black",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
    textAlign: "center",
    marginBottom: 25,
  },
  numberpicker: {
    height: "30%",
    width: "50%",
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 90,
  },
  selectedValue: {
    fontSize: 20,
    fontFamily: "Times New Roman",
    textAlign: "center",
    marginBottom: 20,
  },

  maximumSeats: {
    fontSize: 20,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
