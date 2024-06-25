export class TodolistForm {
  static _template = document.querySelector('#todolist-form-template').content;

  constructor(onSubmit) {
    this.view = TodolistForm._template.cloneNode(true).children[0];
    this._onSubmit = onSubmit;
    this._input = this.view.querySelector('input');

    this.view.addEventListener('submit', this._submit)
  }

  _clearInput = () => {
    this._input.value = '';
  }

  _submit = (event) => {
    event.preventDefault();

    this._onSubmit(this._input.value)
    this._clearInput();
  }

  render = (container) => {
    container.append(this.view);
  }
}
