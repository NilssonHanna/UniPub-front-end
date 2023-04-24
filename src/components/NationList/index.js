import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, ScrollView } from "react-native";
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
            <View key={nation.id}>
              <WhiteButtons
                text={nation.name}
                onPress={() => handlePress(nation.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NationList;

// onClick