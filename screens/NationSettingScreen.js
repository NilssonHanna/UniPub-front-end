import React from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import theme from '../Styles/GlobalStyles';
import { BlueButtons } from '../shared/Buttons';

export default function NationViewScreen({navigation}) {

  const pressHandler = () =>{

    navigation.navigate('NationManaging')
    
    }
  
  return ( 
  
    <View style={styles.container}>

    <Text style={styles.title}>Stockholms nation</Text>
    
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG'}} />
        </View>
        <Text style={styles.maximumSeats}>Set amount of maximum seats:</Text>
        <BlueButtons text="Start calculating amount of seats" onPress={pressHandler} />
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
  marginTop: -60
},
image: {
  width: '80%',
  height: undefined,
  aspectRatio: 1,
  resizeMode: 'contain',
 
},

maximumSeats: {
  fontSize: 18,
  fontFamily: 'Times New Roman',
  fontWeight: 'bold',
  marginTop: -30,
  textAlign: 'center',
  marginBottom: 80,
},

})