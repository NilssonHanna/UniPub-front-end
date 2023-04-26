import React from 'react';
import { StyleSheet, TouchableOpacity,Text,View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function StartButtons ({text,onPress}){

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, styles.button]}>
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
  export function LoginButtons ({text,onPress}){

    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
    });
  
    if (!fontsLoaded) {
      return null;
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  export function WhiteButtons ({text,onPress}){

    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
      MontserratBold: Montserrat_700Bold,
    });
  
    if (!fontsLoaded) {
      return null;
    }
    
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, styles.whiteButton]}>
          <Text style={styles.whiteButtonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }


  export function OrangeButtons ({text,onPress}){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.ButtonContainer, styles.orangeButton]}>
          <Text style={styles.orangeButtonText}> {text} </Text>

        </View>
      </TouchableOpacity>
    );
  }

  export function ExitButton ({text,onPress}){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.exitButton}>
          <Text style={styles.exitButtonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  

const styles=StyleSheet.create({
    buttonContainer: {

        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '70%',
        marginBottom: 40,
    },

    loginButton:{
        
      borderRadius:50,
      paddingVertical:20,
      paddingHorizontal: 20,
      top: 200,
      backgroundColor:'#556B2F',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
    },
      shadowOpacity: 2,
      shadowRadius: 10,
  
      elevation: 5,

    },


    button:{


        borderRadius:50,
        paddingVertical:20,
        paddingHorizontal: 20,
        backgroundColor:'#556B2F',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
      },
        shadowOpacity: 2,
        shadowRadius: 10,
    
        elevation: 5,
  
    },

    whiteButton:{

      paddingVertical: 20,
      backgroundColor:'white',
      height: 80,
      width: 300,
      borderRadius: 50,
  
  },


  exitButton:{
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#556B2F',
    justifyContent: 'center', 
    alignItems: 'center',  
    left:300,
    bottom:70,
    

  },

  exitButtonText:{
    color: 'white',
    textTransform:'uppercase',
    fontSize:15,
    fontWeight:'bold',
    fontFamily: 'Montserrat',
    /* textAlign:'center', */
    alignSelf:'center',
    letterSpacing:0.5,
    

  },


  orangeButton:{

    borderRadius:50,
    paddingVertical:25,
    backgroundColor:'#556B2F',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
  },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 5,

},

buttonText:{

  color: 'white',
  textTransform:'uppercase',
  fontSize:20,
  fontWeight:'bold',
  fontFamily: 'Montserrat',
  textAlign:'center',
  letterSpacing: 1,

},
    orangeButtonText:{

        color: 'white',
        textTransform:'uppercase',
        fontSize:20,
        fontWeight:'bold',
        fontFamily: 'Montserrat', 
        textAlign:'center',
        letterSpacing: 1,
    
    },

    whiteButtonText:{

      color: 'black',
      textTransform:'uppercase',
      fontSize:16,
      fontWeight:'bold',
      fontFamily: 'MontserratBold', 
      textAlign:'center',
      letterSpacing: 1,
      paddingHorizontal: 20
    
    },
})