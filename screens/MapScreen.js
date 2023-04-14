import React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import {Button, StyleSheet, Text, View } from 'react-native';

export default function MapScreen({navigation}) {
  const markers = [
    {
      title: 'Stockholms nation',
      coordinate: {
        latitude: 59.85670217211145,
        longitude: 17.634162409009416,
      },
    },
    {
      title: 'Södermanlands-Nerikes nation',
      coordinate: {
        latitude: 59.858917110491745, 
        longitude: 17.630273483811028, 
      },
    },
    {
      title: 'Göteborgs nation',
      coordinate: {
        latitude: 59.85951148585305, 
        longitude: 17.63019673673872,
      },
    },
    {
      title: 'Uplands nation',
      coordinate: {
        latitude: 59.85994249054256, 
        longitude: 17.629918765872866,
      },
    },
    {
      title: 'Västmanlands-Dala nation',
      coordinate: {
        latitude: 59.86022616653366,  
        longitude: 17.628911244183858,
      },
    },
    {
      title: 'Gotlands nation',
      coordinate: {
        latitude: 59.85977742760682,  
        longitude: 17.63457842711998,
      },
    },
    {
      title: 'Östgöta nation',
      coordinate: {
        latitude: 59.85520894476883, 
        longitude: 17.63805648465481,
      },
    },
    {
      title: 'Gästrike-Hälsinge nation',
      coordinate: {
        latitude: 59.856333902455745,  
        longitude: 17.636728219676062,
      },
    },
    {
      title: 'Västgöta nation',
      coordinate: {
        latitude: 59.85682490250896, 
        longitude: 17.638665210994073,
      },
    },
    {
      title: 'Norrlands nation',
      coordinate: {
        latitude: 59.857376584941335, 
        longitude: 17.63786247026298,
      },
    },
    {
      title: 'Smålands nation',
      coordinate: {
        latitude: 59.859218805255026, 
        longitude: 17.63118221177754,
      },
    },
    {
      title: 'Värmlands nation',
      coordinate: {
        latitude: 59.85726034659146, 
        longitude: 17.63366907924358,
      },
    },
    {
      title: 'Norrlands nation',
      coordinate: {
        latitude: 59.857376584941335, 
        longitude: 17.63786247026298,
      },
    },
    {
      title: 'Kalmar nation',
      coordinate: {
        latitude: 59.85908262895672,  
        longitude: 17.627077311777516,
      },
    },
  ];

  const pressHandler = () =>{

    navigation.navigate('NationView')
    
    }

    const navigateToScreen = () => {
        navigation.navigate('OverView');
      };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 59.859555,
          longitude: 17.632734,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker.coordinate} >
            <Callout>
              <Text style= {styles.nation}> {marker.title}</Text>
              <Button title='Info' onPress={pressHandler}/>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View>
      <Button title='Gå till Overview' onPress={navigateToScreen}/>
      </View>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
  nation: {
    color: 'black',
    textTransform:'uppercase',
    fontSize:14,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    letterSpacing:0.5

  },

});
