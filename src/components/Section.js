export default class Section {
    constructor ({items,renderer}, containerSelector) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }
    render() {
        this._renderItems.forEach(item => {
            this.addItem(this._renderer(item))
        });
    }
    addItem(element) {
        this._container.prepend(element);
    }
}