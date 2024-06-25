import { Todolist } from './src/Todolist/Todolist';
import { TodolistForm } from './src/Todolist/TodolistForm';
import { TodolistItem } from './src/Todolist/TodolistItem';

const todoListItems = [
  'Сделать 1 задание',
  'Сделать 2 задание',
  'Сделать 3 задание',
  'Сходить в магазин',
  'Сделать лабку',
];

const contentContainer = document.querySelector('.content');

const createTodoListForm = (...arg) => new TodolistForm(...arg);
const createTodoListItem = (...arg) => new TodolistItem(...arg);

const todoListView = new Todolist(todoListItems, createTodoListItem, createTodoListForm);

todoListView.render(contentContainer);






