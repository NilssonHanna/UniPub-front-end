
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert, TouchableOpacity, Modal, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import axios from 'axios';
import theme from '../Styles/GlobalStyles';
import {ExitButton, LoginButtons} from '../shared/Buttons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';


uuidv4();
const LoginScreen = ({ navigation }) => {

 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [email, setEmail] = useState('');
 const [isModalVisible, setIsModalVisible] = useState(false);
 
 const [fontsLoaded] = useFonts({
  Montserrat: Montserrat_400Regular,
  MontserratBold: Montserrat_700Bold,
});


Parse.setAsyncStorage(AsyncStorage);

Parse.initialize('H7FbqYUcGrDEon9FzxzS3mC9JOWzjxi4ddpE0qpQ','DK4H38GQeuEGwGqbvRpy3jg7s77wAZv4JtdIcNn4');
Parse.serverURL = 'https://parseapi.back4app.com/';

const doUserPasswordReset = async function () {
  
  const emailValue = email;

  return await Parse.User.requestPasswordReset(emailValue)
    .then(async() => {
      const query = new Parse.Query('User');
      query.equalTo('email', emailValue);
      const user = await query.first();
      
      
      
      Alert.alert(
        'Success!',
        `Please check ${email} to proceed with password reset.`,
      );
      return true;
    })
    .catch((error) => {
      Alert.alert('Error!', error.message);
      return false;
    });
    
};

const pressHandlerHome=() => {
  navigation.navigate('Home')
}

const pressHandlerForgotpassword = () => {
  setIsModalVisible(true);
};

const pressHandlerSignup = () => {
  navigation.navigate('Signup');
};


  async function logIn() {

    const mongoResponse = await axios.get(`https://nationapp-backend.onrender.com/nations/getNations`);
    const mongoData = mongoResponse.data;
    const matchingMongoUser = mongoData.find(
      (nation) => nation.username === username 
    );
    
  
    if (matchingMongoUser) {

      var user = Parse.User
          .logIn(username, password).then(function(user) {
              
              const matchingMongoUserID = matchingMongoUser.id;
              const mongoUserIDs = mongoData.map((nation) => nation.id);
              if (mongoUserIDs.includes(matchingMongoUserID)) {
                navigation.navigate('TabsNations', { id: matchingMongoUserID });
                return;
              }
      
            }).catch(function(error){
              Alert.alert('Invalid username or password', error.message);
          
      });
  }

  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <ExitButton text="x" onPress={pressHandlerHome} />
      </View>

      <Text style={styles.title}>Welcome Back.</Text>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor={"white"}
          onChangeText={(text) => setUsername(text)}
          autoCompleteType="username"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={"white"}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.forgotpassword}>
        <TouchableOpacity onPress={pressHandlerForgotpassword}>
          <Text style={styles.forgotpasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signup}>
        <Text style={styles.accountText}>Don't have an account? </Text>
        <TouchableOpacity onPress={pressHandlerSignup}>
          <Text style={styles.signupText}>Sign Up!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.login}>
        <LoginButtons text="Log in" onPress={logIn}>
          {" "}
        </LoginButtons>
      </View>

      <Modal transparent visible={isModalVisible}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.modalContent}>
            <TouchableHighlight
              style={styles.closeButton}
              underlayColor={"transparent"}
              onPress={() => setIsModalVisible(false)}
            >
              
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableHighlight>
            <Text style={styles.forgotpasswordTitle}>Forgot password?</Text>
            <Text style={styles.forgotpasswordInfo}>
              Did you forget your password? Don't worry, we've got your back!
              Just enter your email address below and we'll guide you back to
              your account.
            </Text>
            <TextInput
              value={email}
              placeholder={"Your account email"}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              style={styles.resetPassword}
            />
            <TouchableOpacity onPress={() => doUserPasswordReset()}>
              <Text style={styles.submitButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    padding: 24,
    paddingTop: 100,
    paddingHorizontal: 24,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "MontserratBold",
    padding:24,
    paddingTop: 100, 
    paddingHorizontal: 24, 
    letterSpacing: 2,
    textAlign: "center",
  },

  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#222222",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
    paddingLeft: 10,
    top: 100,
    color: "white",
  },
  login: {
    top: 160,
  },

  forgotpassword: {
    top: 100,
    left: 180,
  },
  signup: {
    top: 240,
    left: 60,
  },
  signupText: {
    color: "grey",
    left: 155,
  },
  forgotpasswordText: {
    color: "white",
    position: "absolute",
  },


  forgotpasswordTitle: {
    textAlign: "center",
    fontFamily: "MontserratBold",
    fontSize: 25,

  },
 

  forgotpasswordInfo: {
    fontFamily: "Montserrat",
    fontSize: 12,
    marginTop: 20,
  },

  accountText: {
    color: "white",
    position: "absolute",
  },

  closeButton: {
    position: "absolute",
    top: 8,
    right: 10,
    padding: 13,
  },


  forgotpasswordInfo:{
    fontFamily: 'Montserrat',
     fontSize: 12,
     marginTop:20
  },

  accountText:{
    color: 'white',
    position:'absolute'
  },

  resetPassword:{
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    marginTop: 20,
  },

  submitButton: {
    fontFamily: "MontserratBold",
    textAlign: "center",
    color: "green",
    fontSize: 20,
    marginTop: 20,
  },

  keyboardAvoidingView: {
    flex: 1,
    paddingBottom: 50,
  },

  modalContent: {
    height: "38%",
    backgroundColor: "white",
    padding: 20,
    marginTop: "auto",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "grey",
    borderWidth: 2,
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

export default LoginScreen;
