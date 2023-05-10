/* import React, { useState } from "react";
import {StyleSheet,View,Text, Image, ImageBackground, ScrollView} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import StartButtons from '../shared/Buttons';
import NationDetails from "../src/components/NationDetails";

export default function NationViewScreen({ navigation, route }) {
  
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });
  
  const { id } = route.params;

  //const [hasLoaded, setHasLoaded] = useState(false);
  const [nationData, setNationData] = useState({});


  const pressHandler = () => {
      navigation.navigate("Menu", {id});
  };

  const image = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG",
  };

  if (!fontsLoaded) {
    return null;
    }

  return (

    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.bottomSpace} />

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    

      <NationDetails
          id={id}
          fields={["name"]}
          style={styles.title}
          onLoad={(data) => setNationData(data)}

        />

      
      </ImageBackground>


      <View>
        <Text style={styles.availableSeats}>
          Available Seats: {nationData.maxCapacity - nationData.guestCount}
        </Text>
      </View>


      <View>
          <NationDetails id={id} fields={["description"]} style={styles.descriptionText}  />
          </View>
        
      <View style = {styles.menu}>
       <StartButtons text="Menu" onPress={pressHandler} />
       </View>

       <View>
       <Text style={styles.header}> Opening Hours: </Text>
          <NationDetails id={id} fields={["openingHours"]} style={styles.openingTimes}  />
          </View>

      <View>

          <NationDetails id={id} fields={["address"]} style={styles.adress} />
          
      </View>
  
      </ScrollView>
  );
} */

import React, { useState } from "react";
import {StyleSheet,View,Text, Image, ImageBackground, ScrollView} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold  } from '@expo-google-fonts/montserrat';
import theme from '../Styles/GlobalStyles';
import StartButtons from '../shared/Buttons';
import NationDetails from "../src/components/NationDetails";
import useGetDetails from "../src/hooks/useGetDetails";

export default function NationViewScreen({ navigation, route }) {
  
  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });
  
  const { id } = route.params;
  const nation = useGetDetails(id);




  const pressHandler = () => {
      navigation.navigate("Menu", {id});
  }


  
  

  const image = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Stockholms_Nation%2C_Uppsala.JPG",
  };

  if (!fontsLoaded) {
    return null;
    }

  return (

    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.bottomSpace} />

      <ImageBackground source={{ uri: nation.header }} resizeMode="cover" style={styles.image}>
        <NationDetails id={id} fields={["name"]} style={styles.title} />
      </ImageBackground>

      <View>
          <NationDetails id={id} fields={["description"]} style={styles.descriptionText}  />
      </View>

      <View>
        <Text style={styles.availableSeats}>
          Available Seats: {nation.maxCapacity - nation.guestCount}
        </Text>
      </View>

        
      <View style = {styles.menu}>
       <StartButtons text="Menu" onPress={pressHandler} />
       </View>

       <View>
       <Text style={styles.header}> Opening Hours: </Text>
          <NationDetails id={id} fields={["openingHours"]} style={styles.openingTimes}  />
          </View>

      <View>
        <Text style={styles.header}> Adress: </Text>
          <NationDetails id={id} fields={["address"]} style={styles.adress} />
          
      </View>
  
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },


  contentContainer: {
    paddingBottom: 100, 
  },

  bottomSpace: {
    height: 50, 
  },

image: {
  width: '100%',
  height: undefined,
  aspectRatio: 1,
  resizeMode: 'contain',
  marginTop: -50,
  
},

availableSeats: {
  fontSize: 20,
  fontFamily: 'MontserratBold',
  letterSpacing: 1, 
  fontWeight: 'bold',
  textAlign:'center',
  top: 50,
  color: 'white',
},

openingTimes: {
  fontSize: 14,
  fontFamily: 'Montserrat',
  letterSpacing: 1, 
  fontStyle: 'italic',
  color: 'white',
  paddingLeft: 15,
  paddingRight: 15,
  paddingVertical: 10,
  top: 80,

},

adress: {
  fontSize: 14,
  fontFamily: 'Montserrat',
  letterSpacing: 1, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: 'white',
  paddingLeft: 15,
  paddingRight: 15,
  paddingVertical: 10,
  top: 80,
},

descriptionText: {
  fontSize: 15,
  fontFamily: 'Montserrat',
  letterSpacing: 2, 
  letterSpacing: 1,
  fontStyle: 'italic',
  color: 'white',
  paddingVertical: 5,
  top: 10,
  textAlign: 'left',

},

title: {
  textTransform:'uppercase',
  fontSize:22,
  fontFamily: 'MontserratBold',
  letterSpacing: 2, 
  color: 'white',
  lineHeight: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#00000070',
  top: 220,
},

header: {
  fontSize: 16,
  fontFamily: 'MontserratBold',
  letterSpacing: 1, 
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: 'white',
  paddingVertical: 5,
  paddingLeft: 15,
  top: 80,
},

menu: {
  top: 80,
  marginHorizontal: 80
}
})
