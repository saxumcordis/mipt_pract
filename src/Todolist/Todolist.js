import { TodolistItem } from './TodolistItem';

export class Todolist {
  static _template = document.querySelector('.todolist-template');

  constructor(items, parent) {
    this.parent = parent;
    this.items = items;

    this.view = Todolist._template.cloneNode();
  }

  addItem = (text) => {
    const itemView = new TodolistItem(text, this.view, this.addItem);

    itemView.render();
  }

  render() {
    const todoListView = this.view;

    this.items.forEach(item => this.addItem(item))

    this.parent.append(todoListView);
  }
}
