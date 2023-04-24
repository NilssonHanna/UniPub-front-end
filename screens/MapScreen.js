import React, { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import axios from "axios";
import { Button, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function MapScreen({ navigation }) {
  const [nations, setNations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your database API
    axios
      .get("https://nationapp-backend.onrender.com/nations/getNations")
      .then((response) => {
        setNations(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const markers = nations.map((nation) => ({
    name: nation.name,
    coordinate: {
      latitude: nation.latitude,
      longitude: nation.longitude,
    },
  }));

  const pressHandler = (nationName) => {
    const nation = nations.find((nation) => nation.name === nationName);
    if (nation) {
      navigation.navigate("NationView", { id: nation.id });
    } else {
    }
  };

  const navigateToScreen = () => {
    navigation.navigate("OverView");
  };

  return (
    <View style={styles.container}>
      {!isLoading && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 59.859555,
            longitude: 17.632734,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
          }}
        >
          {markers.map((marker, index) => (
            <Marker key={index} coordinate={marker.coordinate}>
              <Callout>
                <Text style={styles.nation}>{marker.name}</Text>
                <Button
                  title="Info"
                  onPress={() => pressHandler(marker.name)}
                />
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  nation: {
    color: "black",
    textTransform: "uppercase",
    fontSize: 14,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
