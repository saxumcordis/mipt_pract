export class TodolistItem {
  static _template = document.querySelector('.todolist-template__item');

  constructor(text, parent, onCopy) {
    this.text = text;
    this.parent = parent;
    this.view = TodolistItem._template.cloneNode(true);
    this.onCopyItem = onCopy;

    this.deleteButton = this.view.querySelector('.todolist-template__item-controls-delete');
    this.copyButton = this.view.querySelector('.todolist-template__item-controls-copy');

    this.deleteButton.addEventListener('click', this._selfDestruction)
    this.copyButton.addEventListener('click', this._copyItem)
  }

  _copyItem = () => {
    this.onCopyItem(this.text);
  }

  _selfDestruction = () => {
    this.view.remove();
  }

  render() {
    const titleElement = this.view.querySelector('.todolist-template__item-title');

    titleElement.textContent = this.text;

    this.parent.append(this.view);
  }
}
