import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import theme from "../Styles/GlobalStyles";
import useGetDetails from "../src/hooks/useGetDetails";

export default function MenuScreen({ navigation, route }) {
  const { id } = route.params;
  const nation = useGetDetails(id);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const [menuStyle, setMenuStyle] = useState({});

  useEffect(() => {
    const style = {
      width: windowWidth * 0.8,
      height: windowHeight * 0.7,
      alignSelf: 'center',
      resizeMode: 'contain',
      marginTop: 40,
    };
    setMenuStyle(style);
  }, [windowWidth, windowHeight]);

  const pressHandlerNationView = () => {
    navigation.navigate("NationView", { id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.goBackContainer}>
        <Button
          title="Close menu"
          onPress={pressHandlerNationView}
          color="#fff"
          titleStyle={styles.goBackTitle}
        />
      </View>

      <Image
        source={{ uri: nation.menuUrl }}
        resizeMode="cover"
        style={[styles.menu, menuStyle]}
      ></Image>
      <Text style={styles.title}>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    padding: 24,
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  
  goBackContainer: {
    position: "absolute",
    top: 40,
    right: 24,
    backgroundColor: "#556B2F",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  goBackTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  menu: {
    aspectRatio: 1,
  },
});
