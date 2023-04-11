import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StartButtons from '../shared/Buttons';
import theme from '../Styles/GlobalStyles'

export default function HomeScreen({ navigation }) {
  const pressHandler = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.backgroundColor }}>
      <Text> Home screen </Text>

      <View style={styles.buttonContainer}>
        <StartButtons text="go to map screen" onPress={() => pressHandler('Map')} />
        <StartButtons text="go to loginscreen" onPress={() => pressHandler('Login')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'vertical',
    justifyContent: 'space-around',
    marginVertical: 20,
  }
});






