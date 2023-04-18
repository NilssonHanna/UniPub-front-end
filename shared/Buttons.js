import React from 'react';
import { StyleSheet, TouchableOpacity,Text,View } from 'react-native';



export default function StartButtons ({text,onPress}){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, styles.button]}>
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
  export function LoginButtons ({text,onPress}){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.loginButtonContainer}>
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  

  export function WhiteButtons ({text,onPress}){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, styles.whiteButton]}>
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }


  export function BlueButtons ({text,onPress}){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonContainer, styles.blueButton]}>
          <Text style={styles.bluebuttonText}> {text} </Text>
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

    button:{

        borderRadius:50,
        paddingVertical:30,
        backgroundColor:'#ea580c',
  
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

    whiteButton:{

      paddingVertical: 10,
      backgroundColor:'white',
  
  },

  blueButton:{

    borderRadius:50,
    paddingVertical:30,
    backgroundColor:'#ea580c',

},

buttonText:{

  color: 'black',
  textTransform:'uppercase',
  fontSize:18,
  fontWeight:'bold',
  fontFamily: 'Times New Roman',
  textAlign:'center',
  letterSpacing:0.5

},
    bluebuttonText:{

        color: 'black',
        textTransform:'uppercase',
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'Times New Roman',
        textAlign:'center',
        letterSpacing:0.5
    
    }
})