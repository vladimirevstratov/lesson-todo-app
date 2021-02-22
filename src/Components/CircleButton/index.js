import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const CircleButton = ({add}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => add()}>
            <Icon name="plus" size={25} color="#ffffff" />

    </TouchableOpacity>
  );
};

export default CircleButton;
