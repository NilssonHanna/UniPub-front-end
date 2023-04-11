import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

export default function MapScreen({navigation}) {

  const pressHandler = () =>{

    navigation.navigate('OverView')
    
    }

  return ( 
  
  <View style={styles.container}>

    <Text> Map screen </Text>
    <Button title='go to overviewpage' onPress={pressHandler}/>
    
  </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    padding:24
  }
})