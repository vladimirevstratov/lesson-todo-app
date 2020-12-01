import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TodoList from '../../Components/TodoList';
import CircleButton from '../../Components/CircleButton';
import styles from './styles';
import TodoBlock from '../../Components/TodoBlock';

const initialTodoData = [
  {
    id: '1',
    isCompleted: false,
    name: 'Задача 1',
    category: 'Финансы',
  },
  {
    id: '2',
    isCompleted: false,
    name: 'Задача 2',
    category: 'Список покупок',
  },
  {
    id: '3',
    isCompleted: true,
    name: 'Задача 3',
    category: 'Финансы',
  },
  {
    id: '4',
    isCompleted: false,
    name: 'Задача 4',
    category: 'Отдых',
  },
  {
    id: '5',
    isCompleted: true,
    name: 'Задача 5',
    category: 'Финансы',
  },
];

const generateId = () => Math.floor(Math.random() * Math.floor(1000));

const initialTask = {
  id: null,
  name: 'Новая задача',
  category: null,
  isCompleted: false,
};

const Main = () => {
  const [todoData, setTodoData] = useState(initialTodoData);

  const addNewTask = () => {
    setTodoData([
      ...todoData,
      {
        ...initialTask,
        id: generateId().toString(),
      },
    ]);
  };

  const filterTodoData = ({data, status}) =>
    data.filter((item) => item.isCompleted === status);

  const setTaskCompleted = ({isChecked, id}) => {
    const newTodoData = todoData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: isChecked,
        };
      } else {
        return item;
      }
    });

    setTodoData(newTodoData);
  };

  return (
    <View style={styles.container}>
      <TodoBlock
        todoData={filterTodoData({data: todoData, status: false})}
        title={'Новые'}
        setTaskCompleted={setTaskCompleted}
      />
      <TodoBlock
        todoData={filterTodoData({data: todoData, status: true})}
        title={'Выполненные '}
        setTaskCompleted={setTaskCompleted}
      />
      <CircleButton add={addNewTask} />
    </View>
  );
};

export default Main;
