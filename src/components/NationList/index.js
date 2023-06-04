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
        setNations(response.data);
        onLoad(response.data);
      })
      .catch((error) => {
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
                  guestcount={nation.guestCount}
                  maxCapacity={nation.maxCapacity}
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
    top: 50,
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
