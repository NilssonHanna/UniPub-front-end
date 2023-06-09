import React, { Component } from 'react';
import { Text } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default class NumberPicker extends Component {

  render() {
    const numberRange = Array.from({ length: 200 }, (_, i) => i); 
    
    
    return (
      <ScrollPicker
        dataSource={numberRange}
        selectedIndex={this.props.selectedValue}
        renderItem={(data, index, isSelected) => {
          return (
            <Text
              key={index}
              style={{
                textAlign: 'center',
                fontSize:  isSelected ? 28 : 22,
                color: isSelected ? 'white' : '#a9a9a9',
                fontWeight:'bold',
                 }}
            >
              {data}
            </Text>
          );
        }}
        onValueChange={(data) => {
            this.props.onValueChange(data);
        }}
        wrapperHeight={200}
        wrapperWidth={2}
        wrapperColor='#'
        itemHeight={40}
        highlightColor='white'
        highlightBorderWidth={2}
        
      />
    );
  }
}


