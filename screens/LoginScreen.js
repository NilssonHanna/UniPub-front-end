import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import axios from 'axios';
import theme from '../Styles/GlobalStyles';
import {ExitButton, LoginButtons} from '../shared/Buttons';
/*import { useFonts, Chewy_400Regular } from '@expo-google-fonts/chewy';*/


const LoginScreen = ({ navigation }) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 /*const [fontsLoaded] = useFonts({
  Chewy_400Regular,
});*/


/*const pressHandlerHome=() => {
  navigation.navigate('Home')
}*/
  
/*if (!fontsLoaded) {
return null;
}*/

 const pressHandler = async () => {
  if (!username || !password) {
    Alert.alert('All fields are required');
    return;
  }

  try {
    const response = await axios.get(`https://nationapp-backend.onrender.com/nations/getNations`);
    const data = response.data;

    const matchingNation = data.find(
      (nation) => nation.username === username && nation.password === password
    );

    if (!matchingNation) {
      Alert.alert('Log in failed. Invalid username or password');
      return;
    }

    const matchingNationID = matchingNation.id;
    const nationIDs = data.map((nation) => nation.id);

    if (nationIDs.includes(matchingNationID)) {
      navigation.navigate('NationSetting', { id: matchingNationID });
    } else {
      Alert.alert('Log in failed. Invalid username or password');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Log in failed. Please try again.');
  }
};



 return (
  
   <View style={styles.container}>
    {/*    <View>
        <ExitButton text="x" onPress={pressHandlerHome} />
      </View>  */}
      <Text style={styles.title}>Welcome</Text>

     <View style={{ marginVertical: 200 }}>
       <View style={{ marginHorizontal: 24 }}>
         <TextInput
           style={styles.textInput}
           placeholder="Username"
           onChangeText={(text) => setUsername(text)}
           autoCompleteType="username"
         />
       </View>
       <View style={{ marginVertical: 0 }}>
         <View style={{ marginHorizontal: 24 }}>
           <TextInput
             style={styles.textInput}
             placeholder="Password"
             onChangeText={(text) => setPassword(text)}
             secureTextEntry={true}
           />
         </View>
       </View>
     </View>
     <View style={{ marginVertical: -150 }}>
       <View style={{ marginHorizontal: 24 }}>
         <LoginButtons text="Log in" onPress={pressHandler} />
       </View>
     </View>
   </View>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: theme.backgroundColor,
 },
 textInput: {
   height: 50,
   borderWidth: 1,
   borderColor: 'black',
   marginHorizontal: 20,
   marginVertical: 10,
   borderRadius: 25,
   paddingLeft: 10,
 },
});


export default LoginScreen;
