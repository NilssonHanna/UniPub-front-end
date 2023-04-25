import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import axios from "axios";
import theme from "../Styles/GlobalStyles";
import { ExitButton, LoginButtons } from "../shared/Buttons";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const pressHandlerHome = () => {
    navigation.navigate("Home");
  };

  const pressHandler = async () => {
    if (!username || !password) {
      Alert.alert("All fields are required");
      return;
    }

    try {
      const response = await axios.get(
        `https://nationapp-backend.onrender.com/nations/getNations`
      );
      const data = response.data;

      const matchingNation = data.find(
        (nation) => nation.username === username && nation.password === password
      );

      if (!matchingNation) {
        Alert.alert("Log in failed. Invalid username or password");
        return;
      }

      const matchingNationID = matchingNation.id;
      const nationIDs = data.map((nation) => nation.id);

      if (nationIDs.includes(matchingNationID)) {
        navigation.navigate("NationSetting", { id: matchingNationID });
      } else {
        Alert.alert("Log in failed. Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Log in failed. Please try again.");
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <ExitButton text="x" onPress={pressHandlerHome} />
      </View>

      <Text style={styles.title}>Welcome</Text>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          autoCompleteType="username"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View>
        <LoginButtons text="Log in" onPress={pressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    padding: 24,
    paddingTop: 100, // add padding to position title at the top
    paddingHorizontal: 24, //
  },

  title: {
    color: "black",
    textTransform: "uppercase",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "MontserratBold",
    letterSpacing: 2,
    textAlign: "center",
  },

  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
    top: 100,
  },
});

export default LoginScreen;
