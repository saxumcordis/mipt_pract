import { Todolist } from './src/Todolist/Todolist';
import { TodolistForm } from './src/Todolist/TodolistForm';



const todoListItems = [
  'Сделать 1 задание',
  'Сделать 2 задание',
  'Сделать 3 задание',
  'Сходить в магазин',
  'Сделать лабку',
]
const contentContainer = document.querySelector('.content');
const todoListView = new Todolist(todoListItems, contentContainer);
const todoListForm = new TodolistForm(todoListView.addItem, contentContainer);

todoListForm.render();
todoListView.render();






