import React from 'react';
import { StyleSheet, TouchableOpacity,Text,View } from 'react-native';


export default function StartButtons ({text,onPress}){
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> {text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
  

const styles=StyleSheet.create({
    button:{

        borderRadius:8,
        paddingVertical:40,
        paddingHorizontal:80,
        marginTop:10,
        backgroundColor:'#ea580c'
    },
    buttonText:{

        color: 'black',
        textTransform:'uppercase',
        fontSize:14,
        TextAlign:'center'
    }
})