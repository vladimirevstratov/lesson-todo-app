import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CircleButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default CircleButton;
