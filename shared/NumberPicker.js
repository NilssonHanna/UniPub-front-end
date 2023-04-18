import React, { Component } from 'react';
import { Text } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

export default class NumberPicker extends Component {
  render() {
    const numberRange = Array.from({ length: 201 }, (_, i) => i); // create an array with numbers from 0 to 100
    
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
                fontSize: 20,
                color: isSelected ? 'black' : 'grey',
                
                 }}
            >
              {data}
            </Text>
          );
        }}
        onValueChange={(data) => {
            this.props.onValueChange(data);
        }}
        wrapperHeight={180}
        wrapperWidth={1}
        wrapperColor='#'
        itemHeight={40}
        highlightColor='black'
        highlightBorderWidth={1}
       
       
        
      />
    );
  }
}


