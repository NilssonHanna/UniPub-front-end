import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';


export default function LoginScreen({navigation}) {

    const pressHandler = () =>{

        navigation.navigate('NationSetting')
        
        }
    
  return ( 
  
  <View style={styles.container}>

    <Text> Login screen </Text>
    <Button title='go to nationsetting' onPress={pressHandler}/>
  </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    padding:24
  }
})