import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text } from "react-native";

const NationDetails = ({ id, fields, style, onLoad }) => {

  const [hasLoaded, setHasLoaded] = useState(false);
  const [nation, setNation] = useState([]);

  useEffect(() => {
    axios
      .get(`https://nationapp-backend.onrender.com/nations/${id}`)
      .then((response) => {
        setNation(response.data);
        onLoad(response.data);
      })
      .catch((error) => {
      })
      .finally(() => setHasLoaded(true));
  }, []);

  if (!hasLoaded) return null;

  return (
    <View>
      {fields.map((field) => (
        <Text key={field} style={style}> {nation[field]}</Text>
      ))}
    </View>
  );
};

export default NationDetails;

