import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, TouchableOpacity, Modal, KeyboardAvoidingView} from 'react-native';
import axios from 'axios';
import theme from '../Styles/GlobalStyles';
import {ExitButton, LoginButtons} from '../shared/Buttons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';


uuidv4();
const SignupScreen = ({ navigation }) => {

 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');

 
 const [fontsLoaded] = useFonts({
  Montserrat: Montserrat_400Regular,
  MontserratBold: Montserrat_700Bold,
});

Parse.setAsyncStorage(AsyncStorage); 
Parse.initialize('H7FbqYUcGrDEon9FzxzS3mC9JOWzjxi4ddpE0qpQ','DK4H38GQeuEGwGqbvRpy3jg7s77wAZv4JtdIcNn4');
Parse.serverURL = 'https://parseapi.back4app.com/';

const pressHandlerHome=() => {
  navigation.navigate('Login')
}

if (!fontsLoaded) {
  return null;
  }


  function signUp() {

    if (!username || !password || !email) {
      Alert.alert('All fields are required');
      return;
    }

    const query = new Parse.Query(Parse.User);
    query.equalTo('email', email);
    query
      .first()
      .then((user) => {
        if (user) {
          Alert.alert('Email is already registered');
        } else {
          var newUser = new Parse.User();
          newUser.set('username', username);
          newUser.set('password', password);
          newUser.set('email', email);

          newUser
            .signUp()
            .then(function (user) {
              navigation.navigate('Login');
            })
            .catch(function (error) {
            });
        }
      })
      .catch((error) => {
      });
  }
 
return (

  <View style={styles.container}>

  <View>
      <ExitButton text="x" onPress={pressHandlerHome} />
  </View>

  <Text style={styles.title}>Sign Up</Text>

    <View>
    <TextInput
        style={styles.textInput}
        placeholder="email"
        placeholderTextColor={'white'}
        onChangeText={(text) => setEmail(text)}
        autoCompleteType="username"
      />

      <TextInput
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={'white'}
        onChangeText={(text) => setUsername(text)}
        autoCompleteType="username"
      />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={'white'}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
    </View>

     <View style={styles.login}>
          <LoginButtons text="Register"  onPress={signUp}> </LoginButtons>
     </View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    padding:24,
    paddingTop: 100, 
    paddingHorizontal: 24, 
  },

  title: {
    color: 'white',
    fontSize:30,
    fontWeight:'bold',
    fontFamily: 'MontserratBold',
    letterSpacing: 2,
    textAlign:'center',
  },
  
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: '#222222',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor:'white',
    paddingLeft: 10,
    top: 100,
    color: 'white',
  },
login:{
  top:130
},

forgotpassword:{
  top:210,
  left:105,
  },

  forgotpasswordText:{
    color: 'white',
    position:'absolute'
  },

  forgotpasswordTitle:{
    textAlign: 'center',
     fontFamily: 'MontserratBold',
      fontSize: 25
  },
  forgotpasswordInfo:{
    fontFamily: 'Montserrat',
     fontSize: 12,
     marginTop:20
  },

  resetPassword:{
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 10,
    marginTop:20
  },

  submitButton: {
    fontFamily:'MontserratBold',
    textAlign: 'center',
    color:'green',
    fontSize:20,
    marginTop:20,
  },

  keyboardAvoidingView: {
    flex: 1,
    paddingBottom:50
  },
  
  modalContent:{
      height: '40%',
      backgroundColor: 'white',
      padding: 20,
      marginTop: 'auto',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderColor: 'grey',
       borderWidth: 1,
     
  },
  
});

export default SignupScreen;
