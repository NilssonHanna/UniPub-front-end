import React from 'react';
import { StyleSheet, TouchableOpacity,Text,View, Image } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Ionicons } from "@expo/vector-icons";
import Circle from './Circle';

export default function StartButtons ({text,onPress}){

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
  });
  console.log(Montserrat_400Regular); 
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
          <Text style={styles.LoginButtonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  export function WhiteButtons ({text,onPress, number}){

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
          <View style={styles.circleContainer}>
          <Circle index={number} />
          </View>
          <Ionicons name="arrow-forward-outline" size={25} color="white" style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
    );
  }
  
  export function MenuButton ({text,onPress}){

    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
    });
    console.log(Montserrat_400Regular); 
    if (!fontsLoaded) {
      return null;
    }
  
      return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.menuButton}>
            <Text style={styles.menuButtonText}> {text} </Text>
          </View>
        </TouchableOpacity>
      );
    }


  export function OrangeButtons ({text,onPress}){

    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
    });
  
    if (!fontsLoaded) {
      return null;
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, styles.orangeButton]}>
          <Text style={styles.orangeButtonText}> {text} </Text>

        </View>
      </TouchableOpacity>
    );
  }

  export function ExitButton ({text,onPress}){

    const [fontsLoaded] = useFonts({
      Montserrat: Montserrat_400Regular,
    });
  
    if (!fontsLoaded) {
      return null;
    }
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
      paddingVertical:15,
      marginHorizontal: 20,
      backgroundColor:'white',
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
        borderColor: 'white',
        borderWidth:1,
        paddingVertical:10,
        paddingHorizontal: 5,
        backgroundColor:'#222222',
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
      backgroundColor:'black',
      height: 100,
      width: 220,
      //borderRadius: 10,
      //bordercolor: 'white',
      //borderWidth: 2,
      borderBottomWidth: 1,
      borderBottomColor: 'white',
      marginHorizontal: 10,
      paddingBottom: 10,
  },

  menuButton:{
    borderRadius:50,
    borderColor: 'white',
    borderWidth:1,
    paddingVertical:10,
    paddingHorizontal: 5,
    backgroundColor:'#222222',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
  },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 5,

},


  exitButton:{
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#222222',
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
    borderWidth: 1, 
    borderColor: 'white',
    paddingVertical:10,
    backgroundColor:'#658534',
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
  fontSize:18,
  fontWeight:'bold',
  fontFamily: 'Montserrat',
  textAlign:'center',
  letterSpacing: 1,

},

  LoginButtonText:{

    color: 'black',
    fontSize:18,
    fontWeight:'bold',
    fontFamily: 'Montserrat',
    textAlign:'center',

},

menuButtonText:{

  color: 'white',
  fontSize:18,
  fontWeight:'bold',
  fontFamily: 'Montserrat',
  textAlign:'center',
  letterSpacing: 1,


},
    orangeButtonText:{

        color: 'white',
        fontSize:20,
        fontWeight:'bold',
        fontFamily: 'MontserratBold', 
        textAlign:'center',
        letterSpacing: 1,
    
    },

    whiteButtonText:{

      color: 'white',
      //textTransform:'uppercase',
      fontSize:14,
      textAlign:'left',
      fontFamily: 'MontserratBold', 
      letterSpacing: 1,
      paddingHorizontal: 10,
    },

    arrowIcon: {
      left:220,
      paddingHorizontal: 10,
      bottom: 60,
    },

    circleContainer: {
      alignItems: "center",
      justifyContent: "center",
      left: 80,
      bottom: 28,
    },


})