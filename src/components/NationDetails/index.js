import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";

const NationDetails = ({ id, fields }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [nation, setNation] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nationapp-backend.onrender.com/nations/${id}`)
      .then((response) => {
        console.log("response", response);
        setNation(response.data);
      })
      .catch((error) => {
        console.log("axios error", error);
      })
      .finally(() => setHasLoaded(true));
  }, []);

  if (!hasLoaded) return null;

  return (
    <View>
      {fields.map((field) => (
        <Text key={field}>{field}: {nation[field]}</Text>
      ))}
    </View>
  );
};

export default NationDetails;

