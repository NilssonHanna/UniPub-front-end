import React, { useState } from 'react';
import {StyleSheet,View,Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Bar from '../shared/ProgressBar';
import theme from '../Styles/GlobalStyles';

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

export default function NationManagingScreen({navigation, route}) {


  const [index, setIndex] = useState(0);
  const maxSeats = route.params?.maxSeats || 0;

  const decrementIndex = () => {
    setIndex(Math.max(index - 1, 0));
  };

  const incrementIndex = () => {
    if (index < maxSeats) {
    setIndex(index + 1);
  }
  };

  const image = {uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG'}
  
  const progress = index / maxSeats;

  const pressHandler = () => {
    navigation.navigate('NationManaging');
  };

  return ( 
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Stockholms nation</Text>
      
      </ImageBackground>
   
    <View style ={styles.bar}>
      <Bar index={progress}/>
      </View>

        <TouchableOpacity style={styles.iconButtonMinus} onPress={decrementIndex}>
        
          <Text style={styles.iconButtonText}>-</Text>
        
        </TouchableOpacity>
          
        <TouchableOpacity style={styles.iconButtonPlus} onPress={incrementIndex}>
            
            <Text style={styles.iconButtonText}>+</Text>

        
        </TouchableOpacity>

        <Text style = {styles.index}>{index}/{route.params.selectedValue} students have entered</Text>
     
       {/*  <PauseEntryButton /> */}
  
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.backgroundColor,

  },
  title: {
    textTransform:'uppercase',
    fontSize:25,
    fontFamily: 'Times New Roman',
    color: 'white',
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000070',
    marginTop: -120,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    height: '45%'
  },

  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 80,
    justifyContent: 'space-around',
    alignSelf: 'center',
    top: 50,
    shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 5,
  shadowRadius: 5,
  elevation: 10,
    
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
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#ea580c',
    flexDirection: 'row',
    left: '20%',
    position: 'absolute',
    marginTop: 480,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
  },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 5,
  },

  iconButtonPlus: {
    justifyContent: 'space-around',
    width: 100,
    height: 100,
    backgroundColor: '#ea580c',
    marginLeft: 30,
    flexDirection: 'row',
    left: '45%',
    position: 'absolute',
    marginTop: 480,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
  },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 5,
  },
  iconButtonText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },

  index: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ea580c',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    bottom: 240,
    textTransform: 'uppercase'
  },

  bar: {
    bottom: 250,
    marginHorizontal: 20,
  },


});