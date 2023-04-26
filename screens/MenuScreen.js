import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import theme from '../Styles/GlobalStyles';

export default function MenuScreen({ navigation, route }) {
  const { id } = route.params;
  console.log('id menuscreen', id);

  const pressHandlerNationView = () => {
    navigation.navigate('NationView', { id });
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
  title: {
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    top: 30,
  },
  goBackContainer: {
    position: 'absolute',
    top: 40,
    right: 24,
    backgroundColor: '#556B2F',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  goBackTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
