import React, { useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { Button, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function MapScreen({ navigation }) {
  const [nations, setNations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });  


  useEffect(() => {
    axios.get('https://nationapp-backend.onrender.com/nations/getNations')
      .then(response => {
        setNations(response.data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const markers = nations.map(nation => ({
    name: nation.name,
      coordinate: {
      latitude: nation.latitude,
      longitude: nation.longitude,
    },
    
  }));

  const pressHandler = (nationName) => {
    console.log("vi kommer till presshandler")
    const nation = nations.find(nation => nation.name === nationName);
    if (nation) {
      navigation.navigate('NationView', { id: nation.id });
    } else {
      console.warn(`Nation not found: ${nationName}`);
    }
  }

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
            <Marker key={index} coordinate={marker.coordinate}  
            >
              <Callout>
                <Text style={styles.nation}>{marker.name}</Text>
                <View style={styles.infobutton}>
                <Button color={'blue'}  title='Visit nation' onPress={() => pressHandler(marker.name)} />
                <Ionicons name="arrow-forward-outline" size={15} color='blue' style={styles.arrowIcon} />
                </View>
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
    width: '100%',
    height: '100%',
  },
  nation: {
    color: 'black',
    textTransform:'uppercase',
    fontSize:14,
    fontFamily: 'Montserrat',
    fontWeight:'bold',
    letterSpacing:0.5,
  },

  infobutton: {
    color: 'black',
    textTransform:'uppercase',
    fontSize:8,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    letterSpacing:0.5,
  },

  arrowIcon: {
    bottom: 25,
    marginLeft: '90%',
  },

});
