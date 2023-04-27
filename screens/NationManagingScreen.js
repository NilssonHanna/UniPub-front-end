import React, { useState } from 'react';
import {StyleSheet,View,Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import NationDetails from "../src/components/NationDetails";
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

  const { id } = route.params;

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  const [index, setIndex] = useState(0);
  const maxSeats = route.params?.maxSeats || 0;

  const decrementIndex = () => {
    setIndex(Math.max(index - 1, 0));
  };

  const incrementIndex = () => {
   // if (index < maxSeats) {
    setIndex(index + 1);
 // }
  };

  const image = {uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG'}
  
  //const progress = index / maxSeats;
  const progress = maxSeats === 0 ? 0 : index / maxSeats;

  const pressHandler = () => {
    navigation.navigate('NationManaging');
  };

  if (!fontsLoaded) {
    return null;
  }

  return ( 
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
      <NationDetails
          id={id}
          fields={["name"]}
          style={styles.title}
          onLoad={(data) => setNationData(data)}
        />
      
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
    fontFamily: 'MontserratBold',
    letterSpacing: 2, 
    color: 'white',
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000070',
    marginTop: 300,
  },

  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: -50,
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

    fontFamily: 'Montserrat', 

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
    backgroundColor: '#556B2F',
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
    backgroundColor: '#556B2F',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'MontserratBold', 
    letterSpacing: 1,
    paddingHorizontal: 15,
    textAlign: 'center',
    top: 75,
    textTransform: 'uppercase'
  },

  bar: {
    top: 60,
    marginHorizontal: 20,
  },

});