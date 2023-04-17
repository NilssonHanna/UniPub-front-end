





import React, { Component } from 'react';
import { Text } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

export default class NumberPicker extends Component {
  render() {
    const numberRange = Array.from({ length: 201 }, (_, i) => i); // create an array with numbers from 0 to 100

    return (
      <ScrollPicker
        dataSource={numberRange}
        selectedIndex={0}
        renderItem={(data, index) => {
          return (
            <Text
              key={index}
              style={{
                textAlign: 'center',
                fontSize: 20,
                 }}
            >
              {data}
            </Text>
          );
        }}
        onValueChange={(data, selectedIndex) => {
          //
        }}
        wrapperHeight={400}
        wrapperWidth={1}
        wrapperColor='#FFFFFF'
        itemHeight={40}
        highlightColor='#d8d8d8'
        highlightBorderWidth={2}
      />
    );
  }
}


