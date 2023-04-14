import React, { useState } from 'react';
import {StyleSheet,View,Text, Image, TouchableOpacity} from 'react-native';
import theme from '../Styles/GlobalStyles';

// Define the PauseEntryButton component outside of NationViewScreen
const PauseEntryButton = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePress = () => {
    setIsPaused(!isPaused);
  };

  return (
    <TouchableOpacity
      style={[styles.button, isPaused ? styles.paused : styles.started]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{isPaused ? 'Start Entry' : 'Pause Entry'}</Text>
    </TouchableOpacity>
  );
};

export default function NationViewScreen({navigation}) {

  const [index, setIndex] = useState(0);

  const decrementIndex = () => {
    setIndex(Math.max(index - 1, 0));
  };

  const incrementIndex = () => {
    setIndex(index + 1);
  };


  const pressHandler = () => {
    navigation.navigate('NationManaging');
  };

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Stockholms nation</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG'}} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButtonMinus} onPress={decrementIndex}>
            <Text style={styles.iconButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.index}>{index}</Text>
          <TouchableOpacity style={styles.iconButtonPlus} onPress={incrementIndex}>
            <Text style={styles.iconButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      
      </View>
      <PauseEntryButton />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    padding:24,
    flex: 1,
    backgroundColor: theme.backgroundColor,
    paddingTop: 50, // add padding to position title at the top
    paddingHorizontal: 24, // 
  },
  title: {
    color: 'black',
    textTransform:'uppercase',
    fontSize:25,
    fontWeight:'bold',
    fontFamily: 'Times New Roman',
    textAlign:'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -60
  },
  image: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    justifyContent: 'space-around',
    alignSelf: 'center',
    top: 50
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    fontSize:25,
  },
  started: {
    backgroundColor: 'red',
  },
  paused: {
    backgroundColor: 'green',
  },

  iconButtonMinus: {
    width: 100,
    height: 100,
    backgroundColor: '#1070B6',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -105,
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 20,
    marginBottom: 30,
  },

  iconButtonPlus: {
    width: 100,
    height: 100,
    backgroundColor: '#1070B6',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 20,
    marginBottom: 30,
  },
  iconButtonText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },

  index: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Times New Roman',
    marginVertical: -20,
  },


});