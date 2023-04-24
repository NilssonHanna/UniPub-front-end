import React from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';
import theme from '../Styles/GlobalStyles';
import {ExitButton, LoginButtons} from '../shared/Buttons';
import { useFonts, Chewy_400Regular } from '@expo-google-fonts/chewy';


export default function LoginScreen({navigation}) {

  const [fontsLoaded] = useFonts({
    Chewy_400Regular,
  });

     const pressHandlerNationSetting = () =>{

        navigation.navigate('TabsNations')
        
        }

      const pressHandlerHome=() => {
        navigation.navigate('Home')
      }
        
    if (!fontsLoaded) {
    return null;
  }
    
  return ( 
  
  <View style={styles.container}>

  <View>
      <ExitButton text="x" onPress={pressHandlerHome} />
  </View>

  <Text style={styles.title}>Welcome</Text>
    
<View>
  <TextInput
   placeholder="Username . . ." 
   placeholderTextColor="black" 
   style={styles.textInput}
   />
  <TextInput
   placeholder="Password . . ."
    placeholderTextColor="black" 
    style={styles.textInput}
    />
  
</View>
    <View>
        <LoginButtons text="Login" onPress={pressHandlerNationSetting} />
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
    fontFamily: 'Chewy_400Regular', 
    fontSize: 20,
    letterSpacing: 2,
  },

title: {
  color: '#ea580c',
  textTransform:'uppercase',
  fontSize:40,
  fontWeight:'bold',
  fontFamily: 'Chewy_400Regular',
  letterSpacing: 5,
  textAlign:'center',
},

});
