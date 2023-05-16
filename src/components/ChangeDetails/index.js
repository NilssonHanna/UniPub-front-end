
import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet } from "react-native";

const ChangeDetails = ({ id, fields, selectedValue, style}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [nation, setNation] = useState([]);

  useEffect(() => {
    console.log("useEffect")
    axios
      .patch(`https://nationapp-backend.onrender.com/nations/${id}`, {
        maxCapacity: selectedValue,
      })
      .then((response) => {
        console.log("response", response);
        setNation(response.data);
      })
      .catch((error) => {
        console.log("axios error", error);
      })
      .finally(() => setHasLoaded(true));
  }, [selectedValue]);

  if (!hasLoaded) return null;

  return (
    <View>
      {fields.map((field) => (
        <Text key={field} style={[styles.fieldText, style]}>
          {nation[field]}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  fieldText: {
    color: "white",
  },
});


export default ChangeDetails;