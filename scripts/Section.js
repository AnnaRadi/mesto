export default class Section {
    constructor({items,render}, selector) {
      this._renderItems = items;
      this._render = render;
      this._container = document.querySelector(selector);
    }
  
    addItem(item) {
      this._container.prepend(item);
    }
  
    renderItems() {
      this._renderItems.forEach((item) => {
        this._render(item);
      });
    }
  }
  