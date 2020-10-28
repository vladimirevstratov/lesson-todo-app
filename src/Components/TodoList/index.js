import React from 'react';
import {View, Text, FlatList} from 'react-native';

const todoData = [
  {
    id: '1',
    name: 'Задача 1',
    category: 'Финансы',
  },
  {
    id: '2',
    name: 'Задача 2',
    category: 'Список покупок',
  },
  {
    id: '3',
    name: 'Задача 3',
    category: 'Финансы',
  },
  {
    id: '4',
    name: 'Задача 4',
    category: 'Отдых',
  },
  {
    id: '5',
    name: 'Задача 5',
    category: 'Финансы',
  },
];

const TodoList = () => {
  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.category}</Text>
    </View>
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
