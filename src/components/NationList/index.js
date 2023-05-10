import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import { WhiteButtons } from "../../../shared/Buttons";

const NationList = ({ onPress }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [nations, setNations] = useState([]);

  useEffect(() => {
    axios
      .get("https://nationapp-backend.onrender.com/nations/getNations")
      .then((response) => {
        console.log("response", response);
        setNations(response.data);
      })
      .catch((error) => {
        console.log("axios error", error);
      })
      .finally(() => setHasLoaded(true));
  }, []);

  if (!hasLoaded) return null;


  const handlePress = (id) => {
    onPress(id);
  };

  return (
    <View>
      <ScrollView>
        <View>
          {nations.map((nation) => (
            <TouchableOpacity key={nation.id} onPress={() => handlePress(nation.id)}>
              <View style={styles.row}>
                <Image source={{ uri: nation.image }} resizeMode="contain" style={styles.image} />
                <WhiteButtons
                  text={nation.name}
                  onPress={() => handlePress(nation.id)}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 30,
    marginBottom: 60,
    left: 15,
  },

});

export default NationList;