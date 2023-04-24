import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import theme from '../Styles/GlobalStyles';
import { BlueButtons } from '../shared/Buttons';
import NumberPicker from '../shared/NumberPicker';
import { Tip } from 'react-native-tip';



export default function NationSettingScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(1);
  
  
  const [showTip, setShowTip] = useState(false);

  /* const pressHandler = () => {
    navigation.navigate('NationManaging', {
      selectedValue,
      maxSeats: selectedValue
    });

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
  };

  /* const onValueChange = (value) => {
    setSelectedValue(value);
    
  }; */

  const onValueChange = (value) => {
    setSelectedValue(value);
    setShowTip(false);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stockholms nation</Text>

      <Text style={styles.maximumSeats}>Set amount of maximum seats:</Text>
      <View style={styles.numberpicker}>
      <NumberPicker onValueChange={onValueChange} />
      </View>
      <Text style={styles.selectedValue}>Selected seats available: {selectedValue}</Text>

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

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: theme.backgroundColor,
    paddingTop: 50, // add padding to position title at the top
    paddingHorizontal: 24, //
  },
  title: {
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    marginBottom: 25,
  },
  numberpicker:{
    height: '30%', // for example
    width: '50%', // for example
    alignSelf: 'center',
    marginBottom:40,
    marginTop:10

  },
  selectedValue: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    marginBottom:30,
    
  },
  
  maximumSeats: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    
  },
  tipContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    zIndex: 1,
  },
});
