import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Bar = ({ index, maxSeats }) => {
  let color = '#00FF00';
  if (index >= 1) {
    color = '#FF0000';
  } else if (index >= 0.7) {
    color = '#FFA500';
  }

  const progress = index > 1 ? 1 : index;

  return (
    <ProgressBar
      progress={progress}
      color={color}
      style={styles.container}
      progressViewStyle={styles.progressBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1.5,
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  }
});

export default Bar;