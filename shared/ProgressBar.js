import * as React from 'react';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Center } from 'native-base';
//import data för hur många plates som finns, ska uppdateras varje gång nån trycker  på knapp
 
const Bar = ({ index }) => (//ta datan som inparameter här
  <ProgressBar 
    progress={index} //använd datan här
    color={'grey'}
    
    /* style={styles.container} */
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
      
        
    },
    progressBar: {
      /* height: '100%', */
      borderRadius: 10,
      
    },
  });
  

export default Bar;