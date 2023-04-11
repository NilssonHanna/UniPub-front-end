import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

export default function NationSettingScreen({navigation}) {


  const pressHandler = () =>{

    navigation.navigate('NationManaging')
    
    }
  return ( 
  
  <View style={styles.container}>

    <Text> NationStettingScreen </Text>
    <Button title='go to nation managing' onPress={pressHandler}/>
  </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    padding:24
  }
})