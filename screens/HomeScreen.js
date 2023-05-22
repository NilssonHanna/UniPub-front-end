import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import StartButtons from '../shared/Buttons';
import theme from '../Styles/GlobalStyles'

export default function HomeScreen({ navigation }) {

  const pressHandlerMap=() =>{

    navigation.navigate('OverView')
    
    }
    const pressHandlerLogin=() =>{

      navigation.navigate('Login')
      
      }
 /*  const pressHandler = (screenName) => {
    navigation.navigate(screenName);
  };
 */
  const imageUrl = "https://drive.google.com/uc?id=16kfkY0zJn0dKF9d0iIk0H4Ngpw4sFWFb";

  
  
  return (
    <View style={[styles.container]}/* style={{flex: 1, backgroundColor: '#1070B6'}} */>

      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
     </View>

      <View style = {styles.startButtons} >
        <StartButtons text="Continue as student" onPress={pressHandlerMap}/>
        <StartButtons text="Continue as nation" onPress={pressHandlerLogin} />
      </View>
    </View>
  );
}

/* const styles = StyleSheet.create({

  image: {
    width: 250,
    height: 250,
  },
});
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor
  },
  image: {
    width: 350,
    height: 350,
    top: -40,
  },

  startButtons:{
    bottom: 80,
  },
});





