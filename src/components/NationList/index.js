import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, ScrollView, TouchableOpacity, StyleSheet, Image,  RefreshControl } from "react-native";
import { WhiteButtons } from "../../../shared/Buttons";

const NationList = ({ onPress, guestCount, maxCapacity, onLoad }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [nations, setNations] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNations = () => {
    axios
      .get("https://nationapp-backend.onrender.com/nations/getNations")
      .then((response) => {
        console.log("response", response);
        setNations(response.data);
        onLoad(response.data);
      })
      .catch((error) => {
        console.log("axios error", error);
      })
      .finally(() => {
        setHasLoaded(true);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchNations();
  }, []);

  const handlePress = (id) => {
    onPress(id);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchNations();
  };

  if (!hasLoaded) return null;

  let color = "#00FF00";
  if (index >= 1) {
    color = "#FF0000";
  } else if (index >= 0.5) {
    color = "#FFA500";
  }

  const index = guestCount / maxCapacity;


  return (
    <View>
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["white"]}
            tintColor={"white"}
            style={{ backgroundColor: "#222222", marginVertical: 10 }}
          />
        }
      >
        <View>
          {nations.map((nation) => (
            <TouchableOpacity key={nation.id} onPress={() => handlePress(nation.id)}>
              <View style={styles.row}>
                <Image source={{ uri: nation.image }} resizeMode="contain" style={styles.image} />
                <WhiteButtons
                  text={nation.name}
                  number={nation.guestCount / nation.maxCapacity}
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
    width: 80,
    height: 80,
    marginRight: 30,
    marginBottom: 100,
    left: 15,
  },

});

export default NationList;