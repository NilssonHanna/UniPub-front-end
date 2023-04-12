import React from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';
import theme from '../Styles/GlobalStyles';
import {LoginButtons} from '../shared/Buttons';




export default function LoginScreen({navigation}) {

    const pressHandler = () =>{

        navigation.navigate('NationSetting')
        
        }
    
  return ( 
  
  <View style={styles.container}>

    <Text> Login screen </Text>
    
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
        <LoginButtons text="Login" onPress={() => pressHandler('NationSetting')} />
        
      </View>
  </View>
 
   )
}

const styles = StyleSheet.create({

  container: {
  
    flex: 1,
    backgroundColor: theme.backgroundColor
  },

  textInput:{
    height:50,
    borderWidth:1,
    borderColor:'black',
    marginHorizontal:20,
    marginVertical:10,
    borderRadius:25,
    paddingLeft:10


},

});
