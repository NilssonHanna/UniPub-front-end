import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import StartButtons from '../shared/Buttons';

export default function HomeScreen({ navigation }) {

  const pressHandlerMap=() =>{

    navigation.navigate('Map')
    
    }
    const pressHandlerLogin=() =>{

      navigation.navigate('Login')
      
      }
 /*  const pressHandler = (screenName) => {
    navigation.navigate(screenName);
  };
 */
  const imageUrl = "https://drive.google.com/uc?id=1Zc0Z4GenUwxw-OIgpplyL-gdIbxnK51Z";


  return (
    <View style={{flex: 1, backgroundColor: '#1070B6' }}>

      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
     </View>

      <View >
        <StartButtons text="Continue as guest" onPress={pressHandlerMap}/>
        <StartButtons text="Login as a nation" onPress={pressHandlerLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  image: {
    width: 250,
    height: 250,
  },
});






