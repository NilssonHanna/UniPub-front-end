import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import theme from '../Styles/GlobalStyles';

export default function MenuScreen(navigation) {

    const pressHandler = () =>{

        navigation.navigate('NationView')
        
        }
  return ( 
  
  <View style={styles.container}>

      <Text style={styles.title}>Menu</Text>
  
  </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },

  title: {
    color: 'black',
    textTransform:'uppercase',
    fontSize:25,
    fontWeight:'bold',
    fontFamily: 'Times New Roman',
    textAlign:'center',
    top: 50,
},
})