import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import theme from "../Styles/GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { MenuButton, ExitButton } from "../shared/Buttons";
import NationDetails from "../src/components/NationDetails";
import useGetDetails from "../src/hooks/useGetDetails";

export default function NationViewScreen({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const pressHandler = () => {
    navigation.navigate("Menu", { id });
  };

  const pressHandlerOverview = () => {
    navigation.navigate("OverView");
  };

  const { id } = route.params;
  const nation = useGetDetails(id);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.bottomSpace} />
      <View style={styles.exit}>
        <ExitButton text="x" onPress={pressHandlerOverview} />
      </View>

      <ImageBackground
        source={{ uri: nation.header }}
        resizeMode="cover"
        style={styles.image}
      >
        <NationDetails id={id} fields={["name"]} style={styles.title} />
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.row}>
            <NationDetails
              id={id}
              fields={["description"]}
              style={styles.label}
            />
          </View>

          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.seats}>
              Available seats:{" "}
              {nation.maxCapacity - nation.guestCount < 0
                ? 0
                : nation.maxCapacity - nation.guestCount}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.menu}>
        <MenuButton text="Menu" onPress={pressHandler} />
      </View>

      <View style={styles.row}>
        <Icon name="clock-o" size={18} color="white" style={styles.icon} />
        <Text style={styles.header}>Opening Hours:</Text>
      </View>
      <View style={styles.sectionContent}>
        <NationDetails
          id={id}
          fields={["openingHours"]}
          style={styles.openingTimes}
        />
      </View>

      <View style={styles.row}>
        <Icon name="map-marker" size={18} color="white" style={styles.icon} />
        <Text style={styles.header}>Adress:</Text>
      </View>
      <View style={styles.sectionContent}>
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

  contentContainer: {
    paddingBottom: 150,
  },

  bottomSpace: {
    height: 50,
  },

  exit: {
    top: 65,
    left: 35,
    zIndex: 1,
  },

  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginTop: -50,
  },

  openingTimes: {
    fontSize: 12,
    fontFamily: "Montserrat",
    letterSpacing: 1,
    fontStyle: "italic",
    color: "white",
    top: 80,
    paddingBottom: 10,
  },

  adress: {
    fontSize: 12,
    fontFamily: "Montserrat",
    letterSpacing: 1,
    fontStyle: "italic",
    color: "white",
    top: 80,
  },

  descriptionText: {
    fontSize: 14,
    fontFamily: "MontserratBold",
    letterSpacing: 2,
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 5,
  },

  title: {
    textTransform: "uppercase",
    fontSize: 22,
    fontFamily: "MontserratBold",
    letterSpacing: 2,
    color: "white",
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000070",
    top: 220,
  },

  header: {
    fontSize: 14,
    fontFamily: "MontserratBold",
    letterSpacing: 1,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    paddingVertical: 10,
    paddingLeft: 15,
    top: 80,
  },

  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 20,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 30,
  },

  label: {
    color: "white",
    fontSize: 14,
    letterSpacing: 1,
    textAlign: "center", // Updated to center alignment
    flex: 1,
    paddingHorizontal: 10,
    flexWrap: "nowrap",
    fontFamily: "Montserrat",
  },

  seats: {
    color: "white",
    fontSize: 18,
    letterSpacing: 2,
    textAlign: "center", // Updated to center alignment
    flex: 1,
    paddingHorizontal: 10,
    flexWrap: "nowrap",
    fontFamily: "MontserratBold",
  },

  icon: {
    top: 100,
    color: "#658534",
    paddingLeft: 5,
    marginRight: 5,
  },

  sectionContent: {
    marginLeft: 35,
  },

  menu: {
    top: 60,
  },
});
