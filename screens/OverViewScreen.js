import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';

export default function OverViewScreen({navigation}) {

    const pressHandler = () =>{

        navigation.navigate('NationView')
        
        }
  return ( 
  
  <View style={styles.container}>

    <Text> OverViewscreen </Text>
    <Button title='go to nationView page' onPress={pressHandler}/>
  </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    padding:24
  }
})