import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import theme from "../Styles/GlobalStyles";
import { LoginButtons } from "../shared/Buttons";
import useGetDetails from "../src/hooks/useGetDetails";
import * as ImagePicker from "expo-image-picker";

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

  const handleMenu = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("Media library permission status:", status);

      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [7, 3],
        quality: 1,
      });

      console.log("Image picker result:", result);

      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;
        console.log("Selected image:", selectedImage);

        const formData = new FormData();
        formData.append("nationMenu", {
          uri: selectedImage,
          name: "image.jpg",
          type: "image/jpeg",
          mimeType: "multipart/form-data",
        });

        console.log("Form data:", formData);
        axios
          .post(
            `https://nationapp-backend.onrender.com/nations/menu/${id}`,
            formData
          )
          .then((response) => {
            console.log("POST request response:", response.data);
          })
          .catch((error) => {
            console.log("POST request error:", error);
          });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleDescription = () => {
    axios
      .patch(`https://nationapp-backend.onrender.com/nations/${id}`, {
        description,
      })
      .then((response) => {})
      .catch((error) => {});
  };

  const handleHours = () => {
    axios
      .patch(`https://nationapp-backend.onrender.com/nations/${id}`, {
        openingHours,
      })
      .then((response) => {})
      .catch((error) => {});
  };

  const handleDescriptionKeyPress = (event) => {
    if (event.nativeEvent.key === "Enter" && !event.nativeEvent.shiftKey) {
      event.preventDefault();
      handleDescription();
    }
  };

  const handleHoursKeyPress = (event) => {
    if (event.nativeEvent.key === "Enter" && !event.nativeEvent.shiftKey) {
      event.preventDefault();
      handleHours();
    }
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>{nation.name}</Text>

      <Image
        source={{ uri: nation.image }}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.separator} />
          <View style={styles.row}>
            <TextInput
              style={styles.value} // Modified style
              multiline={true}
              numberOfLines={4}
              value={description}
              onChangeText={(text) => setDescription(text)}
              placeholder="Enter new description.."
              placeholderTextColor="#a9a9a9"
              onKeyPress={handleDescriptionKeyPress}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleDescription}
            >
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separator} />

          <View style={styles.row}>
            <TextInput
              style={styles.value} // Modified style
              multiline={true}
              numberOfLines={4}
              value={openingHours}
              onChangeText={(text) => setOpeningHours(text)}
              placeholder="Enter new opening hours.."
              placeholderTextColor="#a9a9a9"
              onKeyPress={handleHoursKeyPress}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleHours}>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={handleMenu}>
        <Text style={styles.uploadText}>Upload Menu</Text>
      </TouchableOpacity>

      <View style={styles.logOut}>
        <LoginButtons text="Log out" onPress={pressHandlerLogin} />
      </View>

      <View />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: "100%", // or specify a fixed height like 500
    backgroundColor: theme.backgroundColor,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: "row",
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

  row: {
    flexDirection: "row",
    justifyContent: "space-between", // Change the alignment of the elements
    alignItems: "center", // Center the elements vertically
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
    flex: 1, // Change the flex value to make both fields equally big
    height: 70, // Set a fixed height to match the desired vertical size
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 10,
  },

  addButton: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  addText: {
    color: "black",
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
  },

  uploadButton: {
    marginTop: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },

  uploadText: {
    color: "black",
    fontSize: 12,
    letterSpacing: 2,
    textAlign: "center",
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
    top: 60,
    marginBottom: 100,
  },
});