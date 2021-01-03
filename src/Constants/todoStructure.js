import {todoProps} from './todo';

export const categoriesData = {
  finance: 'Финансы',
  wishList: 'Список покупок',
  weekend: 'Отдых',
};

export const initialTodoData = [
  {
    [todoProps.id]: '1',
    [todoProps.isCompleted]: false,
    [todoProps.name]: 'Задача 1',
    [todoProps.category]: categoriesData.finance,
  },
  {
    [todoProps.id]: '2',
    [todoProps.isCompleted]: false,
    [todoProps.name]: 'Задача 2',
    [todoProps.category]: categoriesData.wishList,
  },
  {
    [todoProps.id]: '3',
    [todoProps.isCompleted]: true,
    [todoProps.name]: 'Задача 3',
    [todoProps.category]: categoriesData.finance,
  },
  {
    [todoProps.id]: '4',
    [todoProps.isCompleted]: false,
    [todoProps.name]: 'Задача 4',
    [todoProps.category]: categoriesData.weekend,
  },
  {
    [todoProps.id]: '5',
    [todoProps.isCompleted]: true,
    [todoProps.name]: 'Задача 5',
    [todoProps.category]: categoriesData.finance,
  },
];
