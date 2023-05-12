import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { FontAwesome } from '@expo/vector-icons';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import theme from "../Styles/GlobalStyles";
import { LoginButtons } from "../shared/Buttons";
import useGetDetails from "../src/hooks/useGetDetails";

export default function ProfileScreen({ navigation, route }) {
  const { id } = route.params;
  const pressHandlerLogin = () => {
    navigation.navigate("Login");
  };

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const [description, setDescription] = useState("");
  const [openingHours, setOpeningHours] = useState("");

  const nation = useGetDetails(id);

  if (!fontsLoaded) {
    return null;
  }

  const handleDescription = () => {
    axios
      .patch(`https://nationapp-backend.onrender.com/nations/${id}`, {
        changeDescription: description,
      })
      .then((response) => {})
      .catch((error) => {});
  };

  const handleHours = () => {
    axios
      .patch(`https://nationapp-backend.onrender.com/nations/${id}`, {
        ChangeHours: openingHours,
      })
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>{nation.name}</Text>

      <Image source={{ uri: nation.image }} resizeMode="contain" style={styles.logo} />

      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>Write new description:</Text>
            <TextInput
              style={styles.value}
              multiline={true}
              numberOfLines={4}
              value={description}
              onChangeText={(text) => setDescription(text)}
              placeholder= "Enter new description"
              placeholderTextColor={'#a9a9a9'}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleDescription}>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>Write new opening hours:</Text>
            <TextInput
              style={styles.value}
              multiline={true}
              numberOfLines={4}
              value={openingHours}
              onChangeText={(text) => setOpeningHours(text)}
              placeholder= "Enter new opening hours"
              placeholderTextColor={'#a9a9a9'}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleHours}>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>
          
        </View>
    
      </View>

      <FontAwesome name="plus" size={30} color="white" style={styles.plusIcon} />


      <View style={styles.logOut}>
        <LoginButtons text="Log out" onPress={pressHandlerLogin} />
      </View>

      <View />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scrollContainer: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  contentContainer: {
    paddingBottom: 200,
  },
  container: {
    //flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 0,
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

  logOut: {
    top: 130,
    alignSelf: "center",
    width: 200,
    fontFamily: "Montserrat",
  },

  change: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    letterSpacing: 2,
    textAlign: "center",
    top: 140,
    paddingVertical: 20,
  },

  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
    top: 80,
  },

  leftColumn: {
    flex: 1,
    paddingRight: 0,
  },
  rightColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "left",
    flex: 1,
    paddingRight: 20,
  },
  value: {
    color: "white",
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "left",
    flex: 2,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 30,
  },

  addButton: {
    paddingLeft: 20,
  },
  addText: {
    color: "white",
  },

  plusIcon: {
    left: 175,
    top: 50,
  },

  logo: {
    width: 100, 
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    top: 60,
    marginBottom: 100,
  }
});