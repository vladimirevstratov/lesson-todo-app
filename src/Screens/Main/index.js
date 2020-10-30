import React from 'react';
import {View} from 'react-native';
import TodoList from '../../Components/TodoList';
import CircleButton from '../../Components/CircleButton';

const Main = () => {
  return (
    <View>
      <TodoList />
      <CircleButton />
    </View>
  );
};

export default Main;
