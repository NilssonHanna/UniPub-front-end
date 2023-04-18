import * as React from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Bar = () => (
  <ProgressBar 
    progress={0.1} 
    color={'#00FF00'}
    style={styles.container}
    progressViewStyle={styles.progressBar}
  />
  
);

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 200,
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 1.5,
        backgroundColor:'#FF0000',
    },
    progressBar: {
      height: '100%',
      borderRadius: 3,
    },
  });
  

export default Bar;