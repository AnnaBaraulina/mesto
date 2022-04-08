export default class Section {
    constructor ({renderer}, containerSelector) {
        
        this._renderer = renderer;
        this._container = containerSelector;
    }
    render(objectCards) {
      
      objectCards.forEach((item) => {
          this._renderer(item);
      });
    }
    addItem(element) {
        this._container.prepend(element);
    }

    setItem(element) {
        this._container.append(element);
    }
}