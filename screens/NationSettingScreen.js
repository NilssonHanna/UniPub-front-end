import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import theme from '../Styles/GlobalStyles';
import { OrangeButtons } from '../shared/Buttons';
import NumberPicker from '../shared/NumberPicker';
import { Tip } from 'react-native-tip';



export default function NationSettingScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(1);
  
  
  const [showTip, setShowTip] = useState(false);

<<<<<<< HEAD
  const pressHandler = () => {
 
=======
  /* const pressHandler = () => {
>>>>>>> 0c914c8d1355fe72bb76933a8a6c04bd4c96aaf2
    navigation.navigate('NationManaging', {
      selectedValue,
      maxSeats: selectedValue
    });
<<<<<<< HEAD
=======

  }; */
  const pressHandler = () => {
    if (selectedValue >= 1) {
      console.log(selectedValue)
      navigation.navigate('NationManaging', {
        selectedValue,
        maxSeats: selectedValue
      });
    } else {
      setShowTip(true);
    }
>>>>>>> 0c914c8d1355fe72bb76933a8a6c04bd4c96aaf2
  };

  /* const onValueChange = (value) => {
    setSelectedValue(value);
    
  }; */

  const onValueChange = (value) => {
    setSelectedValue(value);
<<<<<<< HEAD
=======
    setShowTip(false);
>>>>>>> 0c914c8d1355fe72bb76933a8a6c04bd4c96aaf2
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stockholms nation</Text>

      <Text style={styles.maximumSeats}>Set amount of maximum seats for the evening:</Text>
      <View style={styles.numberpicker}>
      <NumberPicker onValueChange={onValueChange} />
      </View>
      <Text style={styles.selectedValue}>Selected seats available: {selectedValue}</Text>

<<<<<<< HEAD
    <View style = {styles.submit}>
      <OrangeButtons text="Submit seats" onPress={pressHandler} />
      </View>
=======
      {/* <BlueButtons text="Start calculating amount of seats" 
      onPress={selectedValue === 0 ? null : pressHandler} 
        disabled={selectedValue === 0}/>
 */}


 <BlueButtons
  text="Start calculating amount of seats"
  onPress={pressHandler}
  disabled={selectedValue === 0}
/>
{showTip && (
        <View style={styles.tipContainer}>
          <Tip
            visible={showTip}
            text="Please select a value greater than 0"
            onBackdropPress={() => setShowTip(false)}
            onClose={() => setShowTip(false)}
          />
          {console.log('Tip is being rendered')}
        </View>
      )}

>>>>>>> 0c914c8d1355fe72bb76933a8a6c04bd4c96aaf2
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  title: {
    color: '#ea580c',
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    top: 60,
  },
  numberpicker:{
    height: '30%', // for example
    width: '50%', // for example
    alignSelf: 'center',
<<<<<<< HEAD
    top: 180,
=======
    marginBottom:40,
    marginTop:10

>>>>>>> 0c914c8d1355fe72bb76933a8a6c04bd4c96aaf2
  },

  selectedValue: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
<<<<<<< HEAD
    top: 200,
    color: '#ea580c',
=======
    marginBottom:30,
    
>>>>>>> 0c914c8d1355fe72bb76933a8a6c04bd4c96aaf2
  },
  
  maximumSeats: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ea580c',
    top:  100,
    
  },
<<<<<<< HEAD

  submit: {
    top:  220,
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '70%',
    
   
=======
  tipContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    zIndex: 1,
>>>>>>> 0c914c8d1355fe72bb76933a8a6c04bd4c96aaf2
  },
});
