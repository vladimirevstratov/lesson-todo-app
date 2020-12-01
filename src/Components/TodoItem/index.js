import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const TodoItem = ({id, name, category, setTaskCompleted, isCompleted}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(isCompleted);

  const onChange = (newValue) => {
    setToggleCheckBox(newValue);
    setTaskCompleted({isChecked: newValue, id});
  };

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={onChange}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text>{category}</Text>
      </View>
    </View>
  );
};

export default TodoItem;
