import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import theme from "../Styles/GlobalStyles";
import { LoginButtons } from "../shared/Buttons";
import HomeScreen from "../screens/HomeScreen";

export default function ProfileScreen({ navigation }) {
  const pressHandlerLogin = () => {
    navigation.navigate("Login");
  };

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View>
        <LoginButtons text="Log out" onPress={pressHandlerLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },

  title: {
    color: "black",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "MontserratBold",
    letterSpacing: 2,
    textAlign: "center",
    top: 30,
  },
});
