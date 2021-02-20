import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TodoItem from '../TodoItem';

const TodoList = ({todoData, onChangeTodo, todoCategories, onDeleteTodo}) => {
  const renderItem = ({item}) => (
    <TodoItem
      id={item.id}
      name={item.name}
      category={item.category}
      onChangeTodo={onChangeTodo}
      isCompleted={item.isCompleted}
      todoCategories={todoCategories}
      onDeleteTodo={onDeleteTodo}
    />
  );

  return (
    <View>
      <FlatList
        data={todoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoList;
