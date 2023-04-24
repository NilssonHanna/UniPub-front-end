import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import theme from '../Styles/GlobalStyles';

export default function ProfileScreen(navigation) {

    
  return ( 
  
  <View style={styles.container}>

<Text style={styles.title}>Profile</Text>
  </View>
 
   )
}

const styles=StyleSheet.create({
  container:{
    padding:24,
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },

  title: {
    color: '#ea580c',
    textTransform:'uppercase',
    fontSize:25,
    fontWeight:'bold',
    fontFamily: 'Times New Roman',
    textAlign:'center',
},
})