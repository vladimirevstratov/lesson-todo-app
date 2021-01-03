import React from 'react';
import {View, Text} from 'react-native';
import TodoList from '../TodoList';
import styles from './styles';

const TodoBlock = ({todoData, title, onChangeTodo, todoCategories}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TodoList todoData={todoData} onChangeTodo={onChangeTodo} todoCategories={todoCategories} />
    </View>
  );
};

export default TodoBlock;
