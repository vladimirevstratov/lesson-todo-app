import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Picker} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import {todoProps} from '../../Constants/todo';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({
  id,
  name,
  category,
  onChangeTodo,
  isCompleted,
  todoCategories,
  onDeleteTodo,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(isCompleted);
  const [isEditable, setIsEditable] = useState(false);

  const onChange = (key, value) => {
    if (key === todoProps.isCompleted) {
      setToggleCheckBox(value);
    }
    onChangeTodo({key, value, id});
  };

  const renderPickerItems = () =>
    Object.keys(todoCategories).map((key) => (
      <Picker.Item label={todoCategories[key]} value={todoCategories[key]} />
    ));

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(value) => onChange(todoProps.isCompleted, value)}
        />
        <View style={styles.textContainer}>
          {isEditable ? (
            <TextInput
              onChangeText={(value) => onChange(todoProps.name, value)}
              defaultValue={name}
              style={styles.nameText}
            />
          ) : (
            <Text
              style={[
                styles.nameText,
                isCompleted ? styles.completedNameText : null,
              ]}>
              {name}
            </Text>
          )}
          {isCompleted ? null : isEditable ? (
            <Picker
              selectedValue={category}
              onValueChange={(value) => onChange(todoProps.category, value)}>
              {renderPickerItems()}
            </Picker>
          ) : (
            <Text>{category}</Text>
          )}
        </View>
      </View>
      {isCompleted ? null : (
        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => setIsEditable(!isEditable)}>
              <Icon name="pencil" size={25} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => onDeleteTodo({id})}
              style={styles.icon}>
              <Icon name="trash" size={25} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default TodoItem;
