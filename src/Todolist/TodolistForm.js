export class TodolistForm {
  static _template = document.querySelector('.todolist-form-template');

  constructor(onSubmit, parent) {
    this.view = TodolistForm._template.cloneNode(true);

    this._parent = parent;
    this._onSubmit = onSubmit;
    this._input = this.view.querySelector('input');

    this.view.addEventListener('submit', this._submit)
  }

  _submit = (event) => {
    event.preventDefault();

    this._onSubmit(this._input.value)
  }

  render = () => {
    this._parent.append(this.view);
  }
}
