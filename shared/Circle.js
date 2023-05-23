import React from "react";
import { View } from "react-native";



const Circle = ({ index }) => {
  console.log(index, 'mitt index')
  let color = "#00FF00";
  if (index === 0) {
    color = "grey";
  }
  else if (index >= 1) {
    color = "#FF0000";
  } else if (index >= 0.5) {
    color = "#FFA500";
  }

  const progress = index > 1 ? 1 : index;

  return (
    <View
      style={{
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: color,
        borderWidth: 1.5,
        borderColor: "#000",
      }}
    />
  );
};

export default Circle;
