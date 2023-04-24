import React from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';
import theme from '../Styles/GlobalStyles';
import {LoginButtons} from '../shared/Buttons';
import { Chewy_400Regular } from '@expo-google-fonts/chewy';





export default function LoginScreen({navigation}) {

     const pressHandler = () =>{

        navigation.navigate('TabsNations')
        
        } 
    
  return ( 
  
  <View style={styles.container}>

  <Text style={styles.title}>Welcome</Text>
    
<View>
  <TextInput
   placeholder="Username" 
   placeholderTextColor="black" 
   style={styles.textInput}
   />
  <TextInput
   placeholder="Password"
    placeholderTextColor="black" 
    style={styles.textInput}
    />
  
</View>
    <View>
        <LoginButtons text="Login" onPress={pressHandler} />
      </View>
  </View>
 
   )
}

const styles = StyleSheet.create({

  container: {
  
    flex: 1,
    backgroundColor: theme.backgroundColor,
    padding:24,
    paddingTop: 100, // add padding to position title at the top
    paddingHorizontal: 24, // 
  },

  textInput:{
    height:60,
    borderWidth:2,
    borderColor:'black',
    marginHorizontal:20,
    marginVertical:15,
    borderRadius:25,
    paddingLeft:10,
    top: 100,
    backgroundColor: 'white',
    fontFamily: 'Times New Roman'
},

title: {
  color: '#ea580c',
  textTransform:'uppercase',
  fontSize:28,
  fontWeight:'bold',
  fontFamily: 'Times New Roman',
  textAlign:'center',
},

});
