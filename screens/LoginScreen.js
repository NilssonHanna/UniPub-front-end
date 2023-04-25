import React from 'react';
import {StyleSheet,View,Text,Button,TextInput} from 'react-native';
import theme from '../Styles/GlobalStyles';
import {ExitButton, LoginButtons} from '../shared/Buttons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function LoginScreen({navigation}) {

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
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
    fontFamily: 'Montserrat',
    fontSize: 20,
    letterSpacing: 1,
  },

title: {
  color: 'black',
  textTransform:'uppercase',
  fontSize:35,
  fontWeight:'bold',
  fontFamily: 'MontserratBold',
  letterSpacing: 2,
  textAlign:'center',
},

});
