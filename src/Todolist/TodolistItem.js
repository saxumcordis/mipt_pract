export class TodolistItem {
  static _template = document.querySelector('#todolist-item-template').content;

  constructor(text, onCopy) {
    this.text = text;
    this.view = TodolistItem._template.cloneNode(true).children[0];
    this._onCopyItem = onCopy;

    this.deleteButton = this.view.querySelector('.todolist-item__controls-delete');
    this.copyButton = this.view.querySelector('.todolist-item__controls-copy');

    this.deleteButton.addEventListener('click', this._selfDestruction)
    this.copyButton.addEventListener('click', this._copyItem)
  }

  _copyItem = () => {
    this._onCopyItem(this.text);
  }

  _selfDestruction = () => {
    this.view.remove();
  }

  render(container) {
    const titleElement = this.view.querySelector('.todolist-item__title');

    titleElement.textContent = this.text;

    container.append(this.view);
  }
}
