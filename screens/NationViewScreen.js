import React from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import theme from '../Styles/GlobalStyles';
import StartButtons from '../shared/Buttons';

export default function NationViewScreen({navigation}) {

  const pressHandler = () =>{

    navigation.navigate('Menu')
    
    }
  
  return ( 
  
    <View style={styles.container}>

    <Text style={styles.title}>Stockholms nation</Text>

    <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG'}} />
        <Text style={styles.availableSeats}>Available Seats:</Text>
       </View>

       <StartButtons text="Menu" onPress={pressHandler} />

       <Text style={styles.openingTimes}>Opening times:</Text>
       <Text style={styles.adress}>Adress:</Text>
      </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    padding:24,
    flex: 1,
    backgroundColor: theme.backgroundColor,
    paddingTop: 50, // add padding to position title at the top
    paddingHorizontal: 24, // 
  }
,
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
},
image: {
  width: '100%',
  height: undefined,
  aspectRatio: 1,
  resizeMode: 'contain',
  marginTop: -50,
},

availableSeats: {
  fontSize: 25,
  fontFamily: 'Times New Roman',
  fontWeight: 'bold',
  marginTop: -30
},

openingTimes: {
  fontSize: 20,
  fontFamily: 'Times New Roman',
  fontWeight: 'bold',
  fontStyle: 'italic',
},

adress: {
  fontSize: 20,
  fontFamily: 'Times New Roman',
  fontWeight: 'bold',
  paddingTop: 10,
  fontStyle: 'italic',
},
})