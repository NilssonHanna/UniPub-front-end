import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, ScrollView, Image, TouchableOpacity, StyleSheet} from "react-native";
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
                  style={styles.whiteButton}
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
    width: 50,
    height: 40,
    marginRight: 10,
    marginBottom: 40,
  },
});



export default NationList;

// onClick