class SortedList {
    constructor() {
        this.elements = [];
        this.size = 0;
    }

    add(element) {
        this.elements.push(element);
        this.elements.sort();
        this.size++;

        this.elements.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < this.elements.length && index >= 0) {
            this.elements.splice(index, 1);
            this.size--;
        }

        this.elements.sort((a, b) => a - b);
    }

    get(index) {
        if (index < this.elements.length) {
            return this.elements[index];
        }
    }
}