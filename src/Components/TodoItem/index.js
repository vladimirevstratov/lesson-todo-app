import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const TodoItem = ({name, category}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text>{category}</Text>
      </View>
    </View>
  );
};

export default TodoItem;
