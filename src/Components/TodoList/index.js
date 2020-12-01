import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TodoItem from '../TodoItem';

const TodoList = ({todoData, setTaskCompleted}) => {
  const renderItem = ({item}) => (
    <TodoItem
      id={item.id}
      name={item.name}
      category={item.category}
      setTaskCompleted={setTaskCompleted}
      isCompleted={item.isCompleted}
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
