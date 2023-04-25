import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import StartButtons from '../shared/Buttons';
import theme from '../Styles/GlobalStyles'

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
  const imageUrl = "https://drive.google.com/uc?id=1YPVjLl0MbGYJL9dNHx_nA0wnzx2jbSeg";



  return (
    <View style={[styles.container]}/* style={{flex: 1, backgroundColor: '#1070B6'}} */>

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
    width: 300,
    height: 300,
  },
});





