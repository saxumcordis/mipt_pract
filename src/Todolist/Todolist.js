import { TodolistItem } from './TodolistItem';

export class Todolist {
  static _template = document.querySelector('#todolist-template').content;

  constructor(items, createTodoListItem, createTodoListForm) {
    this._items = items;
    this._createTodolistForm = createTodoListForm;
    this._createTodolistItem = createTodoListItem;

    this.view = Todolist._template.cloneNode(true).children[0];
  }

  _addItem = (text) => {
    const itemView = this._createTodolistItem(text, this._addItem);

    itemView.render(this.view);
  }

  render(container) {
    this._createTodolistForm(this._addItem).render(this.view);
    this._items.forEach(item => this._addItem(item))

    container.append(this.view);
  }
}
