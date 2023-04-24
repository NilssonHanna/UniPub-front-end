import { Center, Row } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity,Text,View } from 'react-native';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';



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
        <View style={styles.loginButtonContainer}>
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  export function WhiteButtons ({text,onPress}){

    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
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

    loginButtonContainer:{
        
        height:60,
        bottom: -150,
        alignItems:'center',
        justifyContent: 'space-around',
        borderRadius:35,
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:1,
        borderColor:"black",
        backgroundColor:'#ea580c',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    },

  

    button:{


        borderRadius:50,
        paddingVertical:30,
        backgroundColor:'#ea580c',
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

      paddingVertical: 10,
      backgroundColor:'white',
  
  },


  exitButton:{
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#ea580c',
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
    backgroundColor:'#ea580c',
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

      color: '#ea580c',
      textTransform:'uppercase',
      fontSize:20,
      fontWeight:'bold',
      fontFamily: 'Montserrat', 
      textAlign:'center',
      letterSpacing: 1,
    
    },
})